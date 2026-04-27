import { useParams, Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { capabilities, industryLinks } from "@/data/capabilities";
import capabilitiesHero from "@/assets/what-we-do-bg.png";
import SEOHead from "@/components/SEOHead";

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const capability = capabilities.find((c) => c.slug === slug);

  if (!capability) {
    return (
      <PageLayout>
        <div className="section-padding pt-32 text-center">
          <p className="text-muted-foreground">Capability not found.</p>
          <Link to="/capabilities" className="text-primary mt-4 inline-block">Back to Capabilities</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SEOHead
        title={`${capability.title} — Strategy Consulting`}
        description={capability.description}
        canonical={`/capabilities/${capability.slug}`}
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
          style={{ background: "linear-gradient(105deg, rgba(15,15,16,0.92) 50%, rgba(15,15,16,0.45) 100%)" }}
        />
        <div className="container-narrow relative z-10">
          <Link
            to="/capabilities"
            className="text-[10px] font-mono tracking-widest uppercase text-primary/70 hover:text-primary mb-4 inline-flex items-center gap-2 transition-colors"
          >
            ← All capabilities
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-foreground mt-2">
            {capability.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            {capability.description}
          </p>
        </div>
      </section>

      {/* Capability switcher — sticky */}
      <section className="sticky top-[3.75rem] z-30 border-b border-white/8 bg-[#16161a]">
        <div className="container-narrow py-3">
          <div className="hidden md:flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-mono tracking-widest uppercase text-primary/50 mr-2">
              Jump to
            </span>
            {capabilities.map((c) => (
              <Link
                key={c.slug}
                to={`/capabilities/${c.slug}`}
                className={`text-[11px] font-semibold px-4 py-1.5 rounded-full border transition-colors ${
                  c.slug === slug
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-white/15 text-primary-foreground/50 hover:text-primary hover:border-primary/40"
                }`}
              >
                {c.title}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <select
              value={slug}
              onChange={(e) => navigate(`/capabilities/${e.target.value}`)}
              className="w-full border border-white/15 rounded-lg px-3 py-2 text-sm bg-[#16161a] text-primary-foreground"
            >
              {capabilities.map((c) => (
                <option key={c.slug} value={c.slug}>{c.title}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Highlights — shown only if capability has them */}
      {capability.highlights && capability.highlights.length > 0 && (
        <section className="section-padding bg-[#16161a] border-b border-white/5">
          <div className="container-narrow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capability.highlights.map((h, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-white/8 bg-white/3 hover:bg-white p-6 flex flex-col gap-4 transition-colors duration-200 cursor-default"
                >
                  <div
                    className="text-primary group-hover:text-primary transition-colors"
                    dangerouslySetInnerHTML={{ __html: h.icon }}
                  />
                  <h3 className="font-semibold text-sm text-primary-foreground group-hover:text-foreground leading-snug transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/50 group-hover:text-muted-foreground leading-relaxed transition-colors">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content — dark, industry style */}
      <section className="section-padding bg-[#0f0f10]">
        <div className="container-narrow">
          <div className="grid md:grid-cols-[1fr_0.85fr] gap-10 md:gap-20">

            {/* Left: What this includes */}
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-primary/60 mb-6">
                What this includes
              </p>
              <ul className="space-y-0">
                {capability.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 border-b border-white/8 last:border-0">
                    <span className="font-mono text-xs text-primary/40 mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-primary-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Selected work */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono tracking-widest uppercase text-primary/60 mb-1">
                Selected work
              </p>
              {capability.cases.map((c, i) => (
                <div
                  key={i}
                  className="group rounded-lg border border-white/8 bg-white/3 hover:bg-white p-5 flex flex-col gap-3 transition-colors duration-200 cursor-default"
                >
                  <p className="text-sm font-medium text-primary-foreground group-hover:text-foreground leading-snug transition-colors">
                    {c.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/15 group-hover:border-border text-primary/50 group-hover:text-muted-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <section className="section-padding bg-primary">
        <div className="container-narrow flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-primary-foreground leading-tight">
              Explore by industry
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {industryLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs font-semibold text-primary-foreground/80 hover:text-primary-foreground border border-primary-foreground/30 hover:border-primary-foreground/60 rounded-full px-4 py-1.5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/capabilities"
            className="shrink-0 text-sm font-semibold text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            ← All capabilities
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
