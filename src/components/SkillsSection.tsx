const SKILLS = [
  { name: "Photography", level: 95 },
  { name: "Videography", level: 90 },
  { name: "Color Grading", level: 92 },
  { name: "Photo Retouching", level: 88 },
  { name: "Motion Graphics", level: 75 },
  { name: "Drone Operation", level: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">
            Expertise
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-foreground">
            SKILLS & <span className="text-gradient">TOOLS</span>
          </h2>
        </div>

        <div className="grid gap-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-sm uppercase tracking-wider text-foreground">
                  {skill.name}
                </span>
                <span className="font-body text-sm text-primary">{skill.level}%</span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
