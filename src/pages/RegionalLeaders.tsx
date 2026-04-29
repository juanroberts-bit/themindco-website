import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import PharmaSubnav from "@/components/PharmaSubnav";
import lifesciencesHero from "@/assets/lifesciences-hero.png";
import SEOHead from "@/components/SEOHead";

const phases = [
  {
    phase: "Understand",
    n: "01",
    capabilities: [
      {
        title: "Market Assessment & Competitive Landscape",
        description:
          "Market sizing, opportunity mapping, and competitive dynamics. Who's winning and why, decoded to P&L level when needed.",
      },
      {
        title: "Stakeholder & Customer Insights",
        description:
          "KOLs, HCPs, payers, distribution networks. Hard-to-access primary research triangulated across sources.",
      },
    ],
  },
  {
    phase: "Focus",
    n: "02",
    capabilities: [
      {
        title: "Market Expansion & Portfolio Strategy",
        description:
          "Where to grow next: new segments, geographies, channels, or partnerships. Indication prioritization and portfolio logic.",
      },
      {
        title: "Positioning & Value Proposition",
        description:
          "Differentiation logic and evidence narrative. How to position against larger competitors with a clearer, sharper story.",
      },
      {
        title: "Business Development & Licensing",
        description:
          "Partnering strategy, in-licensing and out-licensing evaluation, diligence support, deal narrative.",
      },
    ],
  },
  {
    phase: "Execute",
    n: "03",
    capabilities: [
      {
        title: "Go-to-Market & Launch Blueprint",
        description:
          "Channel strategy, commercial model, resource allocation. Built for speed and adapted to local market realities.",
      },
      {
        title: "Operating Model & PMO",
        description:
          "Execution support, governance, milestone plans, and light PMO for resource-constrained teams moving fast.",
      },
      {
        title: "Strategic Coaching",
        description:
          "Executive sparring for CEOs, CSOs, and Heads of BD in high-stakes decision moments. Senior thinking, on demand.",
      },
    ],
  },
];

const howWeWork = [
  {
    title: "We speak your market",
    description:
      "Regional context isn't a footnote. We design research and strategy around the realities of local markets: access dynamics, competitive field, stakeholder relationships.",
  },
  {
    title: "Big-pharma rigor, faster cycles",
    description:
      "Our frameworks match global standards. 20+ years of experience supporting global pharma accessible for everyone.",
  },
  {
    title: "We stick around",
    description:
      "We don't just hand over slides. We stay close through leadership alignment, execution planning, and stakeholder engagement until the work actually lands.",
  },
];

const caseStudies = [
  {
    tag: "Competitive Intelligence",
    title: "Competitive deep-dive on regional pharma leaders across Latin America",
    work:
      "100+ interviews across 10 countries: employees, former employees, market experts, KOLs, and physicians. Mapped competitor P&L, investment model, production footprint, and commercial structure at granular level.",
    outcome:
      "Full P&L model of the target competitor delivered. Findings fed directly into workshops with top leadership to shape multi-year regional strategy.",
  },
  {
    tag: "Commercial Strategy",
    title: "Gross-to-net strategy across a branded pharma portfolio",
    work:
      "Analyzed 5 years of historical sales data across 50+ products and 20+ channels. Identified inconsistencies per client and channel, surfaced improvement opportunities, and built a quantitative tool to model new rebate and discount policies.",
    outcome:
      "~5% gross-to-net reduction achieved by implementing recommended actions, aligned across commercial and brand teams.",
  },
  {
    tag: "Corporate Strategy",
    title: "Strategic initiative prioritization for an incoming pharma CEO",
    work:
      "Analyzed the company's existing strategy, developed a structured set of strategic initiatives aligned to it, and scored them by revenue and profitability impact. Built a PMO tracking tool for execution.",
    outcome:
      "Core initiatives prioritized and ready for execution. PMO framework implemented for ongoing tracking and governance.",
  },
];

const SECTION_IDS = [
  "section-hero",
  "section-capabilities",
  "section-howwework",
  "section-work",
];

export default function RegionalLeaders() {
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
        title="Regional Pharma Strategy Consulting"
        description="Supporting regional and country-level pharma leaders on portfolio growth, market expansion, and commercial strategy. Big-pharma rigor in faster cycles."
        canonical="/industries/life-sciences/pharmaceutical-companies/regional-leaders"
      />
      <PharmaSubnav />

      {/* Hero */}
      <section
        id="section-hero"
        className="relative min-h-[60vh] flex items-end pt-44 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${lifesciencesHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(15,15,16,0.88) 45%, rgba(15,15,16,0.40) 100%)",
          }}
        />
        <div className="container-narrow relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-foreground">
            Regional Leaders
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            Regional and country-level pharma leaders facing competitive pressure and looking to grow, expanding their portfolio, entering new markets, and building the commercial infrastructure to compete at the next level.
          </p>
          <p className="mt-2 text-sm sm:text-base text-primary-foreground/55">
            Big-pharma rigor in faster cycles, built for resource-constrained teams.
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
