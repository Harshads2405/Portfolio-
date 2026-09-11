 "use client";

import Image from "next/image";
import {
  ArrowDownRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2, ChevronRight,
  Code2, Database, Download, ExternalLink, Github, Globe2, GraduationCap,
  Linkedin, Mail, MapPin, Menu, MessageSquare, Phone, Search, Server,
  Sparkles, Terminal, X, BrainCircuit, Layers3, FileText
} from "lucide-react";
import { useState } from "react";

const skills = [
  ["Python", "Programming"], ["Django", "Backend"], ["Django REST", "APIs"],
  ["FastAPI", "Backend"], ["Flask", "Backend"], ["Vue.js", "Frontend"],
  ["React", "Frontend"], ["Next.js", "Frontend"], ["PostgreSQL", "Database"],
  ["MySQL", "Database"], ["LLMs", "AI"], ["Groq AI", "AI"],
  ["OpenAI API", "AI"], ["NLP", "AI"], ["RAG", "AI"], ["Prompt Engineering", "AI"],
  ["REST APIs", "Architecture"], ["Git / GitHub", "Tools"], ["Docker", "DevOps"],
  ["Supabase", "Cloud"]
];

const projects = [
  {
    title: "AI Resume Analyzer",
    tag: "AI • SaaS",
    description: "AI-powered resume analysis and career optimization platform with ATS scoring, resume parsing, keyword-gap detection and personalized coaching.",
    stack: ["Next.js", "React", "Supabase", "Groq AI"],
    icon: Search
  },
  {
    title: "AI Assistant Doctor",
    tag: "Healthcare AI",
    description: "Disease prediction and decision-support system using supervised machine learning, symptom analysis, a Flask API and patient-oriented recommendations.",
    stack: ["Python", "Flask", "ML", "MySQL"],
    icon: BrainCircuit
  },
  {
    title: "Enterprise Immigration Platform",
    tag: "Production",
    description: "Scalable enterprise case-management backend with dynamic questionnaires, conditional branching, ERI/PERI mapping and configurable business rules.",
    stack: ["Django", "DRF", "Vue.js", "PostgreSQL"],
    icon: Layers3
  }
];

const experience = [
  {
    company: "KodSquad Technologies Pvt. Ltd.",
    role: "Python Full Stack Developer",
    date: "Jan 2026 – Aug 2026",
    points: [
      "Built and enhanced enterprise immigration case-management modules using Django and Django REST Framework.",
      "Engineered dynamic questionnaire workflows, conditional branching and ERI/PERI mapping.",
      "Designed REST APIs and optimized PostgreSQL queries, ORM operations and complex relationships.",
      "Collaborated across backend and Vue.js frontend integration, testing, debugging and production delivery."
    ]
  },
  {
    company: "Archer Infotech",
    role: "Java Full Stack Intern",
    date: "Aug 2024 – Nov 2025",
    points: [
      "Developed backend services using Java and Spring Boot with hands-on REST API development.",
      "Implemented and tested APIs while learning backend integration, database management and Git workflows.",
      "Gained practical experience across Java Full Stack development and the software development lifecycle."
    ]
  }
];

