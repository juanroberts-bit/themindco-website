import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import otherHero from "@/assets/other-industries-hero.png";
import SEOHead from "@/components/SEOHead";

const industries = [
  {
    n: "01",
    title: "Agroindustry",
    description:
      "Supply chain dynamics, input markets, producer networks, and competitive positioning across agricultural and food production value chains. Decision support for industrial-scale operations in complex, climate-exposed markets.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem */}
        <line x1="18" y1="32" x2="18" y2="14" stroke="#ff5d18" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Left leaf */}
        <path d="M18 22 C14 20 10 16 11 11 C14 13 17 17 18 22Z" fill="#ff5d18" fillOpacity="0.85"/>
        {/* Right leaf */}
        <path d="M18 18 C22 16 26 12 25 7 C22 9 19 13 18 18Z" fill="#ff5d18" fillOpacity="0.6"/>
        {/* Ground */}
        <path d="M12 32 Q18 29 24 32" stroke="#ff5d18" strokeWidth="1.2" strokeLinecap="round" fill="none" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Energy",
    description:
      "Market structure, regulatory environments, infrastructure investment decisions, and competitive dynamics across conventional and renewable energy sectors. From upstream to distribution.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lightning bolt */}
        <path d="M21 4 L11 20 H18 L15 32 L27 16 H20 L21 4Z" fill="#ff5d18" fillOpacity="0.9" strokeLinejoin="round"/>
        {/* Glow ring */}
        <circle cx="18" cy="18" r="13" stroke="#ff5d18" strokeOpacity="0.15" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Financial Services",
    description:
      "Competitive intelligence, product strategy, customer segmentation, and operational transformation for banks, insurers, and financial institutions operating in complex, regulated environments.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rising bars */}
        <rect x="6" y="22" width="6" height="10" rx="1" fill="#ff5d18" fillOpacity="0.45"/>
        <rect x="15" y="16" width="6" height="16" rx="1" fill="#ff5d18" fillOpacity="0.7"/>
        <rect x="24" y="9" width="6" height="23" rx="1" fill="#ff5d18" fillOpacity="0.95"/>
        {/* Trend line */}
        <path d="M9 20 L18 14 L27 7" stroke="#ff5d18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    n: "04",
    title: "Industrial Goods",
    description:
      "B2B market dynamics, procurement ecosystems, distribution strategy, and operational improvement for manufacturers and industrial players facing competitive pressure and margin volatility.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gear outer */}
        <path d="M18 6 L20 4 L22 6 L24.5 5.5 L25.5 8 L28 8.5 L27.5 11 L30 12 L29 14.5 L31 16.5 L29.5 18.5 L31 20.5 L29 22.5 L30 25 L27.5 26 L28 28.5 L25.5 29 L24.5 31.5 L22 31 L20 33 L18 31 L16 33 L14 31 L11.5 31.5 L10.5 29 L8 28.5 L8.5 26 L6 25 L7 22.5 L5 20.5 L6.5 18.5 L5 16.5 L7 14.5 L6 12 L8.5 11 L8 8.5 L10.5 8 L11.5 5.5 L14 6 L16 4 Z" fill="none" stroke="#ff5d18" strokeWidth="1.3" strokeOpacity="0.5"/>
        {/* Inner circle */}
        <circle cx="18" cy="18" r="5" fill="#ff5d18" fillOpacity="0.85"/>
        <circle cx="18" cy="18" r="2.5" fill="#0f0f10"/>
      </svg>
    ),
  },
  {
    n: "05",
    title: "Private Equity & VC",
    description:
      "Strategic diligence, portfolio company support, and exit preparation. From scouting and investment thesis to take-over planning and value creation across sectors and geographies.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Diamond / deal shape */}
        <path d="M18 4 L32 16 L18 32 L4 16 Z" stroke="#ff5d18" strokeWidth="1.4" strokeLinejoin="round" strokeOpacity="0.5" fill="none"/>
        {/* Inner upward arrow */}
        <line x1="18" y1="24" x2="18" y2="12" stroke="#ff5d18" strokeWidth="1.8" strokeLinecap="round"/>
        <polyline points="13,17 18,12 23,17" stroke="#ff5d18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Small dot at base */}
        <circle cx="18" cy="25.5" r="1.5" fill="#ff5d18" fillOpacity="0.7"/>
      </svg>
    ),
  },
];

