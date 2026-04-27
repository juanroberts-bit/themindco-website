import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import eventsHero from "@/assets/events-hero.webp";
import SEOHead from "@/components/SEOHead";
import { useEvents, type SanityEvent } from "@/hooks/useEvents";

const SECTION_IDS = ["section-hero", "section-events"];

function EventSkeleton() {
  return (
    <div className="rounded-xl border border-border p-6 bg-white animate-pulse">
      <div className="h-5 w-20 bg-muted rounded-full mb-4" />
      <div className="h-6 w-3/4 bg-muted rounded mb-3" />
      <div className="flex gap-4 mb-3">
        <div className="h-4 w-28 bg-muted rounded" />
        <div className="h-4 w-28 bg-muted rounded" />
      </div>
      <div className="h-4 w-full bg-muted rounded mb-2" />
      <div className="h-4 w-2/3 bg-muted rounded" />
    </div>
  );
}

export default function Events() {
  const { data: events, isLoading, isError } = useEvents();

  const sortedEvents: SanityEvent[] = (events ?? [])
    .slice()
    .sort((a, b) => a.sortKey - b.sortKey || (a.type === "hosting" ? -1 : 1));

  const nextEvent = sortedEvents[0];

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
        title="Events & Agenda — Where You'll Find TheMindCo"
        description="TheMindCo events and conference agenda for 2026. Alumni gatherings, CPHI Milan, and more across New York, London, and Europe."
        canonical="/events"
      />
      {/* Hero */}
      <section
        id="section-hero"
        className="relative min-h-[55vh] flex items-end pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${eventsHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(15,15,16,0.88) 45%, rgba(15,15,16,0.38) 100%)" }}
        />
        <div className="container-narrow relative z-10">
          <p className="text-[10px] font-mono tracking-widest uppercase text-primary/80 mb-4">Agenda 2026</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-foreground">
            Events &amp; Agenda
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-primary-foreground/80">
            Where you'll find us — and what we're hosting.
          </p>
          <div className="flex items-center gap-6 mt-6 pt-5 border-t border-white/15">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-mono text-primary-foreground/70">We're hosting</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-xs font-mono text-primary-foreground/70">We're attending</span>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="section-events" className="section-padding bg-[#f8f7f5]">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Events list */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {isLoading && (
                <>
                  <EventSkeleton />
                  <EventSkeleton />
                  <EventSkeleton />
                </>
              )}

              {isError && (
                <p className="text-sm text-muted-foreground py-8">Could not load events. Please try again later.</p>
              )}

              {!isLoading && !isError && sortedEvents.length === 0 && (
                <p className="text-sm text-muted-foreground py-8">No events scheduled yet — check back soon.</p>
              )}

              {!isLoading && !isError && sortedEvents.map((event) => {
                const isHosting = event.type === "hosting";
                return (
                  <div
                    key={event._id}
                    className={`group rounded-xl border p-6 bg-white transition-all hover:shadow-sm ${
                      isHosting
                        ? "border-primary/30 hover:border-primary/60"
                        : "border-border hover:border-border/60"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4 gap-3">
                      <span
                        className={`inline-block text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border shrink-0 ${
                          isHosting
                            ? "bg-primary/8 border-primary/30 text-primary"
                            : "bg-[#f8f7f5] border-border text-muted-foreground"
                        }`}
                      >
                        {isHosting ? "Hosting" : "Attending"}
                      </span>
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 leading-snug group-hover:text-primary transition-colors">{event.title}</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary/50" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5 text-primary/50" />
                        {event.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Next up — sticky sidebar */}
            <div className="lg:col-span-1">
              {isLoading && (
                <div className="rounded-xl border border-border bg-white p-6 animate-pulse">
                  <div className="h-3 w-14 bg-muted rounded mb-5" />
                  <div className="h-4 w-20 bg-muted rounded-full mb-4" />
                  <div className="h-6 w-3/4 bg-muted rounded mb-3" />
                  <div className="h-4 w-28 bg-muted rounded mb-2" />
                  <div className="h-4 w-24 bg-muted rounded mb-4" />
                  <div className="h-4 w-full bg-muted rounded mb-2" />
                  <div className="h-10 w-full bg-muted rounded-full mt-5" />
                </div>
              )}

              {!isLoading && nextEvent && (
                <div className="rounded-xl border border-primary/30 bg-white p-6 lg:sticky lg:top-28">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-primary mb-5">Next up</p>
                  <span
                    className={`inline-block text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border mb-4 ${
                      nextEvent.type === "hosting"
                        ? "bg-primary/8 border-primary/30 text-primary"
                        : "bg-[#f8f7f5] border-border text-muted-foreground"
                    }`}
                  >
                    {nextEvent.type === "hosting" ? "Hosting" : "Attending"}
                  </span>
                  <h4 className="text-lg font-semibold mb-3 leading-snug">{nextEvent.title}</h4>
                  <div className="flex flex-col gap-1.5 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary/60" />
                      {nextEvent.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <CalendarDays className="w-3.5 h-3.5 text-primary/60" />
                      {nextEvent.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{nextEvent.description}</p>
                </div>
              )}
            </div>
          </div>

          <p className="mt-16 text-xs text-muted-foreground/50 text-center tracking-wide">
            More events to be announced — check back soon.
          </p>
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
