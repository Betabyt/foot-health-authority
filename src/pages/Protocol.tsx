import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Users, Eye, Hand, Activity, ArrowRight, ClipboardCheck, Shield, FileText } from "lucide-react";

const steps = [
  { icon: <Users className="w-8 h-8" />, label: "ASK", title: "Patient History", desc: "Gather comprehensive medical history including diabetes duration, previous ulcers, smoking status, and current medications." },
  { icon: <Eye className="w-8 h-8" />, label: "LOOK", title: "Visual Inspection", desc: "Systematically examine both feet for deformities, skin changes, calluses, ulcers, nail pathology, and signs of infection." },
  { icon: <Hand className="w-8 h-8" />, label: "FEEL", title: "Palpation", desc: "Assess pedal pulses (dorsalis pedis & posterior tibial), skin temperature, and check for oedema or structural abnormalities." },
  { icon: <Activity className="w-8 h-8" />, label: "TEST", title: "Sensory Testing", desc: "Perform 10g monofilament test and 128Hz tuning fork assessment to evaluate peripheral neuropathy status." },
  { icon: <ArrowRight className="w-8 h-8" />, label: "ACT", title: "Risk Classification", desc: "Classify risk level, initiate appropriate care pathway, document findings, and refer high-risk patients within 24 hours." },
];

const extras = [
  { icon: <ClipboardCheck className="w-6 h-6" />, title: "Documentation System", desc: "Standardised assessment forms ensure consistent data capture across all screening sites." },
  { icon: <Shield className="w-6 h-6" />, title: "Quality Assurance", desc: "Built-in competency validation ensures every nurse meets clinical screening standards." },
  { icon: <FileText className="w-6 h-6" />, title: "Referral Pathway", desc: "Clear escalation protocols with <24-hour turnaround for high-risk patients." },
];

const Protocol = () => (
  <div>
    <PageHero
      badge="Clinical Methodology"
      title="The EDU-FOOT™ Screening Protocol"
      description="A structured, evidence-based 5-minute screening workflow designed for primary healthcare nurses in resource-limited settings."
    />
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="5-Step Workflow" title="ASK → LOOK → FEEL → TEST → ACT" />
        <div className="space-y-6 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start stat-card"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Step {i + 1}: {step.label}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="section-padding section-gradient">
      <div className="container mx-auto">
        <SectionHeading badge="Supporting Systems" title="Beyond the Screening" />
        <div className="grid md:grid-cols-3 gap-6">
          {extras.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">{item.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Protocol;
