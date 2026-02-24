import { Camera, Film, Palette } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">
              About Me
            </p>
            <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              CREATING VISUALS
              <br />
              THAT <span className="text-gradient">INSPIRE</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              I'm <span className="text-foreground font-semibold">Afsal</span>, a visual content creator specializing in photography, videography, and post-production editing.
              With a keen eye for detail and a passion for storytelling, I transform moments into cinematic experiences.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              From portraits to landscapes, commercial shoots to creative projects — every frame is crafted with intention and artistry.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              { icon: Camera, title: "Photography", desc: "Portrait, landscape, product, and event photography with a cinematic touch." },
              { icon: Film, title: "Videography", desc: "Cinematic video production from concept to final cut. Commercials, reels, and more." },
              { icon: Palette, title: "Editing", desc: "Color grading, retouching, and post-production that elevates every visual." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl tracking-wide text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
