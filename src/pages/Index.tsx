import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { SectionHeading, IndustryCard } from "@/components/ContentBlocks";
import ClientLogoWall from "@/components/ClientLogoWall";
import hubsBg from "@/assets/world-map-1920x1080.png";
import themindcoLogo from "@/assets/themindco-logo.png";

import heroBg from "@/assets/hero-bg-1.jpg";
import industriesBg from "@/assets/industries-bg.png";
import cardCpgBg from "@/assets/card-cpg-bg.png";
import cardLifesciencesBg from "@/assets/card-lifesciences-bg.png";
import cardOtherBg from "@/assets/card-other-bg.png";
import whatWeDoBg from "@/assets/what-we-do-bg.png";
import SEOHead from "@/components/SEOHead";

const SECTION_IDS = ["section-hero", "section-20years", "section-industries", "section-whatwedo", "section-hubs", "section-clients"];

export default function Home() {
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
        title="Research & Strategy Consulting for Life Sciences and Consumer Goods"
        description="TheMindCo is a boutique research and strategy partner for Life Sciences, Pharma, Biotech, MedTech, and Consumer Goods leaders. Decision-grade insight. Senior judgment at the core."
        canonical="/"
        schema={{"@context":"https://schema.org","@type":"Organization","name":"TheMindCo","url":"https://www.themindco.com","description":"Boutique research and strategy consulting for Life Sciences and Consumer Goods","sameAs":["https://www.linkedin.com/company/themindco"]}}
      />
      {/* Hero */}
      <section id="section-hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0f0f10]">
        {/* Concentric circles SVG background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="heroGlow" cx="68%" cy="52%" r="45%">
              <stop offset="0%" stopColor="#2a2a35" />
              <stop offset="100%" stopColor="#0f0f10" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#heroGlow)" />
          <g fill="none" stroke="#ffffff" strokeOpacity="0.055" strokeWidth="0.8">
            {[40,80,120,165,215,268,325,386,452,522,597,678,764,856,955,1060].map((r) => (
              <circle key={r} cx="980" cy="468" r={r} />
            ))}
          </g>
        </svg>

        {/* Content — centrado verticalmente, respeta navbar fija */}
        <div className="relative z-10 w-[90%] max-w-6xl mx-auto flex flex-col gap-10 pt-28 pb-28 md:pt-32 md:pb-32">
          <span className="text-white/90 text-2xl sm:text-3xl font-bold tracking-tight font-heading">TheMindCo</span>
          <div className="flex flex-col gap-3 max-w-4xl mt-2">
            <h1 className="flex flex-col gap-4">
              {[
                { key: "Insights", rest: " that break through complexity." },
                { key: "Ideas", rest: " that inspire the future." },
                { key: "Execution", rest: " that drives growth." },
              ].map(({ key, rest }) => (
                <span key={key} className="block text-[1.4rem] sm:text-3xl md:text-[2.4rem] lg:text-[2.8rem] font-bold leading-[1.2] font-heading">
                  <span className="text-primary">{key}</span>
                  <span className="text-primary-foreground/85">{rest}</span>
                </span>
              ))}
            </h1>
            <p className="text-primary-foreground/55 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mt-4">
              Boutique research and strategy agency for Life Sciences and Consumer Goods teams worldwide.
              Senior-led expert advice. Proprietary agentic stack.
            </p>
          </div>
        </div>

      </section>

      {/* 20 Years Celebration Strip */}
      <section id="section-20years" className="py-10 md:py-14 bg-primary">
        <div className="w-[90%] max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-stretch gap-8 sm:gap-0">
          {/* Left — número */}
          <div className="flex items-center justify-center sm:justify-end sm:pr-10 sm:w-40 shrink-0">
            <span className="text-7xl md:text-8xl font-bold font-heading text-primary-foreground tracking-tight leading-none">20</span>
          </div>
          {/* Divider */}
          <div className="hidden sm:block w-px bg-primary-foreground/25 mx-2" />
          {/* Right — texto */}
          <div className="flex flex-col justify-center sm:pl-10 gap-2 text-center sm:text-left">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/90">
              Years of TheMindCo
            </p>
            <p className="text-xs text-primary-foreground/50 font-medium tracking-wide">2006 – 2026</p>
            <p className="mt-1 text-sm md:text-base text-primary-foreground/75 leading-relaxed max-w-lg">
              Two decades of decision-grade research, strategy, and execution support across Consumer Goods, Life Sciences, and complex ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section
        id="section-industries"
        className="section-padding bg-white"
      >
        <div className="container-narrow">
          <SectionHeading
            title="Our focus areas"
            subtitle="Built for complex markets: Consumer Goods and Life Sciences, with targeted work beyond."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <IndustryCard title="Consumer Goods" href="/industries/cpg-food-beverage" backgroundImage={cardCpgBg} />
            <IndustryCard title="Life Sciences" href="/industries/life-sciences" backgroundImage={cardLifesciencesBg} />
            <IndustryCard title="Other Industries" href="/industries/other-industries" backgroundImage={cardOtherBg} />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="section-whatwedo" className="section-padding bg-[#f8f7f5]">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight leading-tight text-foreground">
              What we do
            </h2>
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
              We partner with leadership teams on growth, innovation, and transformation, bringing decision-grade research, competitive and market intelligence, customer and stakeholder insights, portfolio and go-to-market strategy, operating model design, and hands-on implementation support. We help teams align on choices, pressure-test assumptions, build credible narratives, and translate strategy into execution through disciplined PMO, change management, and practical capability building.
            </p>
          </div>
        </div>
      </section>




      <section id="section-hubs" className="relative bg-[#0f0f10] py-14 md:py-0" style={{ minHeight: "unset" }}>
        {/* Map — hidden on mobile, shown md+ */}
        <div className="hidden md:block" style={{ height: "34vw" }}>
          <img
            src={hubsBg}
            alt="TheMindCo global hubs"
            className="w-full h-full block"
            style={{ objectFit: "contain", objectPosition: "center", transform: "scaleX(1.1)" }}
            draggable={false}
          />
          <div className="absolute top-0 left-0 w-full px-6 md:px-12 lg:px-20 pt-10 md:pt-14">
            <SectionHeading
              title="Our hubs"
              subtitle="Global delivery, local presence."
              className="text-left text-primary-foreground [&>p]:text-primary-foreground/80"
            />
          </div>
        </div>
        {/* Mobile fallback — just the text */}
        <div className="md:hidden px-5 pt-4 pb-2">
          <SectionHeading
            title="Our hubs"
            subtitle="Global delivery, local presence."
            className="text-left text-primary-foreground [&>p]:text-primary-foreground/80"
          />
          <p className="text-sm text-primary-foreground/50 mt-1">Barcelona · Buenos Aires · Miami · Milan · New York · Sao Paulo</p>
        </div>
      </section>

      {/* Clients */}
      <div id="section-clients"><ClientLogoWall /></div>

      {/* Flecha fija — navega a la siguiente sección al hacer click */}
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
