import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Global Pharma", href: "/industries/life-sciences/pharmaceutical-companies/global-pharma" },
  { label: "Regional Leaders", href: "/industries/life-sciences/pharmaceutical-companies/regional-leaders" },
  { label: "Biotech", href: "/industries/life-sciences/pharmaceutical-companies/biotech" },
];

export default function PharmaSubnav() {
  const { pathname } = useLocation();

  return (
    <div className="fixed top-[80px] left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1 bg-navbar border border-border/60 rounded-pill px-2 py-1.5 shadow-sm">
        {/* Parent link */}
        <Link
          to="/industries/life-sciences/pharmaceutical-companies"
          className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
        >
          Pharma &amp; Biotech
        </Link>

        {/* Divider */}
        <span className="w-px h-4 bg-border mx-1 shrink-0" />

        {/* Tabs */}
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              to={tab.href}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:text-primary hover:bg-black/5"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