const phases = [
  {
    phase: "Understand",
    n: "01",
    capabilities: [
      {
        title: "Decision-grade Research & Insights",
        description:
          "Rigorous primary research across hard-to-reach stakeholders, expert networks, and complex ecosystems. Fast-cycle synthesis built for real decisions.",
      },
      {
        title: "Competitive & Market Intelligence",
        description:
          "Competitor strategies, market dynamics, and landscape mapping. Built to surface what's changing before it forces your hand.",
      },
    ],
  },
  {
    phase: "Decide",
    n: "02",
    capabilities: [
      {
        title: "Growth & Portfolio Strategy",
        description:
          "Where to play, how to win, and which bets to make. Category logic, market entry, and portfolio prioritization for complex B2B environments.",
      },
      {
        title: "Business Development & Diligence",
        description:
          "Target screening, market assessment, deal narratives, and integration logic. From thesis to transaction.",
      },
      {
        title: "Go-to-Market Strategy",
        description:
          "Channel design, commercial model, and launch planning adapted to procurement dynamics, long sales cycles, and institutional buyers.",
      },
    ],
  },
  {
    phase: "Execute",
    n: "03",
    capabilities: [
      {
        title: "Operating Model & Performance",
        description:
          "Process optimization, organizational alignment, and capability building. Cost and service level improvement grounded in data.",
      },
      {
        title: "Implementation & PMO",
        description:
          "Program governance, workstreams, and decision cadence for large-scale change. Change management and adoption built in from day one.",
      },
    ],
  },
];

const howWeWork = [
  {
    title: "Same rigor, different context",
    description:
      "We bring the same research and strategy discipline we apply in Life Sciences and Consumer Goods — adapted to the decision logic, stakeholder dynamics, and competitive realities of each industry.",
  },
  {
    title: "Built for B2B complexity",
    description:
      "Procurement committees, long sales cycles, institutional buyers, regulatory constraints. We design our work around how these markets actually operate.",
  },
  {
    title: "From recommendation to adoption",
    description:
      "We don't stop at the deck. We stay close through implementation, governance, and stakeholder alignment — until the strategy lands.",
  },
];

const caseStudies = [
  {
    tag: "Venture Strategy",
    title: "Business model design for a disruptive nanotechnology venture",
    work:
      "Defined the commercial model, target segments, and go-to-market approach for an early-stage nanotechnology company entering B2B industrial markets. Mapped competitive dynamics and validated demand through expert interviews.",
    outcome:
      "Client had a clear, evidence-based business model and prioritized market entry path ready for investor conversations.",
  },
  {
    tag: "Operations",
    title: "Vendor price and service benchmarking in an energy ecosystem",
    work:
      "Benchmarked supplier price levels and service performance across a complex energy procurement network. Identified value leakage and built a structured framework for renegotiation and vendor rationalization.",
    outcome:
      "Significant cost reduction opportunity quantified and prioritized. Client entered renegotiations with a defensible, data-backed position.",
  },
  {
    tag: "Industrial Operations",
    title: "Operational improvement scenario modeling for industrial production",
    work:
      "Diagnosed root causes of production inefficiency and quantified the impact of alternative improvement pathways. Built a model to evaluate tradeoffs across throughput, cost, and scalability.",
    outcome:
      "Quantified roadmap delivered — client had a clear, data-backed basis for capital allocation and production investment decisions.",
  },
];

const SECTION_IDS = [
  "section-hero",
  "section-industries",
  "section-capabilities",
  "section-howwework",
  "section-work",
];

export default function OtherIndustries() {
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
        title="Strategy Consulting — Agroindustry, Energy, Financial Services, Industrial Goods & Private Equity"
        description="TheMindCo works with leaders in Agroindustry, Energy, Financial Services, Industrial Goods, and Private Equity on research, strategy, and execution for complex B2B environments."
        canonical="/industries/other-industries"
      />
      {/* Hero */}
      <section
        id="section-hero"
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${otherHero})`,
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
            Other Industries
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            Beyond our Life Sciences and Consumer Goods core, we work with leaders in Agroindustry, Energy, Financial Services, and Industrial Goods — bringing the same decision-grade research, strategy, and execution discipline to high-stakes decisions in complex markets.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section id="section-industries" className="section-padding bg-[#16161a]">
        <div className="container-narrow">
          <SectionHeading
            title="Where we work"
            className="text-primary-foreground [&>p]:text-primary-foreground/70"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="group rounded-xl border border-white/10 bg-white/4 hover:bg-white p-6 flex flex-col gap-4 transition-colors duration-200 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <div className="opacity-90 group-hover:opacity-100 transition-opacity [&_svg_path]:group-hover:fill-foreground [&_svg_rect]:group-hover:fill-foreground [&_svg_line]:group-hover:stroke-foreground [&_svg_circle]:group-hover:fill-foreground">
                    {ind.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-primary/50 group-hover:text-primary/70 transition-colors">
                    {ind.n}
                  </span>
                </div>
                <h3 className="font-semibold text-base text-primary-foreground group-hover:text-foreground leading-snug transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-primary-foreground/50 group-hover:text-muted-foreground leading-relaxed transition-colors">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="section-capabilities" className="section-padding bg-[#0f0f10] border-t border-white/5">
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
