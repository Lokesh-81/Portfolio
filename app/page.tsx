"use client"

import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { PortfolioCard, ProjectLink, type Project } from "@/components/portfolio-card"

const projects: Project[] = [
  { index: "01", title: "Asteria", subtitle: "For minds in motion.", type: "Brand identity · Digital", year: "2024", accent: "#d7ff4f", planet: "#4c5a19", detail: "A visual system for the next generation of independent thinkers." },
  { index: "02", title: "Orbit / 01", subtitle: "Building for the unknown.", type: "Product design · Strategy", year: "2024", accent: "#ff996b", planet: "#69432e", detail: "A new interface language for navigating complex ideas with ease." },
  { index: "03", title: "Futureforms", subtitle: "The shape of tomorrow.", type: "Editorial · Art direction", year: "2023", accent: "#b5a0ff", planet: "#483c68", detail: "An ongoing study of technology, culture, and the spaces between." },
  { index: "04", title: "Kindred", subtitle: "Closer than close.", type: "Campaign · Film", year: "2023", accent: "#ffcc73", planet: "#69502a", detail: "A campaign about the small gestures that make a place feel like home." },
  { index: "05", title: "Lumen", subtitle: "Make room for light.", type: "Web experience · 3D", year: "2022", accent: "#7df0df", planet: "#295e5b", detail: "An immersive archive for objects, places, and curious people." },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="P. Lokesh home">P<span>.</span>LOKESH</a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-intro">
          <span className="eyebrow">Independent designer / art director</span>
          <p>Based between Bengaluru<br />and everywhere curious.</p>
        </div>
        <div className="hero-title-wrap">
          <p className="hero-kicker">Portfolio / 2024—25</p>
          <h1>Ideas<br /><em>in orbit.</em></h1>
          <p className="hero-note">I make identities, interfaces,<br />and other useful things.</p>
        </div>
        <a className="scroll-cue" href="#work"><span>Scroll to explore</span><ArrowDown size={16} /></a>
      </section>

      <section className="statement" id="about">
        <p className="section-label">01 / The short version</p>
        <div className="statement-copy">
          <h2>Good design is a <em>conversation</em> between a clear idea and an open mind.</h2>
          <div className="statement-side"><p>I&apos;m P. Lokesh, a multidisciplinary designer working across brand, digital, and the occasional impossible brief.</p><ProjectLink>More about me</ProjectLink></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><p className="section-label">02 / Selected orbitals</p><p className="section-count">{projects.length} projects / 360° view</p></div>
        <div className="projects-grid">{projects.map((project) => <PortfolioCard key={project.index} project={project} />)}</div>
      </section>

      <section className="process-section">
        <p className="section-label">03 / How I work</p>
        <div className="process-grid">
          <div><span>01</span><h3>Find the signal.</h3><p>Every good project starts by making space for the real question hiding underneath the brief.</p></div>
          <div><span>02</span><h3>Make it tangible.</h3><p>Ideas become useful when they can be seen, touched, tested, and shared with other people.</p></div>
          <div><span>03</span><h3>Leave room.</h3><p>The best systems have a little air in them. Enough to grow, adapt, and surprise you later.</p></div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div><p className="section-label">Have a good question?</p><a className="footer-email" href="mailto:hello@plokesh.com">hello@plokesh.com <ArrowUpRight size={25} strokeWidth={1.3} /></a></div>
        <div className="footer-bottom"><span>© 2024 P. Lokesh</span><span>Built with curiosity</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}
