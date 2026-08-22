'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RaceMachine = dynamic(() => import('../components/RaceMachine'), { ssr: false, loading: () => <div className="scene-loading">INITIALISING RACE SYSTEM...</div> });

const projects = [
  { n: '01', title: 'LUMOR AI', type: 'AI-Powered Investment Research', text: 'Real-time market intelligence, RAG research, and AI-driven investment workflows.', stack: 'Next.js / Gemini / MongoDB / Redis' },
  { n: '02', title: 'NAIVAIDYA', type: 'Healthcare Technology Platform', text: 'Healthcare access, medicine delivery, doctor consultation, and multilingual workflows.', stack: 'React / Node.js / APIs / Payments' },
  { n: '03', title: 'BELVO', type: 'Startup & Business Website', text: 'A polished business presence built for growth, trust, and responsive customer journeys.', stack: 'Full-stack / UI-UX / Vercel' },
  { n: '04', title: 'JV EDTECH', type: 'Immersive EdTech Redesign', text: 'Premium SaaS visuals, cinematic scrolling, glass UI, and performance-led interaction.', stack: 'React / GSAP / Three.js' },
  { n: '05', title: 'INDIRA THAKUR', type: 'Photography Platform', text: 'Gallery, lightbox, admin, SEO, Supabase and a performance-first visual experience.', stack: 'Next.js / Supabase / Vercel' },
];

const skillGroups = [
  ['FRONTEND', 'React.js · Next.js · TypeScript · Tailwind · Framer Motion · GSAP · Three.js'],
  ['BACKEND', 'Node.js · Express.js · Django · REST APIs · Authentication · JWT'],
  ['DATA & AI', 'MongoDB · MySQL · Supabase · Gemini · RAG · Financial APIs'],
  ['TOOLS', 'Git · GitHub · Vercel · Netlify · Postman · Power BI'],
];

export default function Home() {
  return <main>
    <nav className="nav"><a href="#top" className="mark">L<span>/</span></a><div><a href="#work">WORK</a><a href="#profile">PROFILE</a><a href="#contact">CONTACT</a></div></nav>
    <section className="hero" id="top">
      <div className="hero-copy"><motion.p className="eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}>01 — P. LOKESH / FULL-STACK WEB DEVELOPER</motion.p><motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.1}}>BUILD<br/><i>THE</i><br/>WEBVERSE.</motion.h1><motion.p className="intro" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}}>Building intelligent, scalable and visually immersive digital experiences.</motion.p><a className="line-cta" href="#work">EXPLORE SELECTED WORK <b>↘</b></a></div>
      <div className="hero-scene"><RaceMachine /></div><div className="metrics"><span>VELOCITY<b>320</b></span><span>STACK<b>FULL</b></span><span>MODE<b>APEX</b></span></div><p className="scroll-note">SCROLL TO ACCELERATE <b>↓</b></p>
    </section>
    <section className="section work" id="work"><p className="eyebrow">02 — SELECTED WORK / 2024—2026</p><div className="section-title"><h2>PRODUCTS<br/>BUILT TO <i>CONNECT.</i></h2><p>From AI research tools to healthcare platforms, I turn complex ideas into precise and resilient products.</p></div><div className="project-list">{projects.map(p=><motion.article className="project" key={p.n} whileHover={{x:10}}><span>{p.n}</span><div><h3>{p.title}</h3><p>{p.type}</p></div><div className="project-detail"><p>{p.text}</p><small>{p.stack}</small></div><b>↗</b></motion.article>)}</div></section>
    <section className="profile section" id="profile"><div className="profile-photo"><Image src="/lokesh-profile.png" alt="P. Lokesh working at a laptop" fill priority sizes="(max-width: 800px) 85vw, 35vw" /></div><div className="profile-copy"><p className="eyebrow">03 — DRIVER PROFILE / HYDERABAD, INDIA</p><h2>PRECISION<br/>IS MY <i>EDGE.</i></h2><p className="bio">I&apos;m P. Lokesh, a Full-Stack Web Developer and Computer Science student who builds complete digital products across frontend, backend, APIs, databases, AI integration and deployment.</p><p className="education">B.Sc. Mathematics, Statistics & Computer Science · Wesley Degree College · Expected 2027<br/>Google Student Ambassador — 2025</p></div></section>
    <section className="skills section"><p className="eyebrow">04 — PERFORMANCE STACK</p><h2>CODED<br/>FOR <i>THE WEB.</i></h2><div className="skills-grid">{skillGroups.map(([name, list], i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p>{list}</p></article>)}</div></section>
    <section className="section achievements"><p className="eyebrow">05 — COMMUNITY & MOMENTUM</p><div><h2>ALWAYS<br/><i>IN MOTION.</i></h2><p>Google Student Ambassador · Postman User Group Hyderabad · AI Day by AI Anytime · Microsoft Fabric User Group · Shardeum India On-chain Tour Hackathon · V0 by Vercel Event</p></div></section>
    <section className="contact section" id="contact"><p className="eyebrow">06 — START A PROJECT</p><h2>LET&apos;S MAKE<br/><i>THE WEB BETTER.</i></h2><div className="contact-grid"><a href="mailto:lokesh81@myyahoo.com">LOKESH81@MYYAHOO.COM <b>↗</b></a><a href="tel:+918885674172">+91 88856 74172 <b>↗</b></a><a href="https://github.com/Lokesh-81" target="_blank">GITHUB / LOKESH-81 <b>↗</b></a><a href="https://www.linkedin.com/in/poosala-lokesh/" target="_blank">LINKEDIN / POOSALA-LOKESH <b>↗</b></a></div><p className="footer">© 2026 P. LOKESH · HYDERABAD, INDIA · FULL-STACK WEB DEVELOPER & AI ENTHUSIAST</p></section>
  </main>;
}
