import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoSvg from "@/assets/logo.svg";
import { capabilities } from "@/data/capabilities";

const industries = [
  { label: "Consumer Goods", href: "/industries/cpg-food-beverage" },
  {
    label: "Life Sciences",
    href: "/industries/life-sciences",
    children: [
      {
        label: "Pharma & Biotech",
        href: "/industries/life-sciences/pharmaceutical-companies",
        children: [
          { label: "Global Pharma", href: "/industries/life-sciences/pharmaceutical-companies/global-pharma" },
          { label: "Regional Leaders", href: "/industries/life-sciences/pharmaceutical-companies/regional-leaders" },
          { label: "Biotech", href: "/industries/life-sciences/pharmaceutical-companies/biotech" },
        ],
      },
      { label: "MedTech, Packaging & Delivery Systems", href: "/industries/life-sciences/medtech-packaging-delivery-systems" },
      { label: "Hospitals", href: "/industries/life-sciences/hospitals-payers" },
      { label: "Payers", href: "/industries/life-sciences/payers" },
    ],
  },
  { label: "Other Industries", href: "/industries/other-industries" },
];

const capabilityItems = capabilities.map((c) => ({
  label: c.title,
  href: `/capabilities/${c.slug}`,
  summary: c.summary,
}));

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "#", children: industries },
  { label: "Capabilities", href: "/capabilities", mega: true },
  { label: "Insights", href: "/insights" },
  { label: "Events & Agenda", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/work-with-us" },
  { label: "Client Access", href: "https://www.mindco.app", external: true },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [capsMobileOpen, setCapsMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isIndustryActive = industries.some((i) => location.pathname.startsWith(i.href));
  const isCapabilityActive = location.pathname.startsWith("/capabilities");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-[90%] max-w-[1400px] bg-navbar rounded-pill flex items-center justify-between h-[3.75rem] px-6">
        {/* Logo + nombre */}
        <Link to="/" className="shrink-0 flex items-center gap-2.5">
          <img src={logoSvg} alt="TheMindCo" className="h-8 w-auto" />
          <span className="text-primary font-heading font-semibold text-base tracking-tight">TheMindCo</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            // Industries dropdown
            if (link.children) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen("industries")}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors ${
                      isIndustryActive
                        ? "text-foreground border-b-[3px] border-primary pb-0.5"
                        : "text-foreground hover:text-primary border-b-[3px] border-transparent pb-0.5"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {dropdownOpen === "industries" && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[280px]">
                        {link.children.map((child) => (
                          <div key={child.href}>
                            <Link
                              to={child.href}
                              className="block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                            >
                              {child.label}
                            </Link>
                            {child.children && (
                              <div className="pl-4">
                                {child.children.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    to={sub.href}
                                    className="block px-4 py-1.5 text-xs text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Capabilities mega-menu
            if (link.mega) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen("capabilities")}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors ${
                      isCapabilityActive
                        ? "text-foreground border-b-[3px] border-primary pb-0.5"
                        : "text-foreground hover:text-primary border-b-[3px] border-transparent pb-0.5"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {dropdownOpen === "capabilities" && (
                    <div className="absolute top-full -left-32 pt-2">
                      <div className="bg-background border border-border rounded-lg shadow-lg p-6 w-[640px]">
                        <div className="flex gap-8">
                          {/* Left col */}
                          <div className="w-[180px] shrink-0">
                            <p className="text-sm font-semibold mb-1">Capabilities</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">From signal to decision to execution.</p>
                          </div>
                          {/* Right cols */}
                          <div className="grid grid-cols-2 gap-x-6 gap-y-3 flex-1">
                            {capabilityItems.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="group block"
                              >
                                <p className="text-sm font-medium group-hover:text-primary transition-colors leading-snug">{item.label}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="mt-5 pt-4 border-t border-border">
                          <Link to="/capabilities" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                            View all capabilities →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // External links
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium uppercase tracking-wide transition-colors text-foreground hover:text-primary border-b-[3px] border-transparent pb-0.5"
                >
                  {link.label}
                </a>
              );
            }

            // Regular links
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-foreground border-b-[3px] border-primary pb-0.5"
                    : "text-foreground hover:text-primary border-b-[3px] border-transparent pb-0.5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileOpen(false)}>
              <X className="w-8 h-8 text-primary" />
            </button>
          </div>
          <div className="flex flex-col gap-6 px-8 mt-8 pb-12">
            <Link to="/" className="mb-4">
              <img src={logoSvg} alt="TheMindCo" className="h-12 w-auto" />
            </Link>
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="space-y-3">
                    <span className="text-2xl font-bold text-primary">{link.label}</span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block pl-4 text-lg text-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              if (link.mega) {
                return (
                  <div key={link.label} className="space-y-3">
                    <button
                      onClick={() => setCapsMobileOpen(!capsMobileOpen)}
                      className="flex items-center gap-2 text-2xl font-bold text-primary"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${capsMobileOpen ? "rotate-180" : ""}`} />
                    </button>
                    {capsMobileOpen && (
                      <div className="space-y-2 pl-4">
                        {capabilityItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block text-lg text-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          to="/capabilities"
                          className="block text-sm font-medium text-primary mt-2"
                          onClick={() => setMobileOpen(false)}
                        >
                          View all capabilities →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-2xl font-bold text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