const research = [
  ["Machine Learning in Healthcare: Developing an AI Assistant Doctor", "IJSREM • Vol. 08, Issue 11 • 2024", "DOI: 10.55041/IJSREM38474"],
  ["AI-Assisted Creativity: Balancing Innovation and Authenticity", "IJACECT • Vol. 14, Issue 01 • 2025", ""],
  ["Intelligent Medication Recommendation Systems", "IJACECT • Vol. 14, Issue 01 • 2025", ""]
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  const nav = [
    ["Home", "#home"], ["About", "#about"], ["Skills", "#skills"],
    ["Projects", "#projects"], ["Experience", "#experience"], ["Research", "#research"], ["Contact", "#contact"]
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-ink">
      <div className="fixed inset-0 pointer-events-none opacity-60 grid-bg" />
      <div className="fixed -top-56 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="fixed top-[40%] -right-48 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#05070d]/80 backdrop-blur-xl">
        <div className="container-wide flex h-[72px] items-center justify-between">
          <a href="#home" className="font-mono text-xl font-bold tracking-tighter">
            <span className="text-gradient">HS</span><span className="text-white/20">.</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="/Harshad-Shinde-Resume.pdf" download className="hidden sm:flex items-center gap-2 rounded-lg border border-electric/50 bg-electric/10 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-electric/20">
              <Download size={15}/> Resume
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden rounded-lg border border-white/10 p-2">
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
        {open && <nav className="lg:hidden border-t border-white/5 bg-[#070b13] px-5 py-4">
          {nav.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} href={href} className="block py-3 text-slate-300">{label}</a>)}
        </nav>}
      </header>

      <section id="home" className="container-wide relative flex min-h-screen items-center pt-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-3 py-1.5 text-xs font-medium text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#4de3ff]" />
              OPEN TO NEW OPPORTUNITIES
            </div>
            <p className="mb-3 font-mono text-sm text-blue-300">Hi, I&apos;m</p>
            <h1 className="max-w-3xl text-5xl font-extrabold tracking-[-0.045em] sm:text-6xl lg:text-[72px]">
              Harshad Nana <span className="text-gradient">Shinde</span>
            </h1>
            <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
              Python Full Stack Developer <span className="mx-2 text-blue-400/50">•</span> AI & LLM Enthusiast
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Results-driven developer building scalable enterprise applications with Django, Vue.js and PostgreSQL, while integrating modern AI capabilities into real-world workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/15">
                View My Work <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.03] px-5 py-3 font-semibold text-slate-200 hover:bg-white/[.06]">
                Contact Me <ArrowDownRight size={18}/>
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              <a aria-label="GitHub" href="https://github.com/Harshads2405" target="_blank" className="rounded-lg border border-white/10 p-2.5 text-slate-400 hover:text-white"><Github size={19}/></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/hshinde2405/" target="_blank" className="rounded-lg border border-white/10 p-2.5 text-slate-400 hover:text-white"><Linkedin size={19}/></a>
              <a aria-label="Email" href="mailto:hshinde2405@gmail.com" className="rounded-lg border border-white/10 p-2.5 text-slate-400 hover:text-white"><Mail size={19}/></a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">
              <Stat value="8+" label="Months Experience"/>
              <Stat value="3" label="Research Papers"/>
              <Stat value="20+" label="Technologies"/>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute inset-10 rounded-full bg-blue-500/15 blur-[80px]" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111a2c] to-[#070b13] shadow-glow">
              <Image
                src="/hero-portrait.png"
                alt="Harshad Shinde — Python Full Stack Developer"
                width={1024}
                height={1536}
                className="relative z-10 h-auto w-full object-contain"
                priority
                sizes="(max-width: 768px) 92vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container-wide py-24">
        <SectionKicker>ABOUT ME</SectionKicker>
        <div className="mt-3 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">More than just a <span className="text-gradient">developer.</span></h2>
            <p className="mt-5 leading-7 text-slate-400">I build backend-heavy products, connect systems through reliable APIs, and explore how AI can make software more useful. My professional work spans enterprise workflows, database design, frontend integration and production debugging.</p>
            <p className="mt-4 leading-7 text-slate-400">I care about maintainable architecture, practical problem solving and learning technologies that create measurable value.</p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200">Let&apos;s build something <ChevronRight size={16}/></a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard icon={Code2} title="Clean Engineering" text="Maintainable code, API design and reusable backend components."/>
            <MiniCard icon={BrainCircuit} title="AI Integration" text="LLMs, NLP, ML pipelines, prompt engineering and RAG concepts."/>
            <MiniCard icon={Database} title="Data & APIs" text="PostgreSQL, MySQL, ORM optimization and RESTful services."/>
            <MiniCard icon={Terminal} title="Production Mindset" text="Debugging, testing, Git workflows and enterprise delivery."/>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/5 bg-white/[.012]">
        <div className="container-wide py-24">
          <SectionKicker>TECHNICAL STACK</SectionKicker>
          <div className="mt-3 flex items-end justify-between gap-5">
            <h2 className="text-3xl font-bold sm:text-4xl">Technologies I work with</h2>
            <span className="hidden font-mono text-xs text-slate-600 sm:block">BUILD / SHIP / IMPROVE</span>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map(([name, category]) => (
              <div key={name} className="card rounded-xl p-4 transition duration-300">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
                  {category === "AI" ? <BrainCircuit size={17}/> : category === "Database" ? <Database size={17}/> : category === "Frontend" ? <Globe2 size={17}/> : <Code2 size={17}/>}
                </div>
                <p className="text-sm font-semibold text-slate-200">{name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-600">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="container-wide py-24">
        <SectionKicker>FEATURED WORK</SectionKicker>
        <div className="mt-3 flex items-end justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl">Things I&apos;ve built</h2>
          <span className="font-mono text-xs text-blue-400">03 / SELECTED</span>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={p.title} {...p} index={i+1}/>)}
        </div>
      </section>

      <section id="experience" className="border-y border-white/5 bg-white/[.012]">
        <div className="container-wide py-24">
          <SectionKicker>EXPERIENCE</SectionKicker>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Professional journey</h2>
          <div className="mt-12 max-w-4xl">
            {experience.map((item, idx) => (
              <div key={item.company} className="relative grid gap-5 border-l border-blue-400/20 pb-12 pl-8 last:pb-0 md:grid-cols-[220px_1fr]">
                <div className="absolute -left-[6px] top-1 h-3 w-3 rounded-full border-2 border-blue-300 bg-[#05070d] shadow-[0_0_15px_rgba(94,168,255,.5)]"/>
                <div>
                  <p className="font-mono text-xs text-blue-300">{item.date}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-200">{item.company}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <ul className="mt-4 space-y-3">
                    {item.points.map(point => <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400"><CheckCircle2 className="mt-1 shrink-0 text-blue-400" size={15}/>{point}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="container-wide py-24">
        <SectionKicker>RESEARCH & PUBLICATIONS</SectionKicker>
        <div className="mt-3 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Research that connects AI with real problems.</h2>
            <p className="mt-5 leading-7 text-slate-400">
              Published work covering healthcare AI, creativity and intelligent medication systems, with a registered copyright for the AI Assistant Doctor work.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
              <FileText size={17} className="text-violet-300"/> 3 peer-reviewed publications
            </div>
          </div>
          <div className="space-y-3">
            {research.map(([title, meta, extra], i) => (
              <article key={title} className="card rounded-2xl p-5 transition">
                <div className="flex gap-4">
                  <span className="font-mono text-xs text-blue-400">0{i+1}</span>
                  <div>
                    <h3 className="font-semibold leading-6 text-white">{title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{meta}</p>
                    {extra && <p className="mt-1 font-mono text-xs text-violet-300/80">{extra}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_.9fr] items-center">
          <div className="card rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <FileText size={20}/>
              </div>
              <div>
                <SectionKicker>COPYRIGHT REGISTRATION</SectionKicker>
                <h3 className="mt-1 text-xl font-bold">AI Assistant Doctor</h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Copyright registered for the work titled “Machine Learning In Healthcare: Developing An Ai Assistant Doctor For Symptom-based Disease Prediction.”
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Info label="Certificate No." value="LD-20250167048"/>
              <Info label="Application No." value="11534/2025-CO/L"/>
              <Info label="Filed" value="27 March 2025"/>
              <Info label="Authority" value="Copyright Office, Government of India"/>
            </div>
          </div>

          <div className="card overflow-hidden rounded-2xl p-2">
            <Image
              src="/copyright-certificate.png"
              alt="Copyright registration certificate for AI Assistant Doctor"
              width={950}
              height={700}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/5 bg-gradient-to-b from-blue-500/[.04] to-transparent">
        <div className="container-wide py-24">
          <SectionKicker>LET&apos;S CONNECT</SectionKicker>
          <div className="mt-3 grid gap-10 lg:grid-cols-[1fr_.8fr]">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Have a project in mind?<br/><span className="text-gradient">Let&apos;s talk.</span></h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">I&apos;m open to Python, backend and full-stack opportunities, AI integrations and interesting engineering challenges.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hshinde2405@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black hover:bg-slate-200"><Mail size={17}/> Email Me</a>
                <a href="/Harshad-Shinde-Resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"><Download size={17}/> Download Resume</a>
              </div>
            </div>
            <div className="card rounded-2xl p-6">
              <ContactRow icon={Mail} label="Email" value="hshinde2405@gmail.com" href="mailto:hshinde2405@gmail.com"/>
              <ContactRow icon={Phone} label="Phone" value="+91 8010159015" href="tel:+918010159015"/>
              <ContactRow icon={MapPin} label="Location" value="Pune, Maharashtra, India"/>
              <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/hshinde2405" href="https://www.linkedin.com/in/hshinde2405/" />
              <ContactRow icon={Github} label="GitHub" value="github.com/Harshads2405" href="https://github.com/Harshads2405"/>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="container-wide flex flex-col justify-between gap-3 py-7 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Harshad Nana Shinde. Built with Next.js.</p>
          <p className="font-mono">PYTHON • AI • FULL STACK</p>
        </div>
      </footer>
    </main>
  );
}

function Stat({ value, label }: {value: string; label: string}) {
  return <div><p className="text-2xl font-bold text-white">{value}</p><p className="mt-1 text-[11px] uppercase tracking-wider text-slate-600">{label}</p></div>
}
function SectionKicker({children}: {children: React.ReactNode}) {
  return <p className="font-mono text-xs font-semibold tracking-[.22em] text-blue-400">{children}</p>
}
function MiniCard({icon: Icon, title, text}: {icon: any; title: string; text: string}) {
  return <div className="card rounded-2xl p-5 transition duration-300"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-300"><Icon size={19}/></div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>
}
function ProjectCard({title, tag, description, stack, icon: Icon, index}: any) {
  return <article className="card group rounded-2xl p-5 transition duration-300">
    <div className="flex items-start justify-between">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300"><Icon size={23}/></div>
      <span className="font-mono text-xs text-slate-600">0{index}</span>
    </div>
    <p className="mt-7 font-mono text-[10px] uppercase tracking-widest text-violet-300">{tag}</p>
    <h3 className="mt-2 text-xl font-bold">{title}</h3>
    <p className="mt-3 min-h-[108px] text-sm leading-6 text-slate-500">{description}</p>
    <div className="mt-5 flex flex-wrap gap-2">{stack.map((s:string)=><span key={s} className="rounded-md border border-white/8 bg-white/[.03] px-2.5 py-1 text-[11px] text-slate-400">{s}</span>)}</div>
    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold text-blue-300">Case study <ExternalLink size={14}/></div>
  </article>
}
function Info({label, value}: {label: string; value: string}) {
  return <div className="rounded-xl border border-white/5 bg-white/[.025] p-3">
    <p className="text-[10px] uppercase tracking-wider text-slate-600">{label}</p>
    <p className="mt-1 text-xs font-medium text-slate-300">{value}</p>
  </div>
}
function ContactRow({icon: Icon, label, value, href}: any) {
  const inner = <><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[.04] text-blue-300"><Icon size={16}/></div><div><p className="text-[10px] uppercase tracking-wider text-slate-600">{label}</p><p className="mt-0.5 text-sm text-slate-300">{value}</p></div></>;
  return href ? <a target={href.startsWith("http") ? "_blank" : undefined} href={href} className="flex items-center gap-3 border-b border-white/5 py-4 last:border-0 hover:text-white">{inner}</a> : <div className="flex items-center gap-3 border-b border-white/5 py-4 last:border-0">{inner}</div>
}