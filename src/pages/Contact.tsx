import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/info@themindco.com", {
        method: "POST",
        body: data,
      });
      if (res.ok || res.type === "opaque") {
        setSent(true);
      } else {
        setError("Something went wrong. Please email us directly at info@themindco.com.");
      }
    } catch {
      setError("Couldn't send automatically. Please email us at info@themindco.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Contact TheMindCo — Start a Conversation"
        description="Reach out to TheMindCo. We'll connect you with the right partner based on your industry and strategic question within 24 hours."
        canonical="/contact"
      />
      <section className="min-h-screen bg-primary flex items-center pt-24">
        <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16">

          {/* Left side */}
          <div className="md:w-2/5">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Reach out to start a conversation. We'll route you to the right partner based on industry and topic.
            </p>
          </div>

          {/* Right side - form */}
          <div className="md:w-1/2 w-full">
            {sent ? (
              <div className="text-primary-foreground">
                <p className="text-2xl font-bold mb-2">Message sent.</p>
                <p className="text-primary-foreground/70 text-sm">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Hidden formsubmit config */}
                <input type="hidden" name="_subject" value="New contact message — TheMindCo" />
                <input type="hidden" name="_captcha" value="false" />

                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-white/15 text-primary-foreground placeholder:text-primary-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 border-none"
                  placeholder="Name"
                />
                <input
                  name="company"
                  type="text"
                  className="w-full px-5 py-3.5 rounded-full bg-white/15 text-primary-foreground placeholder:text-primary-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 border-none"
                  placeholder="Company"
                />
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-white/15 text-primary-foreground placeholder:text-primary-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 border-none"
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/15 text-primary-foreground placeholder:text-primary-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 resize-none border-none"
                  placeholder="Message"
                />

                {error && (
                  <p className="text-xs text-primary-foreground/70">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-10 h-10 rounded-full border-2 border-primary-foreground/60 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/10 transition-colors disabled:opacity-50"
                >
                  {sending ? "…" : "→"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
