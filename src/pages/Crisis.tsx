import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, DollarSign, HeartCrack, Clock, Wrench, ArrowUpRight } from "lucide-react";

const data = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "Rising Prevalence", text: "South Africa has approximately 4.6 million diagnosed diabetics — ~12.7% adult prevalence. Gauteng alone has the highest provincial rate at ~15.2%. The number is projected to double by 2040 without urgent intervention." },
  { icon: <HeartCrack className="w-6 h-6" />, title: "Preventable Amputations", text: "Over 27,000 diabetes-related amputations occur annually — 84% preceded by ulcers detectable with basic screening. At Leratong Hospital, 96% of patients admitted with diabetic foot sepsis proceed to amputation, and over 70% of those are major amputations above the ankle. Post-amputation mortality reaches ~19% within 4 years." },
  { icon: <DollarSign className="w-6 h-6" />, title: "Economic Burden", text: "A single major amputation costs the public sector over R500,000 in acute and rehabilitation care — excluding lost productivity. Treatment can consume 5+ years of household income for low-income families. At 27,000 amputations annually, direct costs may exceed R13.5 billion." },
  { icon: <AlertTriangle className="w-6 h-6" />, title: "Healthcare Gaps", text: "Only 12% of PHC clinics have monofilaments for neuropathy screening. Less than 0.5 podiatrists serve every 100,000 people in Gauteng's public sector. An estimated 73% of neuropathy cases are missed — leaving high-risk feet undetected until complications are severe and costly." },
];

const gaps = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Time Pressure",
    colour: "border-edu-blue",
    iconBg: "bg-[#E8F4FD] text-[#0072BC]",
    items: ["7–10 minute consultations", "Foot check is routinely skipped", "No quick, repeatable workflow"],
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Tool Constraints",
    colour: "border-risk-moderate",
    iconBg: "bg-yellow-50 text-yellow-600",
    items: ["10g monofilaments unavailable in most PHC facilities", "No standard documentation forms", "No visual guides or laminated protocol cards"],
  },
  {
    icon: <ArrowUpRight className="w-7 h-7" />,
    title: "No Escalation Clarity",
    colour: "border-risk-urgent",
    iconBg: "bg-red-50 text-red-600",
    items: ["Inconsistent and incomplete referrals", "Weeks-long delays to specialist care", "Poor documentation and tracking"],
  },
];

const Crisis = () => (
  <div>
    <PageHero
      badge="Understanding the Crisis"
      title="A Preventable National Health Emergency"
      description="Diabetes-related amputations are devastating communities across South Africa — yet the majority are entirely preventable with early screening and trained frontline nurses."
    />

    {/* Overview cards */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="The Problem" title="Four dimensions of a preventable crisis" />
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card flex gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E8F4FD] text-[#0072BC] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Key stats */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="Key Statistics" title="The numbers behind the crisis" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: 4.6, suffix: "M", label: "Diagnosed Diabetics", decimals: 1 },
            { value: 27000, suffix: "+", label: "Annual Amputations" },
            { value: 84, suffix: "%", label: "Preceded by Ulcers" },
            { value: 13.5, suffix: "B", prefix: "R", label: "Annual Econ. Burden", decimals: 1 },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="stat-card text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-[#0072BC] mb-2">
                <AnimatedCounter end={s.value} suffix={s.suffix} prefix={s.prefix || ""} decimals={s.decimals || 0} />
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What nurses face — the gap */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading
          badge="The Gap"
          title="What nurses face in a typical PHC consult"
          description="Training, tools, and follow-up support are missing — leaving frontline nurses unable to screen consistently even when they want to."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {gaps.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`stat-card border-t-4 ${g.colour}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${g.iconBg}`}>
                {g.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Cost callout */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-[radial-gradient(circle_at_15%_15%,#0072BC_0%,#1A3A5C_60%,#0d1f3b_100%)] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">The Cost of Inaction</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Prevention is 200× cheaper than amputation
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Screening a diabetic patient costs approximately R45. Treating a major amputation costs R430,000–R620,000.
                EDU-FOOT's model achieves a Social Return on Investment of approximately <strong className="text-white">10:1</strong> —
                every rand invested prevents ten rands of public healthcare cost.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Cost per screening", value: "R45" },
                { label: "Cost of amputation", value: "R500K+" },
                { label: "SROI target", value: "10:1" },
                { label: "Neuropathy cases missed", value: "73%" },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/8 p-5 text-center backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Crisis;
