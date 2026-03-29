import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import { Target, TrendingUp, Shield, Rocket, CheckCircle, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const year1Targets = [
  "300 nurses trained and certified",
  "30 clinics equipped with full EDU-FOOT toolkit",
  "10,000+ diabetic foot screenings completed",
  "50+ amputations prevented",
  "SANC CPD accreditation secured",
  "3 provincial government contracts active",
];

const marketStats = [
  { value: 15000, suffix: "+", label: "PHC Nurses — Target Market" },
  { value: 3500, suffix: "+", label: "Public Health Facilities" },
  { value: 4.6, suffix: "M", decimals: 1, label: "Diagnosed Diabetics in SA" },
  { value: 27000, suffix: "+", label: "Annual Amputations" },
];

const why = [
  { icon: <Target className="w-6 h-6" />, title: "Proven pilot results", text: "Leratong Hospital 2024: 92% screening coverage, 35% fewer amputations, and significant cost savings — from a single trained cohort." },
  { icon: <Shield className="w-6 h-6" />, title: "Government-aligned", text: "Designed around NHI readiness, PHC re-engineering, and the NCD Strategic Plan 2022–2027. Procurement pathways are already mapped." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "High social return", text: "Every nurse trained generates substantial avoided healthcare costs. No other NCD intervention delivers comparable preventive returns at primary care level." },
  { icon: <Rocket className="w-6 h-6" />, title: "Execution-ready", text: "Curriculum validated, OSCE framework built, pilot conducted, SANC accreditation in progress. The programme is ready to scale." },
];

const ExecutiveSummary = () => (
  <div>
    <PageHero
      badge="Executive Overview"
      title="EDU-FOOT™ NPC Executive Summary"
      description="A comprehensive overview for government agencies, health institutions, and strategic partners committed to eliminating preventable amputations in South Africa."
    />

    {/* Why partner */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="The Case" title="Why EDU-FOOT™ matters now" description="Four reasons the programme is ready for scale — backed by pilot evidence and aligned with national health priorities." />
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {why.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#E8F4FD] text-[#0072BC] flex items-center justify-center shrink-0">{w.icon}</div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{w.title}</h4>
                <p className="text-sm text-muted-foreground">{w.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Market opportunity */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Market Opportunity" title="Massive, underserved, government-backed" description="15,000+ PHC nurses represent the training market. 3,500+ public facilities represent the scale opportunity." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketStats.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#0072BC] mb-1">
                <AnimatedCounter end={m.value} suffix={m.suffix} prefix={m.prefix || ""} decimals={m.decimals || 0} />
              </div>
              <div className="text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Year 1 targets */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Year 1 Targets" title="What the programme achieves" description="Concrete, measurable outcomes for the first year of scaled deployment." />
        <div className="stat-card max-w-xl mx-auto">
          <ul className="space-y-3">
            {year1Targets.map((t, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                {t}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Founder quote */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-2xl bg-[#1A3A5C] p-8 md:p-12 text-center">
          <Quote className="w-8 h-8 text-[#4CAF50] mx-auto mb-6" />
          <p className="font-display text-lg md:text-xl font-medium text-white leading-relaxed mb-6">
            "We are not building another awareness campaign. We are building the infrastructure for nurses to act — every patient, every visit, with a five-minute protocol that saves limbs. The pilot proved it works. Now we need to scale it."
          </p>
          <div className="text-sm text-white/70">
            <span className="font-semibold text-white">Mazizi Njokweni</span> — Founder & Executive Director, EDU-FOOT™ NPC
          </div>
        </motion.div>
        <div className="text-center mt-10">
          <Link to="/contact">
            <Button variant="cta" size="lg">Request Full Brief <ChevronRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ExecutiveSummary;
