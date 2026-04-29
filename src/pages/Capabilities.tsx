import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { capabilities, industryLinks } from "@/data/capabilities";
import capabilitiesHero from "@/assets/what-we-do-bg.png";
import SEOHead from "@/components/SEOHead";

export default function Capabilities() {
  return (
    <PageLayout>
      <SEOHead
        title="Capabilities — Research, Strategy & Execution"
        description="From competitive intelligence and market research to corporate strategy, go-to-market, and implementation. TheMindCo capabilities deployed standalone or as integrated engagements."
        canonical="/capabilities"
      />
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${capabilitiesHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(15,15,16,0.88) 45%, rgba(15,15,16,0.38) 100%)" }}
        />
        <div className="container-narrow relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-foreground">
            Capabilities
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            From signal to decision to execution: research depth, strategic rigor, and delivery support, deployed standalone or as an integrated engagement.
          </p>
        </div>
      </section>

      {/* Industry filter strip */}
      <section className="border-b border-white/8 bg-[#16161a]">
        <div className="container-narrow py-4 flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-primary/60 shrink-0">
            Explore by industry
          </span>
          <div className="w-px h-4 bg-white/10 shrink-0" />
          {industryLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xs font-semibold text-primary/80 hover:text-primary border border-primary/20 hover:border-primary/50 rounded-full px-4 py-1.5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Cards grid — dark, industry style */}
      <section className="section-padding bg-[#0f0f10]">
        <div className="container-narrow">
          <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20 items-start mb-14">
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-primary/60">What we do</p>
              <div className="w-6 h-px bg-primary/40 mt-3" />
            </div>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed">
              Each capability can be deployed standalone or combined into an integrated engagement, shaped around your question, timeline, and team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap.slug}
                className="group rounded-xl border border-white/8 bg-white/3 hover:bg-white p-6 md:p-8 flex flex-col gap-3 transition-colors duration-200"
              >
                <h3 className="font-semibold text-base text-primary-foreground group-hover:text-foreground leading-snug transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-primary-foreground/50 group-hover:text-muted-foreground leading-relaxed transition-colors flex-1">
                  {cap.summary}
                </p>
                <Link
                  to={`/capabilities/${cap.slug}`}
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-1"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="section-padding bg-primary">
        <div className="container-narrow flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
              Have a question in mind?
            </h2>
            <p className="text-primary-foreground/75 mt-2 text-base">
              We'll connect you with the right partner within 24 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-block px-8 py-3.5 bg-primary-foreground text-primary font-semibold rounded-full hover:opacity-90 transition-opacity text-sm text-center"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
