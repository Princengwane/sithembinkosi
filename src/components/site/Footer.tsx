import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logoIcon from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)", backgroundColor: "rgba(243,237,229,0.4)" }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden" style={{ backgroundColor: "var(--primary)" }}>
                <img
                  src={logoIcon}
                  alt="Sithembinkosi Medical Centre Logo"
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                SITHEMBINKOSI<br /> MEDICAL CENTRE
              </span>
            </div>
            <p className="mt-4 text-sm italic" style={{ color: "var(--muted-foreground)" }}>
              In The Lord We Trust, All Things Are Possible.
              <br />
              Practice no: 1197118
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Contact</h4>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "var(--primary)" }} />
                +27 67 404 9079
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "var(--primary)" }} />
                sithembinkosimedical@hotmail.com
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.instagram.com/sithembinkosi_medicalcentre?igsh=MWdlZTI1cDZ2MWE4bw=="
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                style={{ color: "var(--muted-foreground)" }}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@sithembinkosi_medicalc?_r=1&_t=ZS-96MP4EnYCCy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                style={{ color: "var(--muted-foreground)" }}
              >
                <FaTiktok className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1EcTK22Dcu/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                style={{ color: "var(--muted-foreground)" }}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Location</h4>
            <p className="mt-4 flex items-start gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "var(--primary)" }} />
              24445 Baragwanath Road, Diepkloof, Zone 5, Soweto
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t pt-6 text-xs sm:flex-row" style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
          <span>© {new Date().getFullYear()} Sithembinkosi Medical Centre. All rights reserved.</span>
          {/* Center */}
          <a
          href="https://ngwanexsolutions.co.za/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-primary transition-colors"
          >
            Built by <strong>NgwaneXSolutions</strong>
            </a>
          {/* Right */}
          <div className="flex items-center gap-4">
            <Link
            to="/privacy"
            className="hover:text-primary transition-colors"
            >
              Privacy Policy
              </Link>
              
              <Link
              to="/terms"
              className="hover:text-primary transition-colors"
              >
                Terms of Use
                </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
