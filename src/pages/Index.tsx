import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Banknote,
  ChevronRight,
  Clock3,
  Eye,
  Hand,
  Shield,
  Sparkles,
  TrendingDown,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroBg from "@/assets/hero-bg.jpg";

const signalStats = [
  { value: 4.6, suffix: "M", label: "People living with diabetes", decimals: 1 },
  { value: 27000, suffix: "+", label: "Amputations each year" },
  { value: 84, suffix: "%", label: "Linked to preventable ulcers" },
  { value: 13.5, suffix: "B", prefix: "R", label: "Annual economic burden", decimals: 1 },
];

const fiveMinuteProtocol = [
  { icon: <Users className="h-6 w-6" />, title: "Ask", detail: "Risk, history, and red flags in under one minute." },
  { icon: <Eye className="h-6 w-6" />, title: "Look", detail: "Spot skin changes, pressure points, and wounds early." },
  { icon: <Hand className="h-6 w-6" />, title: "Feel", detail: "Check pulses, warmth, and swelling with confidence." },
  { icon: <Activity className="h-6 w-6" />, title: "Test", detail: "Run monofilament and vibration checks quickly." },
  { icon: <ArrowRight className="h-6 w-6" />, title: "Act", detail: "Stratify risk and trigger fast referral pathways." },
];

const outcomes = [
  { icon: <Shield className="h-5 w-5" />, value: 92, suffix: "%", label: "Screening coverage" },
  { icon: <TrendingDown className="h-5 w-5" />, value: 35, suffix: "%", label: "Fewer amputations" },
  { icon: <Clock3 className="h-5 w-5" />, value: 24, suffix: "h", prefix: "<", label: "Referral turnaround" },
  { icon: <Banknote className="h-5 w-5" />, value: 4.5, suffix: "M", prefix: "R", label: "Public cost savings", decimals: 1 },
];

const Index = () => {
  return (
    <div className="bg-background">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img src={heroBg} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(26,58,92,0.94)_20%,rgba(0,114,188,0.84)_56%,rgba(46,125,50,0.78)_100%)]" />
        </div>
        <div className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/20 blur-[100px]" />
        <div className="container mx-auto px-4 pb-20 pt-16 md:pb-24 md:pt-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-gold" />
                National Diabetic Foot Screening Program
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[0.98] text-white md:text-6xl xl:text-7xl">
                The New Gold Standard for
                <span className="mt-2 block text-gold">Preventive Foot Care</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-xl">
                We equip frontline nurses with a fast, repeatable workflow that turns foot screenings into a national prevention engine.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/partners">
                  <Button variant="hero" size="lg" className="rounded-full px-8 text-base">
                    Become a Partner
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/protocol">
                  <Button variant="heroOutline" size="lg" className="rounded-full px-8 text-base">
                    Explore the Protocol
                  </Button>
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Live National Signal</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {signalStats.map((stat, index) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                    <p className="font-display text-2xl font-bold text-white md:text-3xl">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} decimals={stat.decimals || 0} />
                    </p>
                    <p className="mt-1 text-xs leading-snug text-white/70">{stat.label}</p>
                    <div className="mt-3 h-1 rounded-full bg-white/15">
                      <motion.div
                        className="h-full rounded-full bg-gold"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(index + 2) * 20}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Five-minute execution</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-foreground md:text-5xl">
                Built for speed, clarity, and frontline confidence
              </h2>
            </div>
            <Link to="/training" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View training pathway
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {fiveMinuteProtocol.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_10px_40px_-22px_rgba(15,72,120,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  {step.icon}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-[radial-gradient(circle_at_15%_15%,#0072BC_0%,#1A3A5C_52%,#0d1f3b_100%)] p-8 md:p-12">
            <div className="mb-10 text-center md:mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Measured Outcomes</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">Evidence that scales nationally</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {outcomes.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold">
                    {metric.icon}
                  </div>
                  <p className="mt-4 font-display text-3xl font-bold text-white">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} prefix={metric.prefix || ""} decimals={metric.decimals || 0} />
                  </p>
                  <p className="mt-1 text-xs text-white/70 md:text-sm">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">National Collaboration</p>
                <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-foreground md:text-5xl">
                  Join the coalition eliminating preventable amputations
                </h2>
                <p className="mt-5 max-w-xl text-muted-foreground">
                  Government, funders, and care providers use this framework to create earlier intervention and stronger referral performance.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/partners">
                    <Button variant="cta" size="lg" className="rounded-full px-8">
                      Become a Partner
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="rounded-full px-8">
                      Contact Team
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Department of Health", "WHO", "IDF", "SEMDSA", "CDE", "NDoH"].map((partner) => (
                  <div
                    key={partner}
                    className="rounded-xl border border-border/80 bg-secondary/40 px-4 py-5 text-center text-sm font-semibold text-foreground/75"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;