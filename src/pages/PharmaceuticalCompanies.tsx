import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { SectionHeading } from "@/components/ContentBlocks";
import pharmaHero from "@/assets/pharma-hero.png";
import SEOHead from "@/components/SEOHead";

const segments = [
  {
    n: "01",
    title: "Global Pharma",
    description:
      "Global pharmaceutical companies navigating complex innovation launches, multi-country expansion, asset acquisition, and sustained competitive pressure across therapeutic areas.",
    href: "/industries/life-sciences/pharmaceutical-companies/global-pharma",
  },
  {
    n: "02",
    title: "Regional Leaders",
    description:
      "Regional and country-level pharma leaders facing competitive pressure and looking to grow their portfolio, expand into new markets, and strengthen their commercial position.",
    href: "/industries/life-sciences/pharmaceutical-companies/regional-leaders",
  },
  {
    n: "03",
    title: "Biotech",
    description:
      "Up-and-coming innovative biotech companies looking to scale, expand their reach, and optimize their business model as they move from early-stage to commercial maturity.",
    href: "/industries/life-sciences/pharmaceutical-companies/biotech",
  },
];

export default function PharmaceuticalCompanies() {
  return (
    <PageLayout>
      <SEOHead
        title="Pharma & Biotech Strategy Consulting"
        description="TheMindCo works with pharmaceutical and biotech companies — from global innovators to regional challengers. Portfolio strategy, competitive intelligence, licensing, and launch execution."
        canonical="/industries/life-sciences/pharmaceutical-companies"
      />
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
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
            Pharma &amp; Biotech
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            We work with pharmaceutical and biotech companies across the full spectrum—from global innovators to regional challengers to early-stage disruptors. Our work is built around the decisions that matter most: where to play, how to compete, and how to move. Strategy building, licensing, competitive intelligence and execution at the core.
          </p>
        </div>
      </section>

      {/* Segment cards */}
      <section className="section-padding bg-[#0f0f10]">
        <div className="container-narrow">
          <SectionHeading
            title="Who we work with"
            className="text-primary-foreground [&>p]:text-primary-foreground/70"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {segments.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group block rounded-lg border border-white/8 bg-white/3 hover:bg-white p-8 flex flex-col gap-6 transition-colors duration-200"
              >
                <span className="text-primary text-xs font-mono tracking-widest">
                  {s.n}
                </span>
                <h3 className="text-2xl font-bold font-heading text-primary-foreground group-hover:text-foreground transition-colors leading-snug">
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
