import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries/life-sciences" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Insights", href: "/insights" },
  { label: "Events & Agenda", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <img src={logoImg} alt="TheMindCo" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Buenos Aires · New York · Milan
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} TheMindCo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
