import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const WORKS = [
  { src: work1, title: "Dramatic Portrait", category: "Photo", alt: "Cinematic portrait with dramatic studio lighting" },
  { src: work2, title: "Golden Hour", category: "Photo", alt: "Golden hour sunset over mountain landscape" },
  { src: work3, title: "Behind the Lens", category: "Video", alt: "Professional videography setup on film set" },
  { src: work4, title: "Aerial Perspective", category: "Photo", alt: "Aerial drone shot of river through forest" },
  { src: work5, title: "Product Elegance", category: "Photo", alt: "Luxury watch product photography on dark marble" },
  { src: work6, title: "Urban Nights", category: "Editing", alt: "Night street photography with neon reflections" },
];

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
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
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
