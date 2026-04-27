import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { PageHero, SectionHeading } from "@/components/ContentBlocks";
import aboutHeroBg from "@/assets/about-hero.png";
import aboutValuesBg from "@/assets/about-values-bg.png";
import SEOHead from "@/components/SEOHead";

const SECTION_IDS = ["section-about-hero", "section-metrics", "section-values", "section-team"];

// Fotos — copiá cada imagen a public/team/ con estos nombres exactos
// esteban.jpg, manuel.jpg, javier.jpg, jessica.jpg, juan.jpg, ignacio.jpg, marco.jpg
const teamPhotos: Record<string, string> = {
  "Esteban Rubin":    "/team/esteban.jpg",
  "Manuel Benites":   "/team/manuel.jpg",
  "Javier de Santos": "/team/javier.jpg",
  "Jessica Yankell":  "/team/jessica.jpg",
  "Juan Roberts":     "/team/juan.jpg",
  "Ignacio Quintana": "/team/ignacio.jpg",
  "Marco Decastri":   "/team/marco.jpg",
};

const metrics = [
  { number: "20", label: "Years in business" },
  { number: "600", label: "Projects", plus: true },
  { number: "50", label: "Clients", plus: true },
  { number: "80", label: "Years of combined industry experience", plus: true },
];

const values = [
  { title: "Bespoke by default", description: "We don't do off-the-shelf. We tailor the work to the question, the context, and the decision you need to make—then craft outputs that are leadership-ready." },
  { title: "Meet you where you are", description: "We plug into your reality—your data, your timelines, your stakeholders—filling gaps with robust research and analysis without slowing the business down." },
  { title: "We get where you're coming from", description: "We build depth in categories and regulated ecosystems shaped by science, incentives, and culture—so our insights and recommendations are grounded in how markets actually work." },
  { title: "AI-powered, human-led", description: "We use proprietary AI-enabled workflows to accelerate research, triangulation, and synthesis—so teams get sharper answers faster, with senior judgment and accountability at the core." },
  { title: "Think globally, act locally", description: "We operate across markets with consistent standards—while respecting local nuance, on-the-ground realities, and what \"works\" in each context." },
  { title: "We stick around 'til the job is done", description: "We don't just deliver slides. We stay close through PMO, change, and adoption—helping teams land the narrative, align stakeholders, and execute." },
];

const partners = [
  { name: "Esteban Rubin", title: "Founding Partner", focus: "Life Sciences, Strategy, Coaching", bio: "Founded TheMindCo in 2006. He specializes in Life Sciences, supporting pharma and medtech leaders globally on complex growth challenges — working closely with executives, CEOs, and founders. MD, MBA with prior experience at McKinsey.", linkedin: "https://www.linkedin.com/in/estebanrubin/" },
  { name: "Manuel Benites", title: "Managing Partner", focus: "Life Sciences and Consumer Goods", bio: "15+ years of experience across Life Sciences and CPG. Has participated in over 100 strategic projects, primarily supporting companies in LatAm and the US on strategy and high-stakes challenges. Creator of MakeTheCase and executive training programs delivered globally. He leads AI across TheMindCo.", linkedin: "https://www.linkedin.com/in/manubenites/" },
  { name: "Javier de Santos", title: "Founder & Director", focus: "Life Sciences & MedTech", bio: "20+ years in consulting with experience across the US, Europe, and MedTech clients globally. Former Booz Allen consultant. He brings deep expertise in Life Sciences and Medical Technology, supporting senior leaders on complex strategic and commercial challenges.", linkedin: "https://www.linkedin.com/in/javierdesantos/" },
  { name: "Jessica Yankell", title: "US Partner", focus: "Consumer Goods, Innovation, Intersection Pharma & Consumer Goods", bio: "15+ years of combined experience across consulting and Food & Beverage, based in New York. She specializes in ambiguous research and innovation processes, and works deeply in CPG and increasingly at the intersection between pharma and CPG. Prior to consulting, she held roles at Ferrero and PepsiCo, bringing deep food and food tech industry experience.", linkedin: "https://www.linkedin.com/in/jessicayankell/" },
  { name: "Juan Roberts", title: "Europe Partner", focus: "Life Sciences, Competitive Intelligence, Business Development, M&A", bio: "10+ years of consulting experience supporting Life Sciences companies across Europe and LatAm. He focuses on Competitive Intelligence, advanced data analysis, and business development—often in M&A and strategic investment contexts.", linkedin: "https://www.linkedin.com/in/juan-roberts/" },
  { name: "Ignacio Quintana", title: "Principal", focus: "Pharma, Medtech, Life Sciences, Intersection Consumer Goods & Pharma", bio: "MD with 10+ years of consulting experience, focused on the intersection of Pharma and CPG. He supports complex strategic programs, including PMO leadership and expert advisory in high-impact decision processes.", linkedin: "https://www.linkedin.com/in/ignacio-quintana-29aa49144/" },
  { name: "Marco Decastri", title: "Manager Europe", focus: "Life Sciences, Competitive Intelligence, Business Development", bio: "Leads TheMindCo's Milan office with 7+ years of consulting experience focused on Pharma and MedTech. He supports strategy and execution programs across European and global contexts.", linkedin: "https://www.linkedin.com/in/marco-decastri/" },
];

