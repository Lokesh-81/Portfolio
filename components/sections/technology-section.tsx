"use client";

const projects = [
  {
    name: "Naivaidya",
    description: "Healthcare platform offering medicine delivery, doctor consultations, waitlist management, OTP verification, and payment integration.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    year: "2024",
    highlight: true,
  },
  {
    name: "Lumor AI",
    description: "AI-powered investment research platform providing real-time market insights, stock analysis, and intelligent recommendations using multiple financial APIs.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs", "MongoDB"],
    year: "2024",
    highlight: true,
  },
  {
    name: "BELVO",
    description: "Modern startup website featuring premium UI/UX, CMS integration, portfolio showcase, FAQs, testimonials, and responsive design.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    year: "2023",
  },
  {
    name: "JV EdTech",
    description: "Educational platform redesigned with premium animations, modern layouts, glassmorphism, and highly interactive user experience.",
    technologies: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
    year: "2023",
  },
  {
    name: "Sahay Foundation",
    description: "Nonprofit platform supporting social initiatives with responsive design and modern user experience.",
    technologies: ["React", "Tailwind CSS"],
    year: "2023",
  },
];

export function TechnologySection() {
  return (
    <section id="projects" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Showcase of recent work across healthcare, AI, education, and startup sectors
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group p-8 rounded-lg border transition-all duration-300 ${
                project.highlight
                  ? "border-primary bg-primary/5 hover:bg-primary/10"
                  : "border-border hover:border-primary/50 bg-background"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.year}</p>
                </div>
                {project.highlight && (
                  <span className="px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/70 group-hover:text-foreground/90 transition-colors"
                  >
                    {tech}
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
