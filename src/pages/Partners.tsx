import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Heart, BarChart3, Leaf, Users, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tiers = [
  { name: "Bronze", investment: "From R50,000", benefits: ["Logo on website", "Annual impact report", "CSR recognition certificate"] },
  { name: "Silver", investment: "From R150,000", benefits: ["All Bronze benefits", "Sponsor a training cohort", "Quarterly impact updates", "Event co-branding"] },
  { name: "Gold", investment: "From R500,000", benefits: ["All Silver benefits", "Provincial programme sponsorship", "Board observer seat", "Custom impact dashboard", "Media co-coverage"] },
  { name: "Platinum", investment: "Custom", benefits: ["All Gold benefits", "National programme co-ownership", "Government engagement access", "Executive advisory role", "Full ESG reporting suite"] },
];

const reasons = [
  { icon: <Heart className="w-6 h-6" />, title: "Save Lives", desc: "Directly prevent amputations and improve quality of life for thousands." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Measurable Impact", desc: "Full transparency with quarterly dashboards and annual reports." },
  { icon: <Leaf className="w-6 h-6" />, title: "ESG Alignment", desc: "Strong alignment with SDG 3 (Good Health) and ESG social metrics." },
  { icon: <Users className="w-6 h-6" />, title: "CSR Integration", desc: "Turnkey CSR programme with professional co-branding and reporting." },
];

const Partners = () => (
  <div>
    <PageHero
      badge="Partnership & Sponsorship"
      title="Partner With EDU-FOOT™ NPC"
      description="Join South Africa's leading initiative in diabetic foot screening. Your partnership directly prevents amputations and saves lives."
    />
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Why Partner" title="Make a Measurable Difference" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">{r.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="section-padding section-gradient">
      <div className="container mx-auto">
        <SectionHeading badge="Sponsorship Tiers" title="Choose Your Level of Impact" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`stat-card ${i === 3 ? "border-accent ring-2 ring-accent/20" : ""}`}>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">{tier.name}</h3>
              <p className="text-sm text-accent font-semibold mb-4">{tier.investment}</p>
              <ul className="space-y-2">
                {tier.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="cta" size="lg">Request Partnership Proposal <ChevronRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Partners;
