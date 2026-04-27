import { Link, useLocation } from "react-router-dom";

const subPages = [
  { label: "Pharma & Biotech", href: "/industries/life-sciences/pharmaceutical-companies" },
  { label: "MedTech & Packaging", href: "/industries/life-sciences/medtech-packaging-delivery-systems" },
  { label: "Hospitals & Payers", href: "/industries/life-sciences/hospitals-payers" },
];

export default function LifeSciencesSubNav() {
  const location = useLocation();

  return (
    <div className="bg-section-alt border-b border-border pt-20 pb-0">
      <div className="container-narrow">
        <nav className="flex items-center gap-6 -mb-px">
          <Link
            to="/industries/life-sciences"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors pr-6 border-r border-border pb-3 whitespace-nowrap"
          >
            Life Sciences
          </Link>
          {subPages.map((page) => {
            const isActive = location.pathname === page.href;
            return (
              <Link
                key={page.href}
                to={page.href}
                className={`text-sm font-medium pb-3 border-b-[3px] transition-colors whitespace-nowrap ${
                  isActive
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
