import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import PharmaSubnav from "@/components/PharmaSubnav";
import pharmaHero from "@/assets/pharma-hero.png";
import SEOHead from "@/components/SEOHead";

const phases = [
  {
    phase: "Assess",
    n: "01",
    capabilities: [
      {
        title: "Pipeline & Asset Evaluation",
        description:
          "Commercial potential, competitive dynamics, and scenario modeling across lead assets. Structured frameworks to prioritize where to invest and where to move on.",
      },
      {
        title: "Market & Competitive Intelligence",
        description:
          "Landscape mapping, competitor pipeline tracking, market sizing, and signal synthesis. Designed to keep you ahead in fast-moving therapeutic areas.",
      },
    ],
  },
  {
    phase: "Position",
    n: "02",
    capabilities: [
      {
        title: "Asset Strategy & Business Development",
        description:
          "In-licensing and out-licensing evaluation, partner search and prioritization, deal narrative, pitch book development, and CVC / scouting frameworks.",
      },
      {
        title: "Investor & Stakeholder Narrative",
        description:
          "Decision-grade framing for board presentations, fundraising rounds, and strategic partner conversations. Built to show up credibly when it counts.",
      },
      {
        title: "Positioning & Differentiation",
        description:
          "Indication prioritization, value proposition, and evidence narrative. How to build a compelling clinical and commercial story before the market is crowded.",
      },
    ],
  },
  {
    phase: "Launch",
    n: "03",
    capabilities: [
      {
        title: "Market Access & Launch Strategy",
        description:
          "Market sizing, patient journey mapping, HCP and payer research. Go-to-market plan with channel and access recommendations.",
      },
      {
        title: "Clinical-Commercial Interface",
        description:
          "Bridging science and strategy, from indication selection to HCP engagement planning as you approach commercialization.",
      },
    ],
  },
];

const howWeWork = [
  {
    title: "We move at your pace",
    description:
      "Biotech timelines don't wait. We run fast, structured sprints that deliver answers while the decision is still live.",
  },
  {
    title: "Credibility for the next conversation",
    description:
      "Whether it's a board meeting, a partnership discussion, or an investor update, we help you show up with a defensible, decision-grade view.",
  },
  {
    title: "Stage-appropriate thinking",
    description:
      "From pre-clinical to commercial, we scope the work to your stage, your data maturity, and your strategic horizon. No one-size-fits-all.",
  },
];

const caseStudies = [
  {
    tag: "Business Development",
    title: "Corporate VC build and biotech startup scouting",
    work:
      "Developed governance structure, investment criteria, and processes for a newly-established corporate VC from scratch. Scanned and scored 1,000+ initial biotech targets; conducted deep dives on ~15 priority candidates for initial acquisition and investment consideration.",
    outcome:
      "CVC structure approved by board. First wave of investment targets identified and ready for outreach.",
  },
  {
    tag: "Market Assessment",
    title: "In-licensing decision for a European molecule entering the US",
    work:
      "Interviewed KOLs and field physicians in Europe to map key success drivers, then conducted parallel research in the US on market potential, competitive landscape, and physician adoption dynamics. Built a forecasting model across multiple penetration scenarios.",
    outcome:
      "US opportunity found smaller than initially projected due to pricing dynamics and high adoption of substitute molecules, saving significant investment in an unfavorable market.",
  },
  {
    tag: "Business Development",
    title: "Out-licensing strategy and regional partner search",
    work:
      "Identified an ideal regional partner for out-licensing a portion of a pharma portfolio in a mature market segment. Assessed competitive implications, supported portfolio valuation, and developed the pitch book for partnership discussions.",
    outcome:
      "Regional partner identified and pitch book developed, enabling structured, credible outreach to prospective licensees.",
  },
];

const SECTION_IDS = [
  "section-hero",
  "section-capabilities",
  "section-howwework",
  "section-work",
];

export default function Biotech() {
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
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean);
    const next = sections.find(
      (el) => el!.getBoundingClientRect().top > NAVBAR_HEIGHT + 20
    );
    if (next) {
      const top =
        next.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Biotech Strategy Consulting"
        description="TheMindCo supports early-stage and growth-phase biotech companies on market strategy, business development, and go-to-market, from science to commercial reality."
        canonical="/industries/life-sciences/pharmaceutical-companies/biotech"
      />
      <PharmaSubnav />

      {/* Hero */}
      <section
        id="section-hero"
        className="relative min-h-[60vh] flex items-end pt-44 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${pharmaHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
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
            Biotech
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            Up-and-coming innovative biotech companies looking to scale, expand their reach, and optimize their business model as they move from early-stage to commercial maturity.
          </p>
          <p className="mt-2 text-sm sm:text-base text-primary-foreground/55">
            The strategic rigor of global pharma consulting at the speed and flexibility that biotech demands.
          </p>
        </div>
      </section>

      {/* Capabilities — phased */}
      <section id="section-capabilities" className="section-padding bg-[#0f0f10]">
        <div className="container-narrow">
          <SectionHeading
            title="What we work on"
            className="text-primary-foreground [&>p]:text-primary-foreground/70"
          />

          {/* Flow indicator */}
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

          {/* Desktop: row-first grid so cards align across columns */}
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
          <SectionHeading
            title="Selected work"
            className="text-primary-foreground"
          />
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
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/70"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>
    </PageLayout>
  );
}
