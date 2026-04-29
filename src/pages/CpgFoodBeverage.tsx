import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import cpgHero from "@/assets/cpg-hero.webp";
import SEOHead from "@/components/SEOHead";

const SECTION_IDS = ["section-hero", "section-flow", "section-howwework", "section-work"];

const steps = [
  {
    n: "01",
    verb: "Define",
    label: "where to play",
    items: ["Signal scanning & foresight synthesis", "Opportunity mapping & prioritization", "Innovation frameworks & portfolio logic"],
  },
  {
    n: "02",
    verb: "Get closer",
    label: "to reality",
    items: ["Deep consumer insights", "Expert ecosystem interviews", "Hard-to-reach stakeholder research"],
  },
  {
    n: "03",
    verb: "Turn insight",
    label: "into direction",
    items: ["Concept development", "Innovation direction setting", "Jobs-to-be-done frameworks"],
  },
  {
    n: "04",
    verb: "Move",
    label: "to action",
    items: ["Go-to-market strategy", "Channel development", "Execution planning & PMO"],
  },
];

const howWeWork = [
  { title: "Partners do the work", description: "The people who scope the engagement are the ones who deliver it. Real judgment at every step, no handoffs to a team you've never met." },
  { title: "Tailored to your question", description: "We don't apply a standard playbook. We start from your actual decision, your context, and your constraints, and build from there." },
  { title: "Decisions over deliverables", description: "We measure success by what gets decided and what gets done, not by the weight of the deck we hand over." },
];

const caseStudies = [
  {
    tag: "Go-to-Market",
    title: "DTC channel entry across three markets",
    work: "Mapped the full value chain via 30 in-depth interviews and built market-specific 'How to Win' playbooks.",
    outcome: "Playbooks were adopted as living documents and used directly through the live pilot rollout.",
  },
  {
    tag: "Foresight",
    title: "Predicting the rise of Gut Health",
    work: "Built a retrospective Signals Map for a global snacks R&D team to decode how the category moved from fringe to mainstream.",
    outcome: "Findings shaped long-term R&D investment priorities and informed portfolio strategy going forward.",
  },
  {
    tag: "Innovation Strategy",
    title: "New category entry in functional beverages and plant-based food",
    work: "Primary research, competitive analysis, and demand forecasting across key markets.",
    outcome: "Client had a clear go/no-go recommendation and a market-specific entry roadmap ready to act on.",
  },
];

