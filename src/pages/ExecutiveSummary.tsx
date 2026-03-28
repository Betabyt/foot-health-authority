import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import { Target, TrendingUp, DollarSign, Shield, Rocket, CheckCircle, ChevronRight, Quote } from "lucide-react";
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

const financials = [
  { year: "Year 1", revenue: "R800K", expenses: "R840K", nurses: "300", sites: "30", colour: "border-[#0072BC]" },
  { year: "Year 2", revenue: "R2.5M", expenses: "R2.1M", nurses: "1,000", sites: "100", colour: "border-[#4CAF50]" },
  { year: "Year 3–5", revenue: "R5M+", expenses: "R3.8M", nurses: "3,000+", sites: "300+", colour: "border-[#FF9800]" },
];

const useOfFunds = [
  { label: "Training Delivery", pct: "40%", amount: "R320K", colour: "bg-[#0072BC]", desc: "Facilitator fees, venue, refreshments" },
  { label: "Digital Platform", pct: "25%", amount: "R200K", colour: "bg-[#4CAF50]", desc: "LMS, assessment tools, WhatsApp integration" },
  { label: "Clinic Toolkits", pct: "20%", amount: "R160K", colour: "bg-[#FFC107]", desc: "Monofilaments, protocol cards, referral forms" },
  { label: "M&E Systems", pct: "10%", amount: "R80K", colour: "bg-[#FF9800]", desc: "Outcome tracking, audit, dashboards" },
  { label: "Overhead", pct: "5%", amount: "R40K", colour: "bg-[#999999]", desc: "Governance, compliance, reporting" },
];

const marketStats = [
  { value: 15000, suffix: "+", label: "PHC Nurses — Target Market" },
  { value: 3500, suffix: "+", label: "Public Health Facilities" },
  { value: 4.6, suffix: "M", decimals: 1, label: "Diagnosed Diabetics in SA" },
  { value: 500, suffix: "M+", prefix: "R", label: "Annual Training Market" },
];

const why = [
  { icon: <Target className="w-6 h-6" />, title: "Proven pilot results", text: "Leratong Hospital 2024: 92% screening coverage, 35% fewer amputations, R4.5M in estimated savings — from a single cohort." },
  { icon: <Shield className="w-6 h-6" />, title: "Government-aligned", text: "Designed around NHI readiness, PHC re-engineering, and the NCD Strategic Plan 2022–2027. Procurement pathways are already mapped." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "10:1 Social ROI", text: "Every R1 invested in trained nurses prevents R10 in public healthcare costs. No other NCD intervention delivers comparable returns at primary care level." },
  { icon: <Rocket className="w-6 h-6" />, title: "Execution-ready", text: "Curriculum validated, OSCE framework built, pilot conducted, SANC accreditation in progress. Funding is the only remaining unlock to scale." },
];

const ExecutiveSummary = () => (
  <div>
    <PageHero
      badge="Executive Overview"
      title="EDU-FOOT™ NPC Executive Summary"
      description="Seed investment opportunity — R800,000 to train 300 nurses, equip 30 clinics, and prevent 50+ amputations in Year 1."
    />

    {/* The ask */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl bg-[radial-gradient(circle_at_15%_15%,#0072BC_0%,#1A3A5C_60%,#0d1f3b_100%)] p-8 md:p-12 mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">Seed Funding Ask</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                R800,000 <span className="text-white/60 text-2xl font-normal">/ $43,000</span>
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                One-time seed round to fund Year 1 operations: 300 nurses trained, 30 clinics equipped, and a self-sustaining revenue model operational by Month 18. Government contracts cover ongoing costs from Year 2.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">Request Full Investment Brief <ChevronRight className="w-5 h-5" /></Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Target nurses — Year 1", value: "300" },
                { label: "Clinics equipped", value: "30" },
                { label: "Amputations prevented", value: "50+" },
                { label: "Breakeven timeline", value: "Month 18" },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/8 p-5 text-center backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why invest */}
        <SectionHeading badge="Investment Case" title="Why EDU-FOOT™ is fundable now" />
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
        <SectionHeading badge="Market Opportunity" title="Massive, underserved, government-backed" description="15,000+ PHC nurses represent the training market. 3,500+ public facilities represent the procurement pipeline." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketStats.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-[#0072BC] mb-1">
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
        <SectionHeading badge="Year 1 Targets" title="What R800,000 achieves" />
        <div className="stat-card max-w-xl mx-auto mb-16">
          <ul className="space-y-3">
            {year1Targets.map((t, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                {t}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Use of funds */}
        <SectionHeading badge="Use of Funds" title="R800,000 seed allocation" description="Funds are deployed against the four core Year 1 workstreams, with minimal overhead." />
        <div className="stat-card max-w-2xl mx-auto mb-16">
          <div className="space-y-4">
            {useOfFunds.map((f, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <div>
                    <span className="text-foreground font-medium">{f.label}</span>
                    <span className="text-muted-foreground text-xs ml-2">— {f.desc}</span>
                  </div>
                  <span className="text-muted-foreground font-semibold shrink-0 ml-4">{f.amount}</span>
                </div>
                <div className="h-2.5 rounded-full bg-[#F5F5F5] overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${f.colour}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: f.pct }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Financial projections */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Financial Projections" title="Path to sustainability" description="Government contracts anchor Year 2 revenue. By Year 3, EDU-FOOT operates without donor dependency." />
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {financials.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`stat-card border-t-4 ${f.colour}`}>
              <div className="text-xs font-bold text-[#0072BC] uppercase tracking-wider mb-3">{f.year}</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenue</span>
                  <span className="font-semibold text-[#4CAF50]">{f.revenue}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Expenses</span>
                  <span className="font-semibold text-foreground">{f.expenses}</span>
                </div>
                <div className="border-t border-border pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Nurses trained</span><span className="font-medium text-foreground">{f.nurses}</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Active sites</span><span className="font-medium text-foreground">{f.sites}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto">
          Revenue model: government contracts (~R2,500/nurse), private training (~R3,500/nurse), foundation grants, and corporate CSR. Year 1 deficit covered by seed funding.
        </p>
      </div>
    </section>

    {/* Founder quote */}
    <section className="section-padding bg-background">
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
            <Button variant="cta" size="lg">Request Full Investment Brief <ChevronRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ExecutiveSummary;
