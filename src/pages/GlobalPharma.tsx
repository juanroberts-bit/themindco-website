import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import PharmaSubnav from "@/components/PharmaSubnav";
import pharmaHero from "@/assets/pharma-hero.png";
import SEOHead from "@/components/SEOHead";

const phases = [
  {
    phase: "Understand",
    n: "01",
    capabilities: [
      {
        title: "Insights & Complex Primary Research",
        description: "KOLs, experts, and hard-to-access stakeholders. Triangulation across sources to generate decision-grade insight.",
      },
      {
        title: "Competitive Intelligence & Market Intelligence",
        description: "Competitor strategies, footprints, investment benchmarks, scenario views. Strategic implications and narrative-ready synthesis.",
      },
    ],
  },
  {
    phase: "Decide",
    n: "02",
    capabilities: [
      {
        title: "Therapeutic Area & Category Strategy",
        description: "Deep dives across therapeutic areas, from GLP-1 and oncology to specialty and emerging categories. Adoption constraints, differentiation logic, and strategic implications wherever the science is moving.",
      },
      {
        title: "Business Development & Deal Strategy",
        description: "Partner search and prioritization. In-licensing / out-licensing evaluation. Diligence support. Deal narrative and internal alignment.",
      },
      {
        title: "Commercial Strategy & Launch Excellence",
        description: "Segmentation, HCP customer strategy, resource allocation, and omnichannel model design. Launch mechanics built for how pharma markets actually work.",
      },
      {
        title: "Marketing & Brand Strategy",
        description: "Applying consumer marketing discipline to pharma: brand building, patient journey design, OTC/Rx crossover strategy, and DTC where regulation allows. Bridging the best of CPG thinking with pharma's unique constraints.",
      },
    ],
  },
  {
    phase: "Execute",
    n: "03",
    capabilities: [
      {
        title: "Implementation, PMO & Change",
        description: "Program governance, workstreams, decision cadence. Change management and adoption of new ways of working.",
      },
      {
        title: "Strategic AI Integration",
        description: "AI-enabled decision workflows for research, synthesis, planning, and governance. Built for speed without sacrificing rigor.",
      },
    ],
  },
];

const howWeWork = [
  {
    title: "Senior access at every step",
    description:
      "The people who scope the engagement deliver it. Real judgment throughout, no handoffs to teams you've never met.",
  },
  {
    title: "Built for global complexity",
    description:
      "Multi-market, multi-stakeholder, multi-functional. We connect the dots others miss and deliver synthesis that's ready for senior decision rooms.",
  },
  {
    title: "From signal to strategy",
    description:
      "We don't stop at insight. We build the business case, the narrative, and the decision framework that moves things forward.",
  },
];

const caseStudies = [
  {
    tag: "Portfolio Strategy",
    title: "OTC portfolio redesign across three European markets",
    work:
      "Processed 2,000+ OTC drugs across France, Germany, and Italy. Interviewed 100+ stakeholders: KOLs, pharmacists, wholesalers, and distributors, to validate opportunities, assess channel dynamics, and test umbrella branding potential.",
    outcome:
      "Optimal product bundle defined per geography. Detailed roadmap implemented; local teams aligned across all three markets.",
  },
  {
    tag: "Commercial Strategy",
    title: "Commercial and medical resource reallocation across 5 countries",
    work:
      "Assessed medical center footprint by segment, estimated FTEs required per center, and classified centers by commercial potential. Built a quantitative simulation tool to model responsibility reallocation between commercial and medical teams.",
    outcome:
      "Actionable reallocation plan delivered with year-by-year FTE evolution, adapted to each country's market dynamics.",
  },
  {
    tag: "M&A Integration",
    title: "Integration PMO for a merger across one region",
    work:
      "Led the integration office for a regional merger of two global pharmaceutical companies. Built a 100-day plan across 15 functional areas, defined decision rights, and ran regular status cadence across all workstreams.",
    outcome:
      "Regional integration completed on time. The approach was adopted as the global blueprint for integration in remaining regions.",
  },
];

const SECTION_IDS = [
  "section-hero",
  "section-capabilities",
  "section-howwework",
  "section-work",
];

export default function GlobalPharma() {
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
        title="Global Pharma Strategy Consulting"
        description="Strategy and competitive intelligence for global pharmaceutical companies. Multi-market, multi-stakeholder, multi-functional engagements built for senior decision rooms."
        canonical="/industries/life-sciences/pharmaceutical-companies/global-pharma"
      />
      <PharmaSubnav />
      {/* Hero */}
      <section
        id="section-hero"
        className="relative min-h-[60vh] flex items-end pt-44 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${pharmaHero})`,
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
            Global Pharma
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            Global leaders facing complex launches, multi-country expansion, portfolio decisions, and sustained competitive pressure across therapeutic areas. We deliver decision-grade insight and strategic support built for large, multi-stakeholder environments.
          </p>
          <p className="mt-2 text-sm sm:text-base text-primary-foreground/55">
            We work at a global, regional or country level.
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
          {/* Connecting line — desktop */}
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
