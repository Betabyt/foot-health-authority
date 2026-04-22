import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="EDU-FOOT Logo" className="w-10 h-10 rounded-lg object-contain" />
              <div>
                <span className="font-display font-bold text-lg leading-none">EDU-FOOT™ NPC</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              South Africa's national authority on diabetic foot screening and amputation prevention.
            </p>
            <p className="text-primary-foreground/40 text-xs mt-2 leading-relaxed">
              Every Diabetic Ulcer Footcare-Oriented Outcome Training
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Platform</h4>
            <ul className="space-y-2">
              {[
                { to: "/crisis", label: "The Crisis" },
                { to: "/protocol", label: "The Protocol" },
                { to: "/impact", label: "Impact" },
                { to: "/training", label: "Training" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Engage</h4>
            <ul className="space-y-2">
              {[
                { to: "/partners", label: "Partner With Us" },
                { to: "/executive-summary", label: "Executive Summary" },
                { to: "/resources", label: "Resources" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>info@edufoot.org</li>
              <li>sponsorship@edufoot.org</li>
              <li>+27 74 463 9939</li>
              <li>Princeton, The Campus, 152 Van Dalen Road South, Ruimsig, Roodepoort, 1724</li>
              <li className="pt-2 text-xs text-primary-foreground/40">
                CIPC Reg. No. 2026/045897/08
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} EDU-FOOT™ NPC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <Link to="/resources" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</Link>
            <Link to="/resources" className="hover:text-primary-foreground/70 transition-colors">Terms of Use</Link>
            <Link to="/resources" className="hover:text-primary-foreground/70 transition-colors">POPIA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
