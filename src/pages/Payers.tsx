import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import hospitalsHero from "@/assets/hospitals-hero.png";
import SEOHead from "@/components/SEOHead";

const phases = [
  {
    phase: "Understand",
    n: "01",
    capabilities: [
      {
        title: "Competitive Intelligence",
        description:
          "Payer landscape mapping, competitor coverage strategies, formulary benchmarking, and market positioning across payer types — commercial, Medicare, Medicaid.",
      },
      {
        title: "Pricing & Market Intelligence",
        description:
          "Healthcare cost trends, utilization patterns, reimbursement dynamics, and policy landscape. The intelligence needed to anticipate what's changing before it forces your hand.",
      },
    ],
  },
  {
    phase: "Improve",
    n: "02",
    capabilities: [
      {
        title: "Coverage & Access Strategy",
        description:
          "Formulary positioning, prior authorization design, coverage policy development, and access strategy. How to make and communicate coverage decisions that hold up to scrutiny.",
      },
      {
        title: "Stakeholder & Network Mapping",
        description:
          "Decision pathways, committees, gatekeepers, and influence networks across payer ecosystems. Understanding who matters and how decisions actually get made.",
      },
      {
        title: "Operational Efficiency",
        description:
          "Claims processing, utilization management, network design, and administrative workflow optimization. Cost and service level improvement grounded in data.",
      },
    ],
  },
  {
    phase: "Transform",
    n: "03",
    capabilities: [
      {
        title: "PMO & Transformation Execution",
        description:
          "Program governance for large-scale payer transformations — benefit redesigns, technology migrations, organizational restructuring, and regulatory adaptation.",
      },
      {
        title: "Strategic AI Integration",
        description:
          "AI-enabled utilization management, member engagement, and administrative automation. Workflow-level, pragmatic, and adoption-focused.",
      },
    ],
  },
];

const howWeWork = [
  {
    title: "We know how payers think",
    description:
      "Coverage decisions, formulary management, and access strategy follow their own logic. We design research and strategy around how payer organizations actually work — not how manufacturers wish they did.",
  },
  {
    title: "Pricing and access are strategic",
    description:
      "Reimbursement strategy and formulary positioning are core to long-term competitive advantage. We treat them as strategic decisions, not administrative ones.",
  },
  {
    title: "From recommendation to adoption",
    description:
      "Payer transformation is slow without the right governance. We stay close through implementation, change management, and adoption until the program lands.",
  },
];

const caseStudies = [
  {
    tag: "Stakeholder Intelligence",
    title: "Coverage adoption and formulary positioning for a healthcare payer",
    work:
      "Mapped decision pathways, stakeholder dynamics, and adoption barriers across a complex payer ecosystem. Structured primary research with coverage committee members, clinical directors, and network leads to surface what was driving and blocking formulary inclusion.",
    outcome:
      "Client had a clear evidence-based approach to advance formulary positioning and accelerate coverage decisions across key accounts.",
  },
  {
    tag: "PMO & Transformation",
    title: "Transformation PMO and performance cadence for a complex payer program",
    work:
      "Designed governance structure, workstream architecture, and performance tracking cadence for a large-scale transformation program. Aligned leadership across functional areas on milestones, accountability, and escalation pathways.",
    outcome:
      "Program governance operational within weeks. Performance cadence adopted across all workstreams — enabling real-time visibility and faster issue resolution.",
  },
];

const SECTION_IDS = [
  "section-hero",
  "section-capabilities",
  "section-howwework",
  "section-work",
];

