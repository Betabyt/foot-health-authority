import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Target, TrendingUp, DollarSign, Shield, Rocket, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sections = [
  { icon: <Target className="w-6 h-6" />, title: "Mission", text: "To eliminate preventable diabetes-related amputations in South Africa by empowering primary healthcare nurses with standardised foot screening competencies." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Strategy", text: "Deploy competency-based training at scale across all nine provinces, partnering with public health facilities, corporate sponsors, and government departments." },
  { icon: <DollarSign className="w-6 h-6" />, title: "Financial Efficiency", text: "Cost per screening: R45. Cost of prevented amputation: R350,000+. Every R1 invested in EDU-FOOT screening generates R7.8 in healthcare cost savings." },
  { icon: <Shield className="w-6 h-6" />, title: "Governance", text: "Non-Profit Company (NPC) governed by an independent board with clinical, financial, and public health expertise. Full compliance with Companies Act and NPO Act." },
  { icon: <Rocket className="w-6 h-6" />, title: "Scale Roadmap", text: "Phase 1: Western Cape & Gauteng (Complete). Phase 2: KZN, Eastern Cape, Free State (2025). Phase 3: National coverage across all provinces (2026-2027)." },
  { icon: <Leaf className="w-6 h-6" />, title: "Sustainability Model", text: "Blended funding: corporate sponsorship (40%), government grants (35%), training fees (15%), research partnerships (10%)." },
];

const ExecutiveSummary = () => (
  <div>
    <PageHero
      badge="Executive Overview"
      title="EDU-FOOT™ NPC Executive Summary"
      description="A comprehensive overview for investors, government agencies, and strategic partners."
    />
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="stat-card flex gap-5 items-start">
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">{s.icon}</div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact"><Button variant="cta" size="lg">Request Full Brief</Button></Link>
        </div>
      </div>
    </section>
  </div>
);

export default ExecutiveSummary;
