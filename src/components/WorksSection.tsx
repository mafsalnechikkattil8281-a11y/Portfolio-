import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import work1_1 from "@/assets/wedding-vid-1.jpg";
import work1_2 from "@/assets/wedding-vid-2.jpg";
import work2_1 from "@/assets/wedding-photo-1.png";
import work2_2 from "@/assets/wedding-photo-2.png";
import work2_3 from "@/assets/wedding-photo-3.png";
import work2_4 from "@/assets/wedding-photo-4.png";

// College Event Images
import event9 from "@/assets/IMG_2946.JPG.jpeg";
import event10 from "@/assets/IMG_2947.JPG.jpeg";

// Travel Photography Images
import trav1 from "@/assets/travel-1.jpeg";
import trav2 from "@/assets/travel-2.jpeg";
import trav3 from "@/assets/travel-3.jpeg";
import trav4 from "@/assets/travel-4.jpeg";
import trav5 from "@/assets/travel-5.jpeg";
import trav6 from "@/assets/travel-6.jpeg";
import trav7 from "@/assets/travel-7.jpeg";

gsap.registerPlugin(ScrollTrigger);

const WORKS = [
  {
    images: [work1_1, work1_2],
    title: "Wedding Videography",
    category: "Cinema",
    alt: "Cinematic wedding film capture"
  },
  {
    images: [work2_1, work2_2, work2_3, work2_4],
    title: "Wedding Photography",
    category: "Portrait",
    alt: "Beautiful wedding day moments"
  },
  {
    images: [trav1, trav2, trav3, trav4, trav5, trav6, trav7],
    title: "Travel Photography",
    category: "Exploring",
    alt: "Travel storytelling through visuals"
  },
  {
    images: [event9, event10],
    title: "College Events",
    category: "Event",
    alt: "Capturing vibrant college event memories"
  },
];

const WorkImage = ({ images, src, alt }: { images?: string[], src?: string, alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  const displaySrc = images ? images[currentIndex] : src;

  return (
    <div className="w-full h-full relative">
      {images ? (
        images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            loading="lazy"
          />
        ))
      ) : (
        <img
          src={displaySrc}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      )}
    </div>
  );
};

const WorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${totalScroll}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section id="works" ref={sectionRef} className="overflow-hidden">
      <div className="h-screen flex flex-col justify-center">
        <div className="px-6 md:px-12 lg:px-24 mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">
            Selected Works
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-foreground">
            MY <span className="text-gradient">PORTFOLIO</span>
          </h2>
        </div>

        <div ref={trackRef} className="flex gap-6 pl-6 md:pl-12 lg:pl-24 will-change-transform">
          {WORKS.map((work, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] overflow-hidden bg-secondary/20">
                <WorkImage images={work.images} alt={work.alt} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-primary font-body mb-1">
                  {work.category}
                </span>
                <h3 className="font-display text-2xl text-foreground tracking-wide">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
          {/* Spacer for scroll end */}
          <div className="flex-shrink-0 w-24" />
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
