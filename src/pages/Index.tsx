import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Eye, Hand, Activity, ArrowRight, TrendingDown, Clock, Banknote, Users, ChevronRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const workflowSteps = [
  { icon: <Users className="w-8 h-8" />, label: "ASK", desc: "Patient history & risk factors" },
  { icon: <Eye className="w-8 h-8" />, label: "LOOK", desc: "Visual inspection of both feet" },
  { icon: <Hand className="w-8 h-8" />, label: "FEEL", desc: "Pulse palpation & temperature" },
  { icon: <Activity className="w-8 h-8" />, label: "TEST", desc: "Monofilament & tuning fork" },
  { icon: <ArrowRight className="w-8 h-8" />, label: "ACT", desc: "Risk classify & refer" },
];

const crisisStats = [
  { value: 4.6, suffix: "M", label: "Diagnosed Diabetics", decimals: 1 },
  { value: 27000, suffix: "+", label: "Amputations Annually" },
  { value: 84, suffix: "%", label: "Preceded by Preventable Ulcers" },
  { value: 13.5, suffix: "B", prefix: "R", label: "Annual Economic Burden", decimals: 1 },
];

const impactStats = [
  { value: 92, suffix: "%", label: "Screening Coverage", icon: <Shield className="w-6 h-6" /> },
  { value: 35, suffix: "%", label: "Reduction in Amputations", icon: <TrendingDown className="w-6 h-6" /> },
  { value: 24, suffix: "hr", prefix: "<", label: "Referral Turnaround", icon: <Clock className="w-6 h-6" /> },
  { value: 4.5, suffix: "M", prefix: "R", label: "Cost Savings", icon: <Banknote className="w-6 h-6" />, decimals: 1 },
];

const Index = () => {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-6">
              National Diabetic Foot Screening Programme
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
              Step Ahead of<br />
              <span className="text-accent">Amputation</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed mb-8">
              Transforming diabetic foot care across South Africa through competency-based nurse empowerment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/partners">
                <Button variant="hero" size="lg" className="text-base px-8">
                  Become a Partner <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/impact">
                <Button variant="heroOutline" size="lg" className="text-base px-8">
                  View Our Impact
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== NATIONAL CRISIS ===== */}
      <section className="section-padding section-gradient">
        <div className="container mx-auto">
          <SectionHeading
            badge="The National Crisis"
            title="South Africa's Silent Epidemic"
            description="Diabetes-related amputations are devastating lives and burdening the healthcare system — but they are largely preventable."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {crisisStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="stat-card text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} decimals={stat.decimals || 0} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5-MINUTE WORKFLOW ===== */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            badge="The Protocol"
            title="5-Minute Screening Workflow"
            description="A structured, competency-based approach designed for primary healthcare nurses."
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="workflow-step group"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{step.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                {i < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-border">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROVEN IMPACT ===== */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-4">
              Proven Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              Measurable Results, Real Lives Saved
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} decimals={stat.decimals || 0} />
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNER LOGOS ===== */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            badge="Our Partners"
            title="Trusted by Government & Industry"
            description="Working alongside national healthcare institutions, NGOs, and corporate sponsors."
          />
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
            {["Department of Health", "WHO", "IDF", "SEMDSA", "CDE", "NDoH"].map((name, i) => (
              <div key={i} className="px-6 py-3 border border-border rounded-lg bg-card text-muted-foreground font-display font-semibold text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding section-gradient">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Join the National Prevention Initiative
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Partner with EDU-FOOT™ NPC to help eliminate preventable amputations across South Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/partners">
                <Button variant="cta" size="lg" className="text-base px-10">
                  Become a Partner
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-base px-10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
