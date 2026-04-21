import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaTo?: string;
  children?: ReactNode;
}

const PageHero = ({ badge, title, description, ctaLabel, ctaTo, children }: PageHeroProps) => (
  <section className="relative isolate overflow-hidden text-primary-foreground py-20 md:py-28">
    <div className="absolute inset-0 -z-20">
      <img src={heroBg} alt="" className="h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(26,58,92,0.96)_20%,rgba(0,114,188,0.86)_58%,rgba(46,125,50,0.78)_100%)]" />
    </div>
    <div className="absolute -left-28 top-12 -z-10 h-80 w-80 rounded-full bg-edu-green/20 blur-[110px]" />
    <div className="absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-accent/25 blur-[95px]" />
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
      >
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/90 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-edu-green" />
            {badge}
          </span>
          <h1 className="mb-5 text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.02] text-primary-foreground">{title}</h1>
          <p className="mb-7 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">{description}</p>
          {ctaLabel && ctaTo && (
            <Link to={ctaTo}>
              <Button variant="hero" size="lg" className="rounded-full px-8">
                {ctaLabel} <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          )}
        </div>

        <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 backdrop-blur-lg lg:justify-self-end lg:max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">National Program</p>
          <p className="mt-3 text-sm text-primary-foreground/85 leading-relaxed">
            Structured screening, faster referrals, and measurable impact built for real public-health scale.
          </p>
        </div>
      </motion.div>
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default PageHero;
