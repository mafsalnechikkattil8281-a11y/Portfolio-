import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Camera setup with cinematic bokeh lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-sm uppercase tracking-[0.4em] text-primary font-body mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Photography · Videography · Editing
        </p>
        <h1
          className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none tracking-wide text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          VISUAL
          <br />
          <span className="text-gradient">STORYTELLER</span>
        </h1>
        <p
          className="mt-6 text-lg text-muted-foreground font-body max-w-xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Crafting cinematic visuals that capture emotion, tell stories, and leave lasting impressions.
        </p>
        <div
          className="mt-10 flex gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#works"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            View Works
          </a>
          <a
            href="#contact"
            className="border border-foreground/30 text-foreground px-8 py-3 rounded-full font-body text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
