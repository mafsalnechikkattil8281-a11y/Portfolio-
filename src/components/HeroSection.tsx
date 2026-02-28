

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-end overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Content */}
      <div className="relative z-10 text-right px-6 md:px-12 lg:px-24 max-w-4xl">
        <p
          className="text-sm uppercase tracking-[0.4em] text-primary font-body mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Photography · Videography · Editing
        </p>
        <h1
          className="font-display text-4xl xs:text-5xl sm:text-8xl lg:text-9xl leading-[0.9] tracking-wide text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          VISUAL
          <br />
          <span className="text-gradient">STORYTELLER</span>
        </h1>
        <p
          className="mt-6 text-base sm:text-lg text-muted-foreground font-body max-w-xl ml-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Hi, I'm <span className="text-foreground font-semibold">Afsal</span>. I craft cinematic visuals that capture emotion, tell stories, and leave lasting impressions.
        </p>
        <div
          className="mt-6 sm:mt-10 flex flex-row gap-3 sm:gap-4 justify-center sm:justify-end opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#works"
            className="bg-primary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-full font-body text-[10px] sm:text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity text-center"
          >
            View Works
          </a>
          <a
            href="#contact"
            className="border border-foreground/30 text-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-full font-body text-[10px] sm:text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
