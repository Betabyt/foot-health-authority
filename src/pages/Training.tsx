import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { BookOpen, Award, Video, ClipboardCheck, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  { icon: <BookOpen className="w-6 h-6" />, title: "Foundation Module", duration: "4 hours", desc: "Diabetes pathophysiology, foot anatomy, and risk factor identification fundamentals." },
  { icon: <ClipboardCheck className="w-6 h-6" />, title: "Clinical Assessment", duration: "6 hours", desc: "Hands-on training in the ASK-LOOK-FEEL-TEST-ACT screening protocol." },
  { icon: <Video className="w-6 h-6" />, title: "Practical Skills Lab", duration: "8 hours", desc: "Video-guided monofilament testing, pulse palpation, and wound classification techniques." },
  { icon: <Users className="w-6 h-6" />, title: "Referral & Documentation", duration: "3 hours", desc: "Standardised documentation, risk stratification, and referral pathway protocols." },
  { icon: <Award className="w-6 h-6" />, title: "Competency Assessment", duration: "2 hours", desc: "Written and practical examination for EDU-FOOT™ certification." },
  { icon: <GraduationCap className="w-6 h-6" />, title: "Continuous Development", duration: "Ongoing", desc: "Annual refresher courses, case study reviews, and updated clinical guidelines." },
];

const Training = () => (
  <div>
    <PageHero
      badge="Education & Training"
      title="Competency-Based Nurse Empowerment"
      description="Our accredited training programme equips primary healthcare nurses with the skills to screen, classify, and refer diabetic foot complications."
      ctaLabel="Register for Training"
      ctaTo="/contact"
    />
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Course Catalog" title="Training Pathway" description="A structured learning journey from foundations to certification." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="stat-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">{course.icon}</div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{course.duration}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="section-padding section-gradient text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to Get Certified?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Contact us to enroll in the next training cohort or request on-site training for your facility.</p>
        <Link to="/contact"><Button variant="cta" size="lg">Register Interest</Button></Link>
      </div>
    </section>
  </div>
);

export default Training;
