import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Our Team" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden" style={{ backgroundColor: "var(--primary)" }}>
            <img
              src={logoIcon}
              alt="Sithembinkosi Medical Centre Logo"
              className="h-9 w-9 object-contain"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>SITHEMBINKOSI</span>
            <span className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>Medical Centre</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? "var(--primary-soft)" : undefined,
                color: isActive ? "var(--primary)" : "var(--muted-foreground)",
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          style={{ color: "var(--foreground)" }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t md:hidden" style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}>
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium"
                style={{ color: "var(--foreground)" }}
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 w-full rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
