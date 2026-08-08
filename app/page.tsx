"use client"

import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { PortfolioCard, type Project } from "@/components/portfolio-card"

const projects: Project[] = [
  { index: "01", title: "Lumora AI", subtitle: "PERSONAL PROJECT", type: "AI product · Personal project", year: "2026", accent: "#d7ff4f", planet: "#4c5a19", detail: "An intelligent product exploring useful, human-centered AI experiences." },
  { index: "02", title: "Naivaidya", subtitle: "Web platform", type: "Full-stack · Product", year: "2026", accent: "#ff996b", planet: "#69432e", detail: "A modern digital experience built across interface, backend, and APIs." },
  { index: "03", title: "BELVO", subtitle: "Professional work", type: "Full-stack · Web", year: "2026", accent: "#b5a0ff", planet: "#483c68", detail: "Selected work from my full-stack web development practice at BELVO." },
  { index: "04", title: "Indira Thakur", subtitle: "Web experience", type: "Frontend · Product", year: "2025", accent: "#ffcc73", planet: "#69502a", detail: "A focused web experience designed around clarity and connection." },
  { index: "05", title: "Foundarly", subtitle: "Digital product", type: "Product · Engineering", year: "2025", accent: "#7df0df", planet: "#295e5b", detail: "A digital product shaped through thoughtful systems and implementation." },
]

const skills = ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "Django", "Tailwind CSS", "MySQL", "MongoDB", "Supabase", "REST APIs", "AI", "Generative AI", "RAG", "LLM Applications", "Git", "GitHub", "Vercel", "Power BI", "Microsoft Fabric"]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = ["home", "work", "about", "experience", "education", "skills", "contact"]

  const structuredData = { "@context": "https://schema.org", "@type": "Person", name: "Poosala Lokesh", alternateName: "P. Lokesh", jobTitle: ["Full-Stack Web Developer", "AI Developer"], address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "India" }, url: "https://github.com/lokeshnaivaidya-max", sameAs: ["https://github.com/lokeshnaivaidya-max"] }

  return (
    <main className="site-shell" id="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#home" aria-label="P. Lokesh home">P<span>.</span>LOKESH</a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {nav.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-intro"><span className="eyebrow">Full-stack web developer / AI developer</span><p>Hyderabad, Telangana<br />India</p></div>
        <div className="hero-title-wrap"><p className="hero-kicker">Portfolio / 2026</p><h1 id="hero-title">P.<br /><em>LOKESH</em></h1><p className="hero-note">FULL-STACK WEB DEVELOPER<br />AI DEVELOPER</p><p className="hero-support">Building modern web experiences and intelligent products.</p></div>
        <a className="scroll-cue" href="#work"><span>Scroll to explore</span><ArrowDown size={16} /></a>
      </section>

      <section className="statement" id="about"><p className="section-label">01 / About</p><div className="statement-copy"><h2>Building useful things with <em>code and intelligence.</em></h2><div className="statement-side"><p>I&apos;m P. Lokesh, a 20-year-old Full-Stack Web Developer and AI Developer based in Hyderabad, India. I build modern web experiences and intelligent products, working across frontend, backend, APIs, AI, and product development.</p></div></div></section>

      <section className="work-section" id="work"><div className="section-heading"><p className="section-label">02 / Selected work</p><p className="section-count">05 projects / 360° view</p></div><div className="projects-grid">{projects.map((project) => <PortfolioCard key={project.index} project={project} />)}</div></section>

      <section className="info-section" id="experience"><p className="section-label">03 / Experience</p><div className="info-grid"><div><p className="eyebrow">June 2026 — Present</p><h3>FULL-STACK WEB DEVELOPER</h3><p>BELVO</p></div><div><p className="eyebrow">2025</p><h3>GOOGLE STUDENT AMBASSADOR</h3></div></div></section>
      <section className="info-section" id="education"><p className="section-label">04 / Education</p><div className="info-grid"><div><p className="eyebrow">2023 — 2027</p><h3>B.Sc. (MSCS)</h3><p>Wesley Degree College<br />Osmania University</p></div></div></section>
      <section className="skills-section" id="skills"><p className="section-label">05 / Skills</p><div className="skills-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>

      <footer className="site-footer" id="contact"><div><p className="section-label">06 / Contact</p><h2 className="contact-name">P. LOKESH</h2><p className="contact-role">Full-Stack Web Developer<br />AI Developer</p><p className="contact-location">Hyderabad, Telangana, India</p><div className="contact-links"><a href="https://github.com/lokeshnaivaidya-max" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a><a href="[ADD MY LINKEDIN URL HERE]">LinkedIn <ArrowUpRight size={16} /></a><a href="mailto:[ADD MY EMAIL HERE]">Email <ArrowUpRight size={16} /></a></div></div><div className="footer-bottom"><span>© 2026 P. Lokesh</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  )
}
