"use client"

import { ArrowUpRight, MoveUpRight } from "lucide-react"
import { useState } from "react"

type Project = {
  index: string
  title: string
  subtitle: string
  type: string
  year: string
  accent: string
  planet: string
  detail: string
}

export function PortfolioCard({ project }: { project: Project }) {
  const [active, setActive] = useState(false)

  return (
    <article
      className={`portfolio-card ${active ? "is-active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex={0}
      aria-label={`${project.title}, ${project.type}`}
    >
      <div className="card-orbit orbit-one" />
      <div className="card-orbit orbit-two" />
      <div className="planet" style={{ "--planet": project.planet, "--accent": project.accent } as React.CSSProperties}>
        <span className="planet-ring" />
        <span className="planet-glow" />
      </div>
      <div className="card-topline">
        <span>{project.index}</span>
        <span>{project.year}</span>
      </div>
      <div className="card-copy">
        <p className="eyebrow">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="card-subtitle">{project.subtitle}</p>
        <p className="card-detail">{project.detail}</p>
      </div>
      <div className="card-footer">
        <span>Explore project</span>
        <span className="arrow-circle"><ArrowUpRight size={16} strokeWidth={1.5} /></span>
      </div>
    </article>
  )
}

export function ProjectLink({ children }: { children: React.ReactNode }) {
  return <a className="project-link" href="#projects">{children}<MoveUpRight size={15} /></a>
}

export type { Project }
