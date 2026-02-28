import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";

import reelThumb1 from "@/assets/reel-thumb-1.mp4";
import reelThumb2 from "@/assets/reel-thumb-2.mp4";
import reelThumb3 from "@/assets/reel-thumb-3.mp4";
import reelThumb4 from "@/assets/reel-thumb-4.mp4";
import reelThumb5 from "@/assets/reel-thumb-5.mp4";

gsap.registerPlugin(Draggable);

interface FeaturedItem {
    type: "reel" | "photo";
    url: string;
    videoThumbnail?: string;
    thumbnail?: string;
    title: string;
}

const FEATURED_ITEMS: FeaturedItem[] = [
    {
        type: "reel",
        url: "https://www.instagram.com/reel/DUPwVVXkgwe/",
        videoThumbnail: reelThumb1,
        title: "Wedding Cinema"
    },
    {
        type: "reel",
        url: "https://www.instagram.com/reel/DR4omfwktKs/",
        videoThumbnail: reelThumb2,
        title: "Wedding Story"
    },
    {
        type: "reel",
        url: "https://www.instagram.com/reel/DRkMuY0ErXO/",
        videoThumbnail: reelThumb3,
        title: "Cinematic Reel"
    },
    {
        type: "reel",
        url: "https://www.instagram.com/reel/DTK7KDckuWp/",
        videoThumbnail: reelThumb4,
        title: "Bride to Be"
    },
    {
        type: "reel",
        url: "https://www.instagram.com/reel/DUa4r2LD0hi/",
        videoThumbnail: reelThumb5,
        title: "Travel Narrative"
    },
];

