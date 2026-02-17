import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import { Shield, TrendingDown, Clock, Banknote, MapPin, BarChart3 } from "lucide-react";

const metrics = [
  { value: 92, suffix: "%", label: "Screening Coverage", icon: <Shield className="w-6 h-6" />, color: "text-accent" },
  { value: 35, suffix: "%", label: "Reduction in Amputations", icon: <TrendingDown className="w-6 h-6" />, color: "text-accent" },
  { value: 24, suffix: "hr", prefix: "<", label: "Referral Turnaround", icon: <Clock className="w-6 h-6" />, color: "text-accent" },
  { value: 4.5, suffix: "M", prefix: "R", label: "Cost Savings", icon: <Banknote className="w-6 h-6" />, decimals: 1, color: "text-accent" },
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
      badge="Transparency & Results"
      title="Measurable Impact, Real Lives Saved"
      description="Our commitment to transparency means every screening, every referral, and every outcome is tracked and reported."
    />
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Key Metrics" title="National Performance Dashboard" />
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
              <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3">{m.icon}</div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                <AnimatedCounter end={m.value} suffix={m.suffix} prefix={m.prefix || ""} decimals={m.decimals || 0} />
              </div>
              <div className="text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="section-padding section-gradient">
      <div className="container mx-auto">
        <SectionHeading badge="Regional Data" title="Provincial Screening Statistics" />
        <div className="max-w-3xl mx-auto">
          <div className="stat-card overflow-hidden p-0">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground text-sm font-semibold">
              <div className="p-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Province</div>
              <div className="p-4 flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Screenings</div>
              <div className="p-4">Coverage</div>
            </div>
            {regions.map((r, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary/30"}`}>
                <div className="p-4 font-medium text-foreground">{r.name}</div>
                <div className="p-4 text-muted-foreground">{r.screenings}</div>
                <div className="p-4 font-semibold text-accent">{r.coverage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Impact;
