import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import insightsHero from "@/assets/insights-hero.png";
import SEOHead from "@/components/SEOHead";
import { useInsights, type Insight } from "@/hooks/useInsights";
import { FlaskConical, ShoppingBag, Target, TrendingUp, Utensils, Lightbulb } from "lucide-react";

const CATEGORIES = ["All", "Consumer Goods", "Life Sciences", "Strategy", "Trends"];

const TAG_CONFIG: Record<string, { icon: React.ElementType; accent: string }> = {
  "Life Sciences":   { icon: FlaskConical, accent: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  "Consumer Goods":  { icon: ShoppingBag,  accent: "text-sky-600 bg-sky-50 border-sky-200" },
  "Strategy":        { icon: Target,        accent: "text-violet-600 bg-violet-50 border-violet-200" },
  "Trends":          { icon: TrendingUp,    accent: "text-amber-600 bg-amber-50 border-amber-200" },
  "Food & Beverages":{ icon: Utensils,      accent: "text-orange-500 bg-orange-50 border-orange-200" },
};

function InsightCard({ item, featured = false }: { item: Insight; featured?: boolean }) {
  const href = item.pdfUrl ?? item.externalUrl ?? null;
  const isExternal = !!href;

  return (
    <article
      className={`group border border-border/60 rounded-xl bg-white shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col ${featured ? "p-8 md:p-10" : "p-6"}`}
    >
      <div className="flex items-center justify-between mb-4">
        {(() => {
          const cfg = TAG_CONFIG[item.tag];
          const Icon = cfg?.icon;
          return (
            <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border font-semibold ${cfg ? cfg.accent : "text-primary/70 bg-primary/5 border-primary/20"}`}>
              {Icon && <Icon size={11} strokeWidth={2.2} />}
              {item.tag}
            </span>
          );
        })()}
        <span className="text-[10px] font-mono text-muted-foreground/50">{item.readTime} read</span>
      </div>
      <h3 className={`font-semibold leading-snug mb-3 group-hover:text-primary transition-colors flex-1 ${featured ? "text-xl md:text-2xl" : "text-base"}`}>
        {item.title}
      </h3>
      <p className={`text-muted-foreground leading-relaxed mb-5 ${featured ? "text-base" : "text-sm"}`}>
        {item.teaser}
      </p>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
        >
          Read more →
        </a>
      ) : (
        <span className="text-sm font-semibold text-muted-foreground/40 mt-auto cursor-default">
          Coming soon
        </span>
      )}
    </article>
  );
}

function InsightSkeleton({ featured = false }: { featured?: boolean }) {
  return (
    <div className={`border border-border rounded-xl bg-white flex flex-col animate-pulse ${featured ? "p-8 md:p-10" : "p-6"}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="h-4 w-24 bg-muted rounded-full" />
        <div className="h-3 w-12 bg-muted rounded-full" />
      </div>
      <div className={`bg-muted rounded mb-3 ${featured ? "h-8 w-3/4" : "h-5 w-4/5"}`} />
      <div className="h-4 w-full bg-muted rounded mb-2" />
      <div className="h-4 w-2/3 bg-muted rounded mb-5" />
      <div className="h-4 w-20 bg-muted rounded mt-auto" />
    </div>
  );
}


export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: insights, isLoading, isError } = useInsights(activeCategory);

  const featured = (insights ?? []).slice(0, 2);
  const grid = (insights ?? []).slice(2);

  return (
    <PageLayout>
      <SEOHead
        title="Insights — Signals and Perspectives from TheMindCo"
        description="Decision-ready perspectives on Life Sciences, Consumer Goods, and strategy — built from real-world triangulation and fast-cycle synthesis."
        canonical="/insights"
        noindex
      />
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{ backgroundImage: `url(${insightsHero})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(15,15,16,0.92) 45%, rgba(15,15,16,0.45) 100%)" }} />
        <div className="container-narrow relative z-10 flex flex-col gap-8">
          <div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-primary/70 mb-4">Perspectives from TheMindCo</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-primary-foreground">
              Insights
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl leading-relaxed text-primary-foreground/75">
              Signals, patterns, and decision-ready takes, built from real-world triangulation and fast-cycle synthesis.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-border bg-[#f5f4f2]">
        <div className="container-narrow py-4 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground shrink-0 mr-1">Filter</span>
          <div className="w-px h-4 bg-border shrink-0" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/40 bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Loading state */}
      {isLoading && (
        <section className="section-padding bg-[#f5f4f2]">
          <div className="container-narrow">
            <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-6">Latest</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <InsightSkeleton featured />
              <InsightSkeleton featured />
            </div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-6">More insights</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InsightSkeleton />
              <InsightSkeleton />
              <InsightSkeleton />
            </div>
          </div>
        </section>
      )}

      {/* Error state */}
      {isError && (
        <section className="section-padding bg-[#f5f4f2]">
          <div className="container-narrow text-center py-20">
            <p className="text-muted-foreground text-sm">Could not load insights. Please try again later.</p>
          </div>
        </section>
      )}

      {/* Empty state */}
      {!isLoading && !isError && insights?.length === 0 && (
        <section className="section-padding bg-[#f5f4f2]">
          <div className="container-narrow text-center py-20">
            <p className="text-muted-foreground text-sm">No insights published yet. Check back soon.</p>
          </div>
        </section>
      )}

      {/* Featured row */}
      {!isLoading && !isError && featured.length > 0 && (
        <section className="section-padding pb-6 bg-[#f5f4f2]">
          <div className="container-narrow">
            <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-6">Latest</p>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((item) => (
                <InsightCard key={item._id} item={item} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Grid */}
      {!isLoading && !isError && grid.length > 0 && (
        <section className="pb-16 pt-2 bg-[#f5f4f2]">
          <div className="container-narrow">
            <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-6">More insights</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid.map((item) => (
                <InsightCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

    </PageLayout>
  );
}
