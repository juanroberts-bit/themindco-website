import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import heroBg from "@/assets/hero-bg-1.jpg";
import SEOHead from "@/components/SEOHead";

const MAX_MB = 5;
const MAX_BYTES = MAX_MB * 1024 * 1024;
const ACCEPTED = [".pdf", ".doc", ".docx", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

export default function WorkWithUs() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFile = (f: File | null) => {
    setError("");
    if (!f) return;
    const ext = f.name.split(".").pop()?.toLowerCase();
    if (!["pdf", "doc", "docx"].includes(ext || "")) {
      setError("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      return;
    }
    if (f.size > MAX_BYTES) {
      setError(`File exceeds ${MAX_MB} MB. Please upload a smaller file.`);
      return;
    }
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) { setError("Please attach your CV."); return; }
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/info@themindco.com", {
        method: "POST",
        body: data,
      });
      if (res.ok || res.type === "opaque") {
        setSent(true);
      } else {
        setError("Something went wrong. Please email your CV directly to info@themindco.com.");
      }
    } catch {
      // Network / CORS fallback — guide user to email directly
      setError("Couldn't send automatically. Please email your CV to info@themindco.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Careers — Work with TheMindCo"
        description="Join a tight team of strategists, researchers, and operators working on hard questions for leading Life Sciences and Consumer Goods companies. Send us your CV."
        canonical="/work-with-us"
        schema={{"@context":"https://schema.org","@type":"JobPosting","title":"Consultant","hiringOrganization":{"@type":"Organization","name":"TheMindCo","sameAs":"https://www.themindco.com"},"jobLocationType":"TELECOMMUTE","employmentType":"FULL_TIME","description":"Work on complex research, strategy, and execution projects across Consumer Goods, Life Sciences, and complex B2B markets."}}
      />
      {/* Hero — full screen */}
      <section
        className="relative min-h-screen flex flex-col items-start justify-center pt-24 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(15,15,16,0.94) 55%, rgba(15,15,16,0.55) 100%)" }}
        />
        <div className="container-narrow relative z-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — headline */}
          <div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-primary/80 mb-6">Careers</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-primary-foreground">
              Work<br />with us
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl max-w-md leading-relaxed text-primary-foreground/70">
              We're a tight team of strategists, researchers, and operators. If you do sharp work on hard questions and care about impact, we'd like to hear from you.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/50 max-w-sm leading-relaxed">
              Drop your CV below — PDF or Word, max {MAX_MB} MB. We'll be in touch.
            </p>
          </div>

          {/* Right — upload form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5d18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground">CV received</h3>
                <p className="text-sm text-primary-foreground/60">Thanks — we'll review it and be in touch if there's a fit.</p>
                <Link to="/" className="mt-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                  Back to home →
                </Link>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="flex flex-col gap-5"
              >
                {/* Hidden formsubmit config */}
                <input type="hidden" name="_subject" value="New CV application — TheMindCo" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-primary/60">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/50 transition-colors [&:-webkit-autofill]:![box-shadow:inset_0_0_0_1000px_rgba(255,255,255,0.1)] [&:-webkit-autofill]:![-webkit-text-fill-color:white]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-primary/60">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/50 transition-colors [&:-webkit-autofill]:![box-shadow:inset_0_0_0_1000px_rgba(255,255,255,0.1)] [&:-webkit-autofill]:![-webkit-text-fill-color:white]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-primary/60">CV / Resume</label>
                  <div
                    onClick={() => fileRef.current?.click()}
                    className={`w-full px-4 py-5 rounded-xl border-2 border-dashed cursor-pointer transition-colors flex flex-col items-center gap-2 ${
                      file ? "border-primary/50 bg-primary/5" : "border-white/15 bg-white/4 hover:border-primary/30"
                    }`}
                  >
                    {file ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5d18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                        </svg>
                        <span className="text-sm text-primary font-medium">{file.name}</span>
                        <span className="text-xs text-primary-foreground/40">{(file.size / 1024 / 1024).toFixed(1)} MB · Click to change</span>
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
                          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                        </svg>
                        <span className="text-sm text-primary-foreground/50">Click to upload your CV</span>
                        <span className="text-xs text-primary-foreground/30">PDF or Word · max {MAX_MB} MB</span>
                      </>
                    )}
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 leading-relaxed">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-sm disabled:opacity-50"
                >
                  {sending ? "Sending…" : "Send application"}
                </button>

                <p className="text-[10px] text-primary-foreground/30 text-center leading-relaxed">
                  Your CV will be sent to info@themindco.com and reviewed in confidence.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
