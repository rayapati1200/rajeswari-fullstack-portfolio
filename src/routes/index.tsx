import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { profile, skills, experience, projects, education, certifications } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.role}` },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: `${profile.name} — ${profile.role}` },
      { property: "og:description", content: profile.tagline },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["about", "01"], ["stack", "02"], ["work", "03"], ["projects", "04"], ["education", "05"], ["contact", "06"],
] as const;

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-primary">{n}/</span>
      <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
      <div className="ml-4 h-px flex-1 bg-border" />
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(0);
  const allTech = skills.flatMap((s) => s.items);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm">
            <span className="text-primary">~/</span>rajeswari<span className="animate-blink text-primary">_</span>
          </a>
          <nav className="hidden gap-6 font-mono text-xs md:flex">
            {nav.map(([id, n]) => (
              <a key={id} href={`#${id}`} className="text-muted-foreground transition-colors hover:text-primary">
                <span className="text-primary">{n}.</span>{id}
              </a>
            ))}
          </nav>
          <a href={`mailto:${profile.email}`} className="rounded-sm bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
            hire_me()
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20">
          <div className="animate-rise mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> {profile.status}
          </div>
          <h1 className="animate-rise text-6xl font-bold leading-[0.9] tracking-tighter md:text-[8.5rem]" style={{ animationDelay: "80ms" }}>
            Full Stack
            <br />
            <span className="text-outline">Engineer</span>{" "}
            <span className="text-primary">+ AI</span>
          </h1>
          <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <p className="animate-rise max-w-xl text-xl leading-relaxed text-muted-foreground" style={{ animationDelay: "160ms" }}>
              Hi, I'm <span className="text-foreground">{profile.name}</span>. {profile.tagline}
            </p>
            <div className="animate-rise rounded-md border border-border bg-card p-5 font-mono text-xs leading-6" style={{ animationDelay: "240ms" }}>
              <div className="mb-3 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <p><span className="text-accent">const</span> engineer = {"{"}</p>
              <p className="pl-4">layers: [<span className="text-primary">"UI"</span>, <span className="text-primary">"API"</span>, <span className="text-primary">"Data"</span>, <span className="text-primary">"Cloud"</span>],</p>
              <p className="pl-4">ai: [<span className="text-primary">"MCP"</span>, <span className="text-primary">"agents"</span>, <span className="text-primary">"tool-calling"</span>],</p>
              <p className="pl-4">mindset: <span className="text-primary">"own it end to end"</span>,</p>
              <p>{"}"};</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden border-y border-border bg-card py-4">
          <div className="animate-marquee flex w-max gap-10 font-mono text-sm text-muted-foreground">
            {[...allTech, ...allTech].map((t, i) => (
              <span key={i} className="flex items-center gap-10">{t}<span className="text-primary">✦</span></span>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6">
        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 py-28">
          <SectionLabel n="01" title="About" />
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {profile.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Currently into</p>
              <ul className="space-y-3">
                {profile.interests.map((it) => (
                  <li key={it} className="flex items-center gap-3 border-b border-border pb-3">
                    <span className="font-mono text-accent">→</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="scroll-mt-20 py-28">
          <SectionLabel n="02" title="The Stack" />
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            {skills.map((s, i) => (
              <div key={s.group} className="group bg-background p-7 transition-colors hover:bg-card">
                <div className="mb-5 flex justify-between font-mono text-xs text-muted-foreground">
                  <span>layer_{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">●</span>
                </div>
                <h3 className="mb-5 text-2xl font-semibold">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-foreground">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="scroll-mt-20 py-28">
          <SectionLabel n="03" title="Experience" />
          <div className="divide-y divide-border border-y border-border">
            {experience.map((e, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-7 text-left">
                    <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                    <div>
                      <h3 className="text-2xl font-semibold transition-colors group-hover:text-primary md:text-3xl">{e.company}</h3>
                      <p className="text-muted-foreground">{e.role} · <span className="text-accent">{e.domain}</span></p>
                    </div>
                    <span className={`font-mono text-2xl text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="animate-rise grid gap-8 pb-10 md:grid-cols-[1fr_16rem] md:pl-40">
                      <ul className="space-y-3">
                        {e.points.map((p, j) => (
                          <li key={j} className="flex gap-3 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />{p}
                          </li>
                        ))}
                      </ul>
                      <div>
                        <p className="mb-3 font-mono text-xs text-muted-foreground">{e.location}</p>
                        <div className="flex flex-wrap gap-2">
                          {e.stack.map((s) => <span key={s} className="rounded-sm bg-secondary px-2 py-1 font-mono text-xs">{s}</span>)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20 py-28">
          <SectionLabel n="04" title="Selected Builds" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="group relative flex flex-col rounded-md border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:glow-primary">
                <div className="mb-8 flex items-center justify-between font-mono text-xs">
                  <span className="text-accent">{p.kind}</span>
                  <span className="text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="mb-4 text-3xl font-semibold leading-tight">{p.title}</h3>
                <p className="mb-6 text-muted-foreground">{p.description}</p>
                <ul className="mb-8 space-y-2 font-mono text-xs text-muted-foreground">
                  {p.highlights.map((h) => <li key={h}><span className="text-primary">$</span> {h}</li>)}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.stack.map((s) => <span key={s} className="rounded-sm border border-border px-2 py-1 font-mono text-xs">{s}</span>)}
                </div>
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-6 font-mono text-sm text-primary">view project ↗</a>}
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="scroll-mt-20 py-28">
          <SectionLabel n="05" title="Education" />
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((ed) => (
              <div key={ed.degree} className="rounded-md border border-border p-7 md:col-span-1">
                <p className="mb-6 font-mono text-xs text-muted-foreground">{ed.period}</p>
                <h3 className="text-xl font-semibold">{ed.degree}</h3>
                <p className="mb-4 text-primary">{ed.school}</p>
                <p className="text-sm text-muted-foreground">{ed.note}</p>
              </div>
            ))}
            {certifications.map((c) => (
              <div key={c} className="flex flex-col justify-between rounded-md bg-accent p-7 text-accent-foreground">
                <p className="font-mono text-xs uppercase tracking-widest">Certified</p>
                <h3 className="mt-10 text-2xl font-semibold leading-tight">{c}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CONTACT */}
      <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-border">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <p className="mb-6 font-mono text-sm text-primary">06/ contact</p>
          <h2 className="text-5xl font-bold leading-[0.95] tracking-tighter md:text-8xl">
            Let's build something <span className="text-primary">that scales.</span>
          </h2>
          <a href={`mailto:${profile.email}`} className="mt-12 inline-block border-b-2 border-primary pb-1 text-2xl transition-colors hover:text-primary md:text-3xl">
            {profile.email} ↗
          </a>
          <div className="mt-12 flex flex-wrap gap-4 font-mono text-sm">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-sm border border-border px-4 py-2 hover:border-primary hover:text-primary">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-sm border border-border px-4 py-2 hover:border-primary hover:text-primary">GitHub</a>
            <a href={`tel:${profile.phone}`} className="rounded-sm border border-border px-4 py-2 hover:border-primary hover:text-primary">{profile.phone}</a>
          </div>
        </div>
        <footer className="relative border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · built with React & TypeScript
        </footer>
      </section>
    </div>
  );
}
