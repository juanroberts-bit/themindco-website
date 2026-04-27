import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  text: string;
}

export function CaseStudyCard({ text }: CaseStudyCardProps) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow hover:border-primary/30">
      <div className="w-8 h-1 bg-primary rounded mb-4" />
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${className ?? ""}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
}

interface IndustryCardProps {
  title: string;
  href: string;
  description?: string;
  backgroundImage?: string;
}

export function IndustryCard({ title, href, description, backgroundImage }: IndustryCardProps) {
  return (
    <Link
      to={href}
      className="group block relative overflow-hidden bg-background border border-border rounded-lg p-8 hover:border-primary/40 hover:shadow-lg transition-all"
    >
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
      )}
      <div className="relative z-10">
        <h3 className={`text-xl font-semibold transition-colors ${backgroundImage ? "text-primary-foreground" : "group-hover:text-primary"}`}>
          {title}
        </h3>
        {description && (
          <p className={`mt-2 text-sm ${backgroundImage ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{description}</p>
        )}
        <span className="inline-block mt-4 text-sm font-medium text-primary">
          Learn more →
        </span>
      </div>
    </Link>
  );
}

interface LaneCardProps {
  title: string;
  description: string;
  placeholder?: string;
}

export function LaneCard({ title, description, placeholder }: LaneCardProps) {
  return (
    <div className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors bg-background">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      {placeholder && (
        <p className="mt-3 text-xs text-primary/70 italic">{placeholder}</p>
      )}
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
  dark = false,
  orange = false,
  backgroundImage,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
  orange?: boolean;
  backgroundImage?: string;
}) {
  if (backgroundImage) {
    return (
      <section
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
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
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }
  if (orange) {
    return (
      <section className="section-padding min-h-[50vh] flex items-center bg-primary">
        <div className="container-narrow">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed text-primary-foreground/80">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      className={`section-padding pt-32 ${
        dark ? "bg-hero text-hero-foreground" : "bg-section-alt"
      }`}
    >
      <div className="container-narrow">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-5 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed ${dark ? "text-hero-foreground/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
