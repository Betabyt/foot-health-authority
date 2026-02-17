import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, DollarSign, HeartCrack } from "lucide-react";

const data = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "Rising Prevalence", text: "South Africa has one of Africa's highest diabetes rates, with 4.6 million diagnosed cases and millions more undiagnosed. The number is projected to double by 2040." },
  { icon: <HeartCrack className="w-6 h-6" />, title: "Preventable Amputations", text: "Over 27,000 diabetes-related amputations occur annually. Up to 84% are preceded by foot ulcers that could have been detected and treated with basic screening." },
  { icon: <DollarSign className="w-6 h-6" />, title: "Economic Burden", text: "Diabetes-related complications cost the South African healthcare system R13.5 billion annually. Amputations are among the most costly interventions." },
  { icon: <AlertTriangle className="w-6 h-6" />, title: "Healthcare Gaps", text: "Primary healthcare nurses — the frontline — lack standardised training in diabetic foot assessment. Without structured protocols, high-risk feet go undetected." },
];

const Crisis = () => (
  <div>
    <PageHero
      badge="Understanding the Crisis"
      title="A Preventable National Health Emergency"
      description="Diabetes-related amputations are devastating communities, yet the majority are entirely preventable with early screening."
    />
    <section className="section-padding bg-background">
      <div className="container mx-auto">
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
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
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
    <section className="section-padding section-gradient">
      <div className="container mx-auto">
        <SectionHeading badge="Key Statistics" title="The Numbers Behind the Crisis" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: 4.6, suffix: "M", label: "Diagnosed Diabetics", decimals: 1 },
            { value: 27000, suffix: "+", label: "Annual Amputations" },
            { value: 84, suffix: "%", label: "Preventable Ulcers" },
            { value: 13.5, suffix: "B", prefix: "R", label: "Annual Cost", decimals: 1 },
          ].map((s, i) => (
            <div key={i} className="stat-card text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                <AnimatedCounter end={s.value} suffix={s.suffix} prefix={s.prefix || ""} decimals={s.decimals || 0} />
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Crisis;
