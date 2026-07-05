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
import heroBg from "@/assets/hero-bg.png";
import integratedVideo from "@/assets/EDU-FOOT.INTERGRATED.VIDEO.mp4";
import teamDirImg from "@/assets/EDU-FOOT directors.png";
import maziziBio from "@/assets/Mazizi Njokweni.png";
import mphoBio from "@/assets/Mpho Bernice Mqaisa.png";
import gontseBio from "@/assets/Gontse Phatlane.png";
import teamActionImg from "@/assets/10.jpg";

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
        <div className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-edu-green/20 blur-[100px]" />
        <div className="container mx-auto px-4 pb-20 pt-16 md:pb-24 md:pt-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-edu-green" />
                National Diabetic Foot Screening Program
              </div>
              <h1 className="max-w-4xl font-display text-3xl font-extrabold leading-[0.98] text-white sm:text-4xl md:text-6xl xl:text-7xl">
                The New Gold Standard for
                <span className="mt-2 block text-edu-green">Preventive Foot Care</span>
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
                        className="h-full rounded-full bg-edu-green"
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
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
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
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-edu-green">Measured Outcomes</p>
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
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-edu-green">
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

      {/* Integrated video */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2">See it in action</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">EDU-FOOT in practice</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-lg">
            <video controls className="w-full" poster={heroBg}>
              <source src={integratedVideo} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2">Meet the Team</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Clinicians on a mission</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Three healthcare leaders with direct experience of the amputation crisis, building the solution one nurse at a time.</p>
          </div>
          <div className="mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-lg">
              <img src={teamDirImg} alt="EDU-FOOT Leadership Team" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Mazizi Njokweni", role: "Founder & Director", bio: "Senior Podiatrist with firsthand experience of the amputation crisis.", img: maziziBio },
              { name: "Mpho Bernice Mqaisa", role: "Clinical Training Lead", bio: "Nursing educator ensuring every trained nurse achieves competency." },
              { name: "Gontse Rosina Phatlane", role: "Systems & Partnerships Lead", bio: "Health systems expert driving sustainable national impact." },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                {member.img && (
                  <div className="rounded-xl overflow-hidden mb-4 bg-[#E8F4FD]">
                    <img src={member.img} alt={member.name} className="w-full h-48 object-cover" />
                  </div>
                )}
                <h3 className="font-display font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mt-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-10">
            <Link to="/about">
              <Button variant="outline" className="rounded-full">
                Learn More About Our Team
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
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