export default function About() {
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
        title="About TheMindCo — 20 Years of Boutique Strategy Consulting"
        description="TheMindCo is a boutique research and strategy partner with 20+ years and 600+ projects across Life Sciences, Pharma, Biotech, MedTech, and Consumer Goods worldwide."
        canonical="/about"
      />
      <div id="section-about-hero">
        <PageHero
          title="About TheMindCo"
          subtitle="TheMindCo is a boutique research and strategy partner built to help teams make high-stakes decisions in complex markets. We connect science, human behavior, and business reality to produce clear, structured outputs—then stay close through execution when needed."
          backgroundImage={aboutHeroBg}
        />
      </div>

      {/* Metrics */}
      <section id="section-metrics" className="section-padding bg-primary">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-primary-foreground">
                  {m.number}
                  {m.plus && <span className="text-primary-foreground/70">+</span>}
                </div>
                <p className="mt-2 text-sm text-primary-foreground/80">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        id="section-values"
        className="section-padding relative overflow-hidden"
        style={{ backgroundImage: `url(${aboutValuesBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container-narrow relative z-10">
          <SectionHeading title="What drives us" className="text-primary-foreground" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 bg-background/70 rounded-lg border border-border">
                <h4 className="font-semibold mb-2">{v.title}</h4>
                <p className="text-sm text-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="section-team" className="section-padding">
        <div className="container-narrow">
          <SectionHeading title="Our Team" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="border border-border rounded-lg p-6">
                {/* Foto circular */}
                <div className="w-20 h-20 rounded-full overflow-hidden bg-muted mb-4">
                  <img
                    src={teamPhotos[p.name]}
                    alt={p.name}
                    className="w-full h-full object-cover object-top grayscale"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent && !parent.querySelector(".fallback-initial")) {
                        const div = document.createElement("div");
                        div.className = "fallback-initial w-full h-full flex items-center justify-center";
                        div.innerHTML = `<span style="font-size:1.5rem;font-weight:700;color:#aaa">${p.name[0]}</span>`;
                        parent.appendChild(div);
                      }
                    }}
                  />
                </div>
                {/* Info */}
                <h4 className="font-semibold">{p.name}</h4>
                <p className="text-sm text-muted-foreground">{p.title}</p>
                <p className="text-xs text-primary mt-1">{p.focus}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Expert Network — hidden until ready */}

      {/* Scroll arrow */}
      <button
        onClick={scrollToNext}
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce transition-opacity duration-500 ${
          showArrow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Next section"
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
