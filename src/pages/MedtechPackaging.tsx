import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import medtechHero from "@/assets/medtech-hero.png";
import SEOHead from "@/components/SEOHead";

const phases = [
  {
    phase: "Understand",
    n: "01",
    capabilities: [
      {
        title: "Opaque Markets Insight & Voice of the Customer",
        description:
          "We turn weak signals into quantified market views, sizing demand, mapping decision dynamics, and surfacing customer truths through rigorous triangulation and fast-cycle synthesis.",
      },
      {
        title: "Competitive Intelligence & Market Landscape",
        description:
          "Comprehensive view of competitor positioning, strategies, investment levels, and market dynamics. Built for strategic decisions, not just monitoring.",
      },
    ],
  },
  {
    phase: "Decide",
    n: "02",
    capabilities: [
      {
        title: "Portfolio Strategy & Positioning",
        description:
          "Clarifying where to compete and how to differentiate across the portfolio. Category-level strategic logic, not just product positioning.",
      },
      {
        title: "Business Development & Corporate VC",
        description:
          "Target screening, diligence, deal narrative, and integration logic. Including CVC build and biotech startup scouting for medtech companies expanding into adjacent innovation.",
      },
      {
        title: "Go-to-Market & Channel Strategy",
        description:
          "B2B and institutional complexity, multi-stakeholder selling, procurement dynamics. GTM models built for how medtech markets actually work.",
      },
    ],
  },
  {
    phase: "Execute",
    n: "03",
    capabilities: [
      {
        title: "Supply Chain Review & Optimization",
        description:
          "Service levels, cost, scalability, and adoption. Bottleneck diagnosis and quantified improvement scenario modeling.",
      },
      {
        title: "Implementation Support & PMO",
        description:
          "Program governance, workstreams, and milestone cadence for commercial and operational programs. Change management and adoption built in.",
      },
      {
        title: "Strategic AI Integration",
        description:
          "Workflow-level, pragmatic AI enablement for research, synthesis, and decision processes. Built for speed without sacrificing rigor.",
      },
    ],
  },
];

const howWeWork = [
  {
    title: "Opaque markets are our specialty",
    description:
      "MedTech B2B markets have hidden dynamics: sophisticated buyers, long-procurement processes and low data transparency.",
  },
  {
    title: "Built for B2B complexity",
    description:
      "Multi-stakeholder selling, long sales cycles, procurement dynamics, regulatory context. We design research and strategy for how MedTech actually works.",
  },
  {
    title: "From strategy to commercial reality",
    description:
      "We stay through GTM execution, team enablement, and program governance until the work lands.",
  },
];

const caseStudies = [
  {
    tag: "Growth Strategy",
    title: "Mapping ICU adjacencies for new growth plays",
    work:
      "Mapped adjacencies across ICU and adjacent clinical areas for a global medical devices company. Interviewed clinical decision-makers, procurement leads, and department heads to surface unmet needs and competitive white spaces across the portfolio.",
    outcome:
      "Clear growth opportunity map with prioritized adjacency plays. Commercial team realigned around the highest-potential areas.",
  },
  {
    tag: "Competitive Intelligence",
    title: "Five-year strategy and competitive intelligence for a global medtech leader",
    work:
      "Interviewed all business unit heads and 50+ external stakeholders: clients, market experts, and former executives at key competitors. Identified competitor strategies per BU, sized untapped opportunities, and ran strategic workshops across the leadership team.",
    outcome:
      "Full competitive landscape per business unit. Workshops shaped the company's 5-year strategic direction.",
  },
  {
    tag: "Operations",
    title: "Production bottleneck diagnosis and improvement scenario modeling",
    work:
      "Diagnosed root causes of production-line bottlenecks and quantified the impact of alternative improvement pathways. Built a model to evaluate tradeoffs across service levels, cost, and scalability.",
    outcome:
      "Quantified improvement roadmap delivered. Client had a clear, data-backed basis for capital allocation and production investment decisions.",
  },
];

const SECTION_IDS = [
  "section-hero",
  "section-capabilities",
  "section-howwework",
  "section-work",
];

export default function MedtechPackaging() {
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
        title="MedTech & Packaging Strategy Consulting"
        description="Competitive intelligence, portfolio strategy, and go-to-market for MedTech and packaging companies. Built for B2B complexity, opaque markets, and sophisticated buyers."
        canonical="/industries/life-sciences/medtech-packaging-delivery-systems"
      />
      {/* Hero */}
      <section
        id="section-hero"
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${medtechHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(15,15,16,0.88) 45%, rgba(15,15,16,0.38) 100%)",
          }}
        />
        <div className="container-narrow relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-foreground">
            MedTech, Packaging &amp; Delivery Systems
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            We help medtech and packaging/delivery systems players clarify where to win by understanding customer decision drivers, procurement dynamics, clinical workflows, regulatory constraints, and competitor strategies.
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

          {/* Mobile: column-per-phase */}
          <div className="md:hidden flex flex-col gap-6">
            {phases.map((p) => (
              <div key={p.phase} className="flex flex-col gap-3">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-primary/70">{p.n} — {p.phase}</p>
                {p.capabilities.map((c) => (
                  <div key={c.title} className="group rounded-lg border border-white/8 bg-white/3 hover:bg-white p-5 flex flex-col gap-2 transition-colors duration-200 cursor-default">
                    <h4 className="font-bold text-primary text-base leading-snug">{c.title}</h4>
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
                    <h4 className="font-bold text-primary text-base leading-snug">{c.title}</h4>
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
          <div className="grid md:grid-cols-3 gap-5">
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