const FeaturedWorks = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLUListElement>(null);
    const dragProxyRef = useRef<HTMLDivElement>(null);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    useEffect(() => {
        if (!sectionRef.current || !cardsContainerRef.current || !dragProxyRef.current) return;

        const cards = gsap.utils.toArray<HTMLLIElement>(".featured-card");
        const isMobile = window.innerWidth < 768;
        const spacing = isMobile ? 0.2 : 0.15;
        const snapTime = gsap.utils.snap(spacing);

        const playhead = { offset: 0 };

        gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

        const animateFunc = (element: HTMLLIElement) => {
            const tl = gsap.timeline();
            tl.fromTo(element,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.inOut", immediateRender: false }
            ).fromTo(element,
                { xPercent: 400 },
                { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0
            );
            return tl;
        };

        const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
        const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

        const scrub = gsap.to(playhead, {
            offset: 0,
            onUpdate() {
                seamlessLoop.time(wrapTime(playhead.offset));
            },
            duration: 0.5,
            ease: "power3",
            paused: true
        });

        const scrollToOffset = (offset: number) => {
            const snappedTime = snapTime(offset);
            scrub.vars.offset = snappedTime;
            scrub.invalidate().restart();
        };

        const nextHandler = () => scrollToOffset(playhead.offset + spacing);
        const prevHandler = () => scrollToOffset(playhead.offset - spacing);

        document.querySelector(".feat-next")?.addEventListener("click", nextHandler);
        document.querySelector(".feat-prev")?.addEventListener("click", prevHandler);

        const isDragging = { value: false };

        const draggable = Draggable.create(dragProxyRef.current, {
            type: "x",
            trigger: cardsContainerRef.current,
            allowNativeTouchScrolling: false,
            lockAxis: true,
            dragClickables: true,
            minimumMovement: 5,
            onPress() {
                isDragging.value = false;
                this.startOffset = playhead.offset;
            },
            onDrag() {
                isDragging.value = true;
                const sensitivity = isMobile ? 0.002 : 0.001;
                playhead.offset = this.startOffset + (this.startX - this.x) * sensitivity;
                seamlessLoop.time(wrapTime(playhead.offset));
            },
            onDragEnd() {
                scrollToOffset(playhead.offset);
            }
        })[0];

        // Handle taps on cards (only when not dragging)
        const cardClickHandler = (e: Event) => {
            if (isDragging.value) return;
            const card = (e.currentTarget as HTMLElement);
            const url = card.getAttribute("data-url");
            if (url) {
                setActiveVideo(url);
            }
        };
        cards.forEach(card => card.addEventListener("click", cardClickHandler));

        return () => {
            draggable.kill();
            seamlessLoop.kill();
            scrub.kill();
            document.querySelector(".feat-next")?.removeEventListener("click", nextHandler);
            document.querySelector(".feat-prev")?.removeEventListener("click", prevHandler);
            cards.forEach(card => card.removeEventListener("click", cardClickHandler));
        };
    }, []);

    function buildSeamlessLoop(items: HTMLLIElement[], spacing: number, animateFunc: (el: HTMLLIElement) => gsap.core.Timeline) {
        const overlap = Math.ceil(1 / spacing);
        const startTime = items.length * spacing + 0.5;
        const loopTime = (items.length + overlap) * spacing + 1;
        const rawSequence = gsap.timeline({ paused: true });
        const seamlessLoop = gsap.timeline({
            paused: true,
            repeat: -1,
            onRepeat() {
                if (this._time === this._dur) {
                    this._tTime += this._dur - 0.01;
                }
            }
        });
        const l = items.length + overlap * 2;

        for (let i = 0; i < l; i++) {
            const index = i % items.length;
            const time = i * spacing;
            rawSequence.add(animateFunc(items[index]), time);
            if (i <= items.length) {
                seamlessLoop.add("label" + i, time);
            }
        }

        rawSequence.time(startTime);
        seamlessLoop.to(rawSequence, {
            time: loopTime,
            duration: loopTime - startTime,
            ease: "none"
        }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: "none"
        });
        return seamlessLoop;
    }

    return (
        <section id="featured" ref={sectionRef} className="h-screen overflow-hidden bg-background relative flex flex-col justify-center">
            <div className="absolute top-12 left-0 w-full px-6 md:px-12 lg:px-24 z-20">
                <p className="text-[10px] xs:text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">
                    Cinematic Gallery
                </p>
                <h2 className="font-display text-4xl xs:text-5xl lg:text-6xl text-foreground whitespace-nowrap">
                    FEATURED <span className="text-gradient">WORKS</span>
                </h2>
            </div>

            <div className="relative flex-grow flex items-center justify-center pt-20 xs:pt-12">
                <ul ref={cardsContainerRef} className="relative w-[75vw] max-w-[240px] xs:max-w-[260px] sm:max-w-72 h-[360px] xs:h-[420px] sm:h-[480px] list-none p-0 m-0">
                    {FEATURED_ITEMS.map((item, idx) => (
                        <li
                            key={idx}
                            className="featured-card absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl bg-card"
                            data-url={item.url}
                        >
                            <div className="relative w-full h-full group">
                                {item.videoThumbnail ? (
                                    <video
                                        src={item.videoThumbnail}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                                    <div className="flex items-center gap-2 mb-2">
                                        <button
                                            className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 pointer-events-auto hover:bg-white/30 transition-colors"
                                            onPointerUp={(e) => {
                                                e.stopPropagation();
                                                setActiveVideo(item.url);
                                            }}
                                        >
                                            {item.type === "reel" ? (
                                                <Play className="w-4 h-4 text-white fill-white" />
                                            ) : (
                                                <Instagram className="w-4 h-4 text-white" />
                                            )}
                                        </button>
                                        <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold">
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 className="text-white font-display text-2xl tracking-wide uppercase leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div ref={dragProxyRef} className="invisible absolute top-0 left-0" />
            </div>

            <div className="absolute bottom-4 xs:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
                <button className="feat-prev w-10 h-10 xs:w-12 xs:h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group">
                    <ChevronLeft className="w-5 h-5 xs:w-6 xs:h-6 text-foreground group-hover:text-primary transition-colors" />
                </button>
                <button className="feat-next w-10 h-10 xs:w-12 xs:h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group">
                    <ChevronRight className="w-5 h-5 xs:w-6 xs:h-6 text-foreground group-hover:text-primary transition-colors" />
                </button>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 animate-fade-in"
                    onClick={() => setActiveVideo(null)}
                    onTouchStart={(e) => {
                        const touch = e.touches[0];
                        (e.currentTarget as HTMLElement).dataset.touchStartX = String(touch.clientX);
                    }}
                    onTouchEnd={(e) => {
                        const startX = Number((e.currentTarget as HTMLElement).dataset.touchStartX || 0);
                        const endX = e.changedTouches[0].clientX;
                        if (endX - startX > 80) {
                            setActiveVideo(null);
                        }
                    }}
                >
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

                    {/* Back Arrow */}
                    <button
                        className="absolute top-20 left-5 text-white/80 active:text-white transition-colors z-[1100] p-3"
                        onClick={(e) => { e.stopPropagation(); setActiveVideo(null); }}
                        onTouchEnd={(e) => { e.stopPropagation(); e.preventDefault(); setActiveVideo(null); }}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <div
                        className="relative z-[110] w-full max-w-[280px] sm:max-w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`${activeVideo}embed`}
                            className="w-full h-full"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FeaturedWorks;
