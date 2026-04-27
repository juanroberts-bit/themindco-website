import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import lsHero from "@/assets/lifesciences-hero.png";
import cardPharma from "@/assets/card-lifesciences-bg.png";
import SEOHead from "@/components/SEOHead";

const subPages = [
  {
    title: "Pharma & Biotech",
    href: "/industries/life-sciences/pharmaceutical-companies",
    description: "From global innovators to regional challengers to early-stage disruptors. Portfolio choices, commercial strategy, BD, and execution.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Molecule: central atom + bonds + outer atoms */}
        <circle cx="16" cy="16" r="3.5" fill="#ff5d18" fillOpacity="0.9"/>
        <line x1="16" y1="12.5" x2="16" y2="6" stroke="#ff5d18" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.6"/>
        <circle cx="16" cy="4.5" r="2.2" fill="#ff5d18" fillOpacity="0.55"/>
        <line x1="18.8" y1="17.6" x2="24" y2="23" stroke="#ff5d18" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.6"/>
        <circle cx="25.2" cy="24.5" r="2.2" fill="#ff5d18" fillOpacity="0.55"/>
        <line x1="13.2" y1="17.6" x2="8" y2="23" stroke="#ff5d18" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.6"/>
        <circle cx="6.8" cy="24.5" r="2.2" fill="#ff5d18" fillOpacity="0.55"/>
      </svg>
    ),
  },
  {
    title: "MedTech, Packaging & Delivery Systems",
    href: "/industries/life-sciences/medtech-packaging-delivery-systems",
    description: "Helping medtech and packaging players clarify where to win — through customer insights, competitive intelligence, and go-to-market strategy.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Device screen */}
        <rect x="5" y="7" width="22" height="15" rx="2" stroke="#ff5d18" strokeWidth="1.4" strokeOpacity="0.6" fill="none"/>
        {/* Signal line */}
        <polyline points="7,17 10,17 12,11 15,21 18,14 21,17 25,17" stroke="#ff5d18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" fill="none"/>
        {/* Stand */}
        <line x1="16" y1="22" x2="16" y2="26" stroke="#ff5d18" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5"/>
        <line x1="11" y1="26" x2="21" y2="26" stroke="#ff5d18" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Hospitals",
    href: "/industries/life-sciences/hospitals-payers",
    description: "Supporting hospital systems in improving decision-making, access strategy, and operational performance across complex institutional environments.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Building */}
        <rect x="6" y="12" width="20" height="17" rx="1.5" stroke="#ff5d18" strokeWidth="1.4" strokeOpacity="0.55" fill="none"/>
        {/* Roof peak */}
        <path d="M4 13 L16 5 L28 13" stroke="#ff5d18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" fill="none"/>
        {/* Cross horizontal */}
        <line x1="12" y1="19" x2="20" y2="19" stroke="#ff5d18" strokeWidth="1.6" strokeLinecap="round"/>
        {/* Cross vertical */}
        <line x1="16" y1="15" x2="16" y2="23" stroke="#ff5d18" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Payers",
    href: "/industries/life-sciences/payers",
    description: "Supporting payer organizations navigating coverage decisions, formulary strategy, operational transformation, and competitive positioning.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield */}
        <path d="M16 4 L27 8.5 L27 17 C27 22.5 22 27 16 29 C10 27 5 22.5 5 17 L5 8.5 Z" stroke="#ff5d18" strokeWidth="1.4" strokeLinejoin="round" strokeOpacity="0.65" fill="none"/>
        {/* Check mark inside */}
        <polyline points="11,16 14.5,20 21,12" stroke="#ff5d18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function LifeSciences() {
  return (
    <PageLayout>
      <SEOHead
        title="Life Sciences Consulting — Pharma, Biotech, MedTech, Hospitals & Payers"
        description="TheMindCo supports Life Sciences leaders across Pharma, Biotech, MedTech, Hospitals, and Payers. Research, strategy, and execution in complex regulated markets."
        canonical="/industries/life-sciences"
      />
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${lsHero})`,
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
            Life Sciences
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            We support Life Sciences leaders navigating complex, regulated markets — where evidence, incentives, and stakeholder ecosystems drive adoption. We combine specialized research, strategy, and implementation support to help teams make defensible choices faster and deliver them through disciplined execution.
          </p>
        </div>
      </section>

      {/* Sub-page cards */}
      <section className="section-padding bg-[#0f0f10]">
        <div className="container-narrow">
          <SectionHeading
            title="Our Life Sciences practices"
            className="text-primary-foreground [&>p]:text-primary-foreground/70"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {subPages.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group block rounded-lg border border-white/8 bg-white/3 hover:bg-white p-8 flex flex-col gap-4 transition-colors duration-200"
              >
                <div className="opacity-90 group-hover:opacity-100 transition-opacity">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-primary-foreground group-hover:text-foreground transition-colors leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-primary-foreground/55 group-hover:text-muted-foreground leading-relaxed transition-colors flex-1">
                  {s.description}
                </p>
                <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
