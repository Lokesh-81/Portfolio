"use client";

const experience = [
  {
    role: "Frontend Developer & Team Lead",
    company: "Multiple Startups",
    period: "2022 - Present",
    description: "Led frontend development across healthcare, education, AI, and nonprofit platforms. Built responsive web applications, designed premium UI/UX interfaces, integrated REST APIs, and optimized application performance.",
    highlights: [
      "Built responsive web applications with React and Next.js",
      "Designed premium UI/UX interfaces with Tailwind CSS and animations",
      "Integrated REST APIs and managed authentication with JWT",
      "Led frontend development teams and managed project deployment",
      "Optimized application performance across multiple platforms",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Personal Projects & Learning",
    period: "2021 - Present",
    description: "Continuously expanding expertise in full-stack development, AI-powered applications, and cloud technologies. Building projects from concept to deployment.",
    highlights: [
      "Mastered React, Next.js, TypeScript, and modern web frameworks",
      "Developed backend APIs with Node.js and Express.js",
      "Worked with MongoDB and MySQL databases",
      "Explored AI integrations and cloud technologies",
      "Deployed applications on Vercel, Google Cloud, and AWS",
    ],
  },
  {
    role: "B.Sc. (MSCS) Student",
    company: "Wesley Degree College, Osmania University",
    period: "2022 - Present",
    description: "Pursuing Bachelor of Science in Mathematics, Statistics, and Computer Science while actively working on web development projects.",
    highlights: [
      "Strong foundation in Computer Science principles",
      "Mathematics and Statistics expertise",
      "Balancing academics with practical development experience",
      "Continuous learning and skill development",
    ],
  },
];

export function GallerySection() {
  return (
    <section id="experience" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Journey of growth through work, learning, and continuous improvement
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l border-border hover:border-primary transition-colors"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-background" />
              
              {/* Content */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground px-3 py-1 bg-secondary rounded-full whitespace-nowrap ml-4">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-foreground/70 text-sm flex items-start">
                      <span className="text-primary mr-3 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