export default function CpgFoodBeverage() {
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
    const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    const next = sections.find(el => el!.getBoundingClientRect().top > NAVBAR_HEIGHT + 20);
    if (next) {
      const top = next.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Consumer Goods Strategy Consulting — CPG, Food & Beverage"
        description="TheMindCo supports Consumer Goods and CPG leaders on growth strategy, competitive intelligence, innovation, and go-to-market. Deep primary research, proprietary AI-enabled workflows."
        canonical="/industries/cpg-food-beverage"
      />
      {/* Hero custom */}
      <section
        id="section-hero"
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{ backgroundImage: `url(${cpgHero})`, backgroundSize: "cover", backgroundPosition: "center 65%" }}
      >
        {/* Gradient overlay — dark left, lighter right */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(15,15,16,0.85) 40%, rgba(15,15,16,0.35) 100%)" }} />
        <div className="container-narrow relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-foreground">
            Consumer Goods
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            Navigate the hard questions: where to play, what customers actually need, what to build next, and how to move.{" "}
            <br className="hidden md:block" />
            We combine deep primary research synthesis and strategy powered by our proprietary tools and methodologies.
          </p>
        </div>
      </section>

      {/* Focus buckets */}
      <section className="section-padding bg-primary">
        <div className="container-narrow">
          <SectionHeading title="What we do" className="text-primary-foreground [&>p]:text-primary-foreground/70" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Brand strategy",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                    <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.7"/>
                    <path d="M16 6 L16 3M16 29 L16 26M6 16 L3 16M29 16 L26 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Innovation insights & strategy",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4C11.03 4 7 8.03 7 13c0 3.18 1.63 5.98 4.1 7.62V23a1 1 0 001 1h7.8a1 1 0 001-1v-2.38C23.37 18.98 25 16.18 25 13c0-4.97-4.03-9-9-9z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                    <path d="M12 27h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M16 4 L16 2M22 7 L24 5M26 13 L28 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                ),
              },
              {
                title: "Deep consumer insights",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                    <path d="M6 26c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                    <path d="M22 9l2-2M24 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7"/>
                  </svg>
                ),
              },
              {
                title: "Hard-to-reach stakeholder insights & research",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                    <path d="M3 26c0-4.42 3.58-8 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                    <circle cx="22" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.7"/>
                    <path d="M29 24c0-3.87-3.13-7-7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.7"/>
                    <path d="M16 26h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                ),
              },
            ].map((b) => (
              <div
                key={b.title}
                className="group flex flex-col gap-5 rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 hover:bg-white p-6 transition-colors duration-200 cursor-default"
              >
                <div className="text-primary-foreground group-hover:text-primary transition-colors duration-200">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-base leading-snug text-primary-foreground group-hover:text-foreground transition-colors duration-200">
                  {b.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow section */}
      <section id="section-flow" className="section-padding bg-[#0f0f10]">
        <div className="container-narrow">
          <SectionHeading title="How we help" className="text-primary-foreground [&>p]:text-primary-foreground/70" />

          {/* Columns — desktop horizontal, mobile vertical */}
          <div className="relative flex flex-col md:flex-row gap-0">
            {/* Decorative line — desktop only */}
            <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-primary/25 z-0" />

            {steps.map((step, i) => (
              <div key={step.n} className="relative flex-1 flex flex-col md:items-start group pt-0 md:pt-6 md:px-3">
                {/* Mobile separator */}
                {i > 0 && (
                  <div className="md:hidden w-full h-px bg-primary/20 my-6" />
                )}

                <h3 className="text-xl font-bold text-primary-foreground font-heading leading-tight">
                  {step.verb}<br />
                  <span className="text-primary">{step.label}</span>
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {step.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-primary-foreground/55 leading-relaxed">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — fondo naranja TMC */}
      <section id="section-howwework" className="section-padding bg-primary">
        <div className="container-narrow">
          <SectionHeading title="How we work" className="text-primary-foreground [&>p]:text-primary-foreground/70" />
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-lg overflow-hidden">
            {howWeWork.map((h, i) => (
              <div key={h.title} className="group bg-primary hover:bg-white p-8 flex flex-col gap-3 transition-colors duration-200 cursor-default">
                <span className="text-primary-foreground/40 group-hover:text-foreground/30 font-mono text-xs tracking-widest transition-colors">0{i + 1}</span>
                <h4 className="font-semibold text-lg text-primary-foreground group-hover:text-foreground leading-snug transition-colors">{h.title}</h4>
                <p className="text-sm text-primary-foreground/70 group-hover:text-muted-foreground leading-relaxed transition-colors">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="section-work" className="section-padding bg-[#0f0f10] border-t border-white/5">
        <div className="container-narrow">
          <SectionHeading title="Selected work" className="text-primary-foreground" />
          <div className="grid md:grid-cols-3 gap-5">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="group rounded-lg border border-white/8 bg-white/3 hover:bg-white p-6 flex flex-col gap-5 transition-colors duration-200 cursor-default">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-primary group-hover:text-primary transition-colors">{cs.tag}</span>
                  <h4 className="font-semibold text-base text-primary-foreground group-hover:text-foreground leading-snug transition-colors">{cs.title}</h4>
                  <p className="text-sm text-primary-foreground/45 group-hover:text-muted-foreground leading-relaxed transition-colors">{cs.work}</p>
                </div>
                <div className="border-t border-white/8 group-hover:border-border pt-4 transition-colors">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-primary/50 group-hover:text-primary/70 mb-2 transition-colors">Outcome</p>
                  <p className="text-sm text-primary-foreground/80 group-hover:text-foreground leading-relaxed transition-colors">{cs.outcome}</p>
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
