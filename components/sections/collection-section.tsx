"use client";

const interests = [
  {
    title: "Full Stack Development",
    description: "Building complete web applications from frontend to backend with modern technologies",
  },
  {
    title: "Artificial Intelligence",
    description: "Exploring AI-powered solutions and integrating machine learning into web applications",
  },
  {
    title: "Cloud Computing",
    description: "Leveraging cloud platforms for scalable, reliable, and efficient deployments",
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that prioritize user experience",
  },
  {
    title: "Startup Product Development",
    description: "Building products that solve real-world problems and create meaningful impact",
  },
  {
    title: "Web Performance",
    description: "Optimizing applications for speed, accessibility, and best practices",
  },
];

const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Communication",
  "Adaptability",
  "Time Management",
  "Critical Thinking",
  "Collaboration",
  "Continuous Learning",
];

export function CollectionSection() {
  return (
    <section id="about" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          About & Interests
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 md:px-12 lg:px-20 pb-24">
        {/* Left Column - About */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Who I Am</h3>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I&apos;m Poosala Lokesh, a B.Sc. (MSCS) student at Wesley Degree College, affiliated with Osmania University, and a passionate Full Stack Developer focused on building modern, scalable web applications.
            </p>
            <p>
              I specialize in creating premium user experiences using React, Next.js, TypeScript, Tailwind CSS, and modern web technologies. My passion lies in combining beautiful UI/UX with clean architecture to build products that feel fast, interactive, and production-ready.
            </p>
            <p>
              I&apos;ve worked on startup products in healthcare, AI, education, and nonprofit sectors, contributing as a Frontend Developer and Team Lead. I enjoy solving real-world problems through technology and continuously explore new technologies and frameworks.
            </p>
            <p>
              Currently, I&apos;m focused on expanding my expertise in full-stack development, AI-powered applications, and cloud technologies while building projects that create meaningful impact.
            </p>
          </div>
        </div>

        {/* Right Column - Interests & Skills */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Areas of Interest</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors bg-background/50"
              >
                <h4 className="font-semibold text-foreground mb-2">{interest.title}</h4>
                <p className="text-sm text-foreground/60">{interest.description}</p>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
