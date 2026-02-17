import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Building2, Users, Award, FileCheck, User } from "lucide-react";

const About = () => (
  <div>
    <PageHero
      badge="About EDU-FOOT™ NPC"
      title="South Africa's National Authority on Diabetic Foot Prevention"
      description="A Non-Profit Company dedicated to eliminating preventable amputations through competency-based nurse training and systematic screening."
    />
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Our Story" title="Organisation History" centered={false} />
        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4 mb-12">
          <p>EDU-FOOT™ NPC was founded in response to the escalating crisis of diabetes-related amputations in South Africa. Recognising that the majority of these amputations are preventable, the organisation was established to bridge the critical gap in primary healthcare foot screening capabilities.</p>
          <p>Through partnerships with provincial health departments, academic institutions, and corporate sponsors, EDU-FOOT™ has developed a standardised, evidence-based screening protocol that can be delivered by primary healthcare nurses in under five minutes.</p>
        </div>

        <SectionHeading badge="Leadership" title="Founder & Director" centered={false} />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="stat-card flex gap-6 items-start mb-12">
          <div className="w-20 h-20 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <User className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-foreground">Mazizi Njokweni</h3>
            <p className="text-sm text-accent font-medium mb-2">Founder & Executive Director</p>
            <p className="text-sm text-muted-foreground leading-relaxed">A passionate healthcare advocate with extensive experience in diabetic foot care, clinical education, and public health systems. Mazizi founded EDU-FOOT™ NPC to address the preventable amputation crisis through nurse-led screening programmes.</p>
          </div>
        </motion.div>

        <SectionHeading badge="Structure" title="Governance & Compliance" centered={false} />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Building2 className="w-6 h-6" />, title: "NPC Registration", desc: "Registered Non-Profit Company under the Companies Act 71 of 2008." },
            { icon: <Users className="w-6 h-6" />, title: "Board Governance", desc: "Independent board of directors with clinical, financial, and legal expertise." },
            { icon: <Award className="w-6 h-6" />, title: "Accreditation", desc: "Training programmes aligned with national health education standards." },
            { icon: <FileCheck className="w-6 h-6" />, title: "Compliance", desc: "Full compliance with POPIA, NPO Act, and public benefit organisation requirements." },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