export default function Payers() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setShowArrow(scrolled < total * 0.92);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const NAVBAR_HEIGHT = 80;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const next = sections.find((el) => el!.getBoundingClientRect().top > NAVBAR_HEIGHT + 20);
    if (next) {
      const top = next.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Payer Strategy Consulting"
        description="Supporting payer organizations on coverage decisions, formulary strategy, operational transformation, and competitive positioning in regulated healthcare markets."
        canonical="/industries/life-sciences/payers"
      />
      {/* Hero */}
      <section
        id="section-hero"
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${hospitalsHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(15,15,16,0.90) 50%, rgba(15,15,16,0.35) 100%)",
          }}
        />
        <div className="container-narrow relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-foreground">
            Payers
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            We support payer organizations navigating coverage decisions, formulary strategy, operational transformation, and competitive positioning — and life sciences teams working to understand and engage the payer landscape.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section id="section-capabilities" className="section-padding bg-[#0f0f10]">
        <div className="container-narrow">
          <SectionHeading
            title="What we work on"
            className="text-primary-foreground [&>p]:text-primary-foreground/70"
          />

          {/* Flow indicator — desktop */}
          <div className="hidden md:flex items-start gap-0 mb-10 relative">
            <div className="absolute top-[1rem] left-[calc(2rem)] right-[calc(2rem)] h-px bg-primary/20 z-0" />
            {phases.map((p, i) => (
              <div key={p.phase} className="flex-1 flex flex-col items-center relative z-10">
                <svg width="32" height="32" viewBox="0 0 32 32" className="mb-3">
                  <circle cx="16" cy="16" r="14" fill="#0f0f10" />
                  <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,93,24,0.18)" strokeWidth="2" />
                  <circle
                    cx="16" cy="16" r="13"
                    fill="none"
                    stroke="#ff5d18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={`${(81.68 * (i + 1)) / 3} 81.68`}
                    transform="rotate(-90 16 16)"
                  />
                  <text x="16" y="20" textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="#ff5d18">{p.n}</text>
                </svg>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/60">{p.phase}</span>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-6">
            {phases.map((p) => (
              <div key={p.phase} className="flex flex-col gap-3">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-primary/70">{p.n} — {p.phase}</p>
                {p.capabilities.map((c) => (
                  <div key={c.title} className="group rounded-lg border border-white/8 bg-white/3 hover:bg-white p-5 flex flex-col gap-2 transition-colors duration-200 cursor-default">
                    <h4 className="font-semibold text-primary text-sm leading-snug">{c.title}</h4>
                    <p className="text-xs text-primary-foreground/50 group-hover:text-muted-foreground leading-relaxed transition-colors">{c.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop: row-first grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-3">
            {Array.from({ length: Math.max(...phases.map((p) => p.capabilities.length)) }, (_, rowIdx) =>
              phases.map((p) => {
                const c = p.capabilities[rowIdx];
                if (!c) return <div key={`${p.phase}-empty-${rowIdx}`} />;
                return (
                  <div key={c.title} className="group rounded-lg border border-white/8 bg-white/3 hover:bg-white p-5 flex flex-col gap-2 transition-colors duration-200 cursor-default">
                    <h4 className="font-semibold text-primary text-sm leading-snug">{c.title}</h4>
                    <p className="text-xs text-primary-foreground/50 group-hover:text-muted-foreground leading-relaxed transition-colors">{c.description}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="section-howwework" className="section-padding bg-primary">
        <div className="container-narrow">
          <SectionHeading
            title="How we work"
            className="text-primary-foreground [&>p]:text-primary-foreground/70"
          />
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-lg overflow-hidden">
            {howWeWork.map((h, i) => (
              <div
                key={h.title}
                className="group bg-primary hover:bg-white p-8 flex flex-col gap-3 transition-colors duration-200 cursor-default"
              >
                <span className="text-primary-foreground/40 group-hover:text-foreground/30 font-mono text-xs tracking-widest transition-colors">
                  0{i + 1}
                </span>
                <h4 className="font-semibold text-lg text-primary-foreground group-hover:text-foreground leading-snug transition-colors">
                  {h.title}
                </h4>
                <p className="text-sm text-primary-foreground/70 group-hover:text-muted-foreground leading-relaxed transition-colors">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        id="section-work"
        className="section-padding bg-[#0f0f10] border-t border-white/5"
      >
        <div className="container-narrow">
          <SectionHeading title="Selected work" className="text-primary-foreground" />
          <div className="grid md:grid-cols-2 gap-5">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="group rounded-lg border border-white/8 bg-white/3 hover:bg-white p-6 flex flex-col gap-5 transition-colors duration-200 cursor-default"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-primary group-hover:text-primary transition-colors">
                    {cs.tag}
                  </span>
                  <h4 className="font-semibold text-base text-primary-foreground group-hover:text-foreground leading-snug transition-colors">
                    {cs.title}
                  </h4>
                  <p className="text-sm text-primary-foreground/45 group-hover:text-muted-foreground leading-relaxed transition-colors">
                    {cs.work}
                  </p>
                </div>
                <div className="border-t border-white/8 group-hover:border-border pt-4 transition-colors">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-primary/50 group-hover:text-primary/70 mb-2 transition-colors">
                    Outcome
                  </p>
                  <p className="text-sm text-primary-foreground/80 group-hover:text-foreground leading-relaxed transition-colors">
                    {cs.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll arrow */}
      <button
        onClick={scrollToNext}
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce transition-opacity duration-500 ${
          showArrow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Siguiente sección"
      >
        <div className="w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/40 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>
    </PageLayout>
  );
}
