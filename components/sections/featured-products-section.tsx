"use client";

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
  { category: "Database", items: ["MongoDB", "MySQL", "Data Design"] },
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
  { category: "Cloud & DevOps", items: ["Git/GitHub", "Vercel", "Google Cloud", "AWS"] },
  { category: "Tools & Design", items: ["VS Code", "Figma", "Postman", "GSAP", "Three.js"] },
];

export function FeaturedProductsSection() {
  return (
    <section id="skills" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:bg-secondary transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
