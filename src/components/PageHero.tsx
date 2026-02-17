import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaTo?: string;
  children?: ReactNode;
}

const PageHero = ({ badge, title, description, ctaLabel, ctaTo, children }: PageHeroProps) => (
  <section className="hero-gradient text-primary-foreground py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-4">
          {badge}
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4">{title}</h1>
        <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mb-6">{description}</p>
        {ctaLabel && ctaTo && (
          <Link to={ctaTo}>
            <Button variant="hero" size="lg">
              {ctaLabel} <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        )}
        {children}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
