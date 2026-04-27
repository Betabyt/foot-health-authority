import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import {
  Shield,
  TrendingDown,
  Clock,
  Banknote,
  MapPin,
  BarChart3,
  Star,
  CheckCircle,
} from "lucide-react";
import impactInfographic from "@/assets/new assets/impact-infographic.png";
import theoryOfChange from "@/assets/new assets/theory-of-change.png";
import monitoringEvaluation from "@/assets/new assets/monitoring-evaluation.png";

const metrics = [
  {
    value: 92,
    suffix: "%",
    label: "Screening Coverage",
    icon: <Shield className="w-6 h-6" />,
    sub: "Up from <10% at baseline",
  },
  {
    value: 35,
    suffix: "%",
    label: "Reduction in Emergency Amputations",
    icon: <TrendingDown className="w-6 h-6" />,
    sub: "Gauteng pilot site 2024",
  },
  {
    value: 24,
    suffix: "hr",
    prefix: "<",
    label: "Referral Turnaround",
    icon: <Clock className="w-6 h-6" />,
    sub: "Down from 2–4 weeks",
  },
  {
    value: 4.5,
    suffix: "M",
    prefix: "R",
    label: "Estimated Cost Savings",
    icon: <Banknote className="w-6 h-6" />,
    decimals: 1,
    sub: "From prevented amputations",
  },
];

const pilotHighlights = [
  "Screening coverage increased from <10% to 92% — an 820% improvement",
  "Emergency amputations reduced by 35% at pilot site",
  "Nurse clinical confidence improved from 3/10 to 8/10",
  "Referral time improved from 2–4 weeks to <24 hours",
  "90% implementation rate at 1 month post-training",
  "Estimated R4.5M in savings from prevented amputations",
];

const economics = [
  {
    label: "Cost per nurse trained",
    value: "~R2,500",
    note: "Including all materials",
  },
  {
    label: "Cost per screening",
    value: "~R45",
    note: "Nurse time + consumables",
  },
  {
    label: "Cost per amputation (avoided)",
    value: "~R86,000",
    note: "EDU-FOOT prevention cost",
  },
  {
    label: "Cost per amputation (treated)",
    value: "~R500,000",
    note: "Acute + surgery + rehab",
  },
  {
    label: "Social Return on Investment",
    value: "~10:1",
    note: "Conservative Year 1 estimate",
  },
  { label: "Breakeven target", value: "Month 18", note: "From seed funding" },
];

const regions = [
  { name: "Western Cape", screenings: "12,400", coverage: "94%" },
  { name: "Gauteng", screenings: "18,200", coverage: "89%" },
  { name: "KwaZulu-Natal", screenings: "15,800", coverage: "91%" },
  { name: "Eastern Cape", screenings: "8,600", coverage: "87%" },
  { name: "Free State", screenings: "5,200", coverage: "93%" },
  { name: "Limpopo", screenings: "6,100", coverage: "85%" },
];

const Impact = () => (
  <div>
    <PageHero
      badge="Proven Results"
      title="Measurable Impact, Real Lives Saved"
      description="Every result below is drawn from the Gauteng proof-of-concept pilot. EDU-FOOT tracks every screening, referral, and outcome with full transparency."
    />

    {/* Key metrics */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading
          badge="Pilot Metrics"
          title="Gauteng pilot site (2024)"
          description="Internal audit results from the first EDU-FOOT implementation site."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#E8F4FD] text-[#0072BC] flex items-center justify-center mb-3">
                {m.icon}
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#0072BC] mb-1">
                <AnimatedCounter
                  end={m.value}
                  suffix={m.suffix}
                  prefix={m.prefix || ""}
                  decimals={m.decimals || 0}
                />
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {m.label}
              </div>
              <div className="text-xs text-muted-foreground">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Pilot highlights */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <SectionHeading
              badge="Proof of Concept"
              title="What the pilot demonstrated"
              centered={false}
            />
            <ul className="space-y-3 mt-4">
              {pilotHighlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#1A3A5C] p-7 text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-[#FFC107]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Nurse confidence
              </span>
            </div>
            <div className="flex flex-wrap items-end gap-4 mb-6">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-white/50">
                  3
                </div>
                <div className="text-xs text-white/50 mt-1">
                  Before EDU-FOOT
                </div>
              </div>
              <div className="text-white/40 text-2xl mb-2">→</div>
              <div className="text-center">
                <div className="font-display text-5xl font-bold text-[#4CAF50]">
                  8
                </div>
                <div className="text-xs text-white/70 mt-1">After EDU-FOOT</div>
              </div>
              <div className="text-white/40 mb-2">/ 10</div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Self-reported confidence in performing the full
              ASK–LOOK–FEEL–TEST–ACT protocol independently, measured 1 month
              post-training.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Unit economics */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading
          badge="Unit Economics"
          title="Prevention is dramatically cheaper than late care"
          description="Every rand invested in frontline nurse training generates approximately ten rands in avoided healthcare costs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {economics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`stat-card accent-bar-${i < 2 ? "green" : i < 4 ? "blue" : "green"}`}
            >
              <div className="font-display text-2xl font-bold text-[#0072BC] mb-1">
                {item.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-0.5">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground">{item.note}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Cost and SROI figures are programme estimates for planning purposes;
          to be validated with partner costing data during rollout.
        </p>
      </div>
    </section>

    {/* Impact infographic */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading
          badge="Impact Overview"
          title="EDU-FOOT impact at a glance"
          description="A visual summary of the programme's measurable outcomes and reach."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={impactInfographic}
              alt="EDU-FOOT impact infographic showing programme outcomes and reach"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Theory of change + M&E */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0072BC] bg-[#E8F4FD] px-3 py-1 rounded-full mb-2">
              Theory of Change
            </span>
            <h3 className="font-display font-bold text-xl text-foreground">
              How EDU-FOOT breaks the cycle
            </h3>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <img
              src={theoryOfChange}
              alt="EDU-FOOT theory of change diagram"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0072BC] bg-[#E8F4FD] px-3 py-1 rounded-full mb-2">
              Monitoring & Evaluation
            </span>
            <h3 className="font-display font-bold text-xl text-foreground">
              How we measure what matters
            </h3>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <img
              src={monitoringEvaluation}
              alt="EDU-FOOT monitoring and evaluation framework"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Regional data */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading
          badge="Regional Data"
          title="Provincial screening statistics"
        />
        <div className="max-w-3xl mx-auto">
          <div className="stat-card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <div className="min-w-[320px]">
                <div className="grid grid-cols-3 bg-[#0072BC] text-white text-sm font-semibold">
                  <div className="p-3 sm:p-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0" /> Province
                  </div>
                  <div className="p-3 sm:p-4 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 shrink-0" /> Screenings
                  </div>
                  <div className="p-3 sm:p-4">Coverage</div>
                </div>
                {regions.map((r, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-[#E8F4FD]/40"}`}
                  >
                    <div className="p-3 sm:p-4 font-medium text-foreground">
                      {r.name}
                    </div>
                    <div className="p-3 sm:p-4 text-muted-foreground">
                      {r.screenings}
                    </div>
                    <div className="p-3 sm:p-4 font-semibold text-[#4CAF50]">
                      {r.coverage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Impact;
