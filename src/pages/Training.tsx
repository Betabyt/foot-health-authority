import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { BookOpen, Award, Video, ClipboardCheck, GraduationCap, Users, CheckCircle, X, Smartphone, HeartHandshake, Layers, Star, Quote, Zap, Landmark, Globe, BarChart3, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const philosophy = [
  { title: "Simplicity Over Complexity", desc: "Teach practical, evidence-based steps usable at clinic level — no specialist background required." },
  { title: "Competency Over Completion", desc: "Certification is based on demonstrated skill mastery, not just attendance. Nurses must prove they can screen." },
  { title: "Contextual Adaptation", desc: "Designed for South African realities — rural–urban relevance, low-resource settings, and multilingual patient populations." },
  { title: "Sustainability", desc: "Integrates into existing PHC workflows without disruption. EDU-FOOT enhances what nurses already do, not replaces it." },
];

const tracks = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    name: "EDU-FOOT Essential",
    duration: "2 days (14 contact hours)",
    audience: "All PHC nurses",
    colour: "border-[#0072BC]",
    iconBg: "bg-[#E8F4FD] text-[#0072BC]",
    desc: "Core diabetic foot screening competencies: ASK–LOOK–FEEL–TEST–ACT protocol, risk classification, referral pathways, and clinic integration. The primary certification track.",
    cert: "EDU-FOOT Foot Screening Competency Certificate (1-year validity)",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    name: "EDU-FOOT Advanced",
    duration: "2 days",
    audience: "Certified EDU-FOOT graduates",
    colour: "border-[#FF9800]",
    iconBg: "bg-orange-50 text-orange-600",
    desc: "Advanced Wound Care Module: infection control, offloading, dressing selection, bedside Doppler assessment, wound staging using adapted WIFI/PEDIS systems.",
    cert: "EDU-FOOT Advanced Wound Care Certificate",
  },
  {
    icon: <Star className="w-6 h-6" />,
    name: "Train-the-Trainer",
    duration: "3 days",
    audience: "EDU-FOOT Champions",
    colour: "border-[#4CAF50]",
    iconBg: "bg-[#E8F5E9] text-[#2E7D32]",
    desc: "Equips senior nurses to facilitate EDU-FOOT Essential at their own facilities. Covers adult learning principles, station facilitation, OSCE assessment, and quality assurance.",
    cert: "EDU-FOOT Certified Trainer designation",
  },
];

const courses = [
  { icon: <BookOpen className="w-6 h-6" />, title: "Session 1: The SA Crisis", day: "Day 1", desc: "Case video 'Thabo's Journey' — ulcer to amputation. Review of 2024 Leratong APP audit data. Discussion: what could have been prevented?" },
  { icon: <ClipboardCheck className="w-6 h-6" />, title: "Session 2: The 5-Minute Foot Screen", day: "Day 1", desc: "Hands-on training in every step of the ASK–LOOK–FEEL–TEST–ACT protocol. Four-station rotation: Look & Identify, Feel Pulses, Test Sensation, Documentation." },
  { icon: <Video className="w-6 h-6" />, title: "Session 3: Risk Categories & Action", day: "Day 1", desc: "Green/Yellow/Orange/Red classification. Case exercises: Mama Zinhle (High Risk), Baba John (Emergency), Sister Thandi (Moderate). Day 1 mini-OSCE." },
  { icon: <Zap className="w-6 h-6" />, title: "Session 4: Foot Problems You Can Manage", day: "Day 2", desc: "Evidence-based first-line care: dry skin (urea moisturiser), callus (refer — never cut), nail care, wound first aid (saline only, non-adherent dressings)." },
  { icon: <Users className="w-6 h-6" />, title: "Session 5: Red Flags & Referral", day: "Day 2", desc: "APP algorithm: Hot Foot → infection → surgery; Cold Foot → ischaemia → vascular. WhatsApp tele-referral template, photo skills, and urgent referral role-play." },
  { icon: <GraduationCap className="w-6 h-6" />, title: "Session 6: Clinic Integration", day: "Day 2", desc: "Create screening schedule and register. Develop monthly audit tracker. Pledge: 10 patients screened in 10 days. Final knowledge quiz + OSCE + graduation." },
];

const comparison = [
  { aspect: "Assessment", traditional: "Attendance certificate", edufoot: "OSCE + quiz (skill mastery)" },
  { aspect: "Learning mode", traditional: "Mostly classroom / lecture", edufoot: "70% station-based hands-on practice" },
  { aspect: "Implementation support", traditional: "None", edufoot: "12-month coaching + outcome tracking" },
  { aspect: "Tools provided", traditional: "Variable", edufoot: "Clinic toolkit + digital templates" },
  { aspect: "Outcome", traditional: "Knowledge exposure", edufoot: "Verified clinic behaviour change" },
  { aspect: "Follow-up", traditional: "None", edufoot: "Monthly check-ins for 12 months" },
];

const assessmentComponents = [
  { component: "Knowledge Quiz", format: "10 MCQs", weight: "20%", pass: "≥ 70%", colour: "bg-[#E8F4FD] text-[#0072BC]" },
  { component: "Practical OSCE", format: "4 stations", weight: "60%", pass: "≥ 80% per station", colour: "bg-[#E8F5E9] text-[#2E7D32]" },
  { component: "Case Discussion", format: "Group analysis", weight: "20%", pass: "Active contribution", colour: "bg-yellow-50 text-yellow-700" },
];

const oscePanels = [
  { station: "Station 1", title: "History & Inspection", desc: "Structured patient history using ASK prompts; visual foot inspection for red flags including blood-stained callus (80% ulcer predictor)." },
  { station: "Station 2", title: "10g Monofilament", desc: "Correct application technique at 1st, 3rd, and 5th plantar sites; Ipswich Touch Test alternative; documentation of findings." },
  { station: "Station 3", title: "Pulse Palpation", desc: "Locate and grade dorsalis pedis and posterior tibial pulses; assess skin temperature, capillary refill, and oedema." },
  { station: "Station 4", title: "Risk Classification & Referral", desc: "Interpret combined findings, assign Green/Yellow/Orange/Red risk, and complete EDU-FOOT Screening Form with referral documentation." },
];

const deliveryFacts = [
  { label: "Cohort size", value: "15–20 nurses" },
  { label: "Sessions per month", value: "2–4" },
  { label: "Format", value: "70% Practical · 30% Theory" },
  { label: "CPD Credits", value: "10 CEUs" },
  { label: "Certificate validity", value: "1 year" },
  { label: "Renewal", value: "4-hour refresher" },
];

const outcomes = [
  "80% of participants report improved screening confidence post-training",
  "90% implement foot screening within one month of completing the course",
  "100% of emergency presentations referred within 24 hours (target indicator)",
  "Screening coverage increases from <10% to >90% at trained facilities",
];

const Training = () => (
  <div>
    <PageHero
      badge="Education & Training"
      title="Competency-Based Nurse Empowerment"
      description="A 2-day accredited programme giving primary healthcare nurses the skills, tools, and ongoing support to screen every diabetic patient — every visit. Every nurse a limb saver."
      ctaLabel="Register for Training"
      ctaTo="/contact"
    />

    {/* Philosophy */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Course Philosophy" title="Four principles behind the design" description="EDU-FOOT was built to solve a specific problem: nurses who want to screen but don't have the tools, workflow, or confidence to do it every visit." />
        <div className="grid md:grid-cols-2 gap-6">
          {philosophy.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card accent-bar-blue">
              <h4 className="font-display font-semibold text-foreground mb-1">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 rounded-xl bg-[#1A3A5C] p-6 flex gap-4 items-start">
          <Quote className="w-6 h-6 text-[#4CAF50] shrink-0 mt-0.5" />
          <p className="text-white/90 text-sm leading-relaxed italic">
            "Every nurse trained becomes a sentinel against preventable amputation, a guardian of mobility, and a beacon of hope for diabetic patients."
            <span className="block mt-2 not-italic text-white/60 text-xs">— Mazizi Njokweni, Founder</span>
          </p>
        </motion.div>
      </div>
    </section>

    {/* Training tracks */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="Training Tracks" title="Three pathways to deeper expertise" description="EDU-FOOT Essential is the core certification. Advanced and Train-the-Trainer tracks allow graduates to deepen their practice and build local capacity." />
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`stat-card border-t-4 ${t.colour}`}>
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${t.iconBg}`}>{t.icon}</div>
              <h3 className="font-display font-bold text-lg text-foreground mb-0.5">{t.name}</h3>
              <div className="text-xs text-[#0072BC] font-semibold mb-0.5">{t.duration}</div>
              <div className="text-xs text-muted-foreground mb-3">For: {t.audience}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
              <div className="text-xs bg-[#F5F5F5] rounded-lg p-3 text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Certificate: </span>{t.cert}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Programme curriculum — sessions */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Programme Curriculum" title="6-session, 2-day learning journey" description="14 contact hours structured as Day 1: Detection & Risk Stratification — Day 2: Basic Care & Referral Pathways. 70% practical, 30% theory." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="stat-card">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i < 3 ? "bg-[#E8F4FD] text-[#0072BC]" : "bg-[#E8F5E9] text-[#2E7D32]"}`}>{course.icon}</div>
                <span className={`text-xs font-bold uppercase tracking-wider ${i < 3 ? "text-[#0072BC]" : "text-[#2E7D32]"}`}>{course.day}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* EDU-FOOT vs Traditional CPD */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="Educational Innovation" title="Competency over attendance" description="Why EDU-FOOT achieves sustained clinic behaviour change where traditional CPD does not." />
        <div className="max-w-3xl mx-auto">
          <div className="stat-card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <div className="min-w-[480px]">
                <div className="grid grid-cols-3 text-sm font-semibold">
                  <div className="p-3 sm:p-4 bg-[#F5F5F5] text-foreground">Aspect</div>
                  <div className="p-3 sm:p-4 bg-[#F5F5F5] text-muted-foreground text-center">Traditional CPD</div>
                  <div className="p-3 sm:p-4 bg-[#0072BC] text-white text-center">EDU-FOOT Model</div>
                </div>
                {comparison.map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 text-sm border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-[#F5F5F5]/40"}`}>
                    <div className="p-3 sm:p-4 font-medium text-foreground">{row.aspect}</div>
                    <div className="p-3 sm:p-4 text-muted-foreground text-center flex items-center justify-center gap-1.5">
                      <X className="w-3.5 h-3.5 text-[#F44336] shrink-0" />
                      {row.traditional}
                    </div>
                    <div className="p-3 sm:p-4 text-[#2E7D32] font-medium text-center flex items-center justify-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                      {row.edufoot}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Assessment blueprint */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Assessment Blueprint" title="How certification is earned" description="Nurses must pass all three components. Certification is not issued for partial completion or attendance alone." />
        <div className="max-w-3xl mx-auto mb-10">
          <div className="stat-card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <div className="min-w-[520px]">
                <div className="grid grid-cols-4 bg-[#0072BC] text-white text-xs font-semibold">
                  <div className="p-3 sm:p-4">Component</div>
                  <div className="p-3 sm:p-4">Format</div>
                  <div className="p-3 sm:p-4 text-center">Weight</div>
                  <div className="p-3 sm:p-4">Pass Requirement</div>
                </div>
                {assessmentComponents.map((row, i) => (
                  <div key={i} className={`grid grid-cols-4 text-sm border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-[#F5F5F5]/40"}`}>
                    <div className="p-3 sm:p-4 font-semibold text-foreground">{row.component}</div>
                    <div className="p-3 sm:p-4 text-muted-foreground">{row.format}</div>
                    <div className="p-3 sm:p-4 text-center">
                      <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full ${row.colour}`}>{row.weight}</span>
                    </div>
                    <div className="p-3 sm:p-4 text-muted-foreground">{row.pass}</div>
                  </div>
                ))}
                <div className="p-3 sm:p-4 bg-[#E8F5E9] border-t border-border text-xs text-[#2E7D32] font-semibold">
                  Overall: 100% attendance + pass all components → EDU-FOOT Foot Screening Competency Certificate issued
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OSCE stations */}
        <SectionHeading badge="Practical OSCE" title="4-Station competency assessment" description="Nurses must demonstrate clinical competency at every station — not just attend. Pass mark: ≥80% per station." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {oscePanels.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="stat-card border-t-4 border-[#0072BC]">
              <div className="text-xs font-bold text-[#0072BC] uppercase tracking-wider mb-1">{s.station}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Delivery model */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="Delivery Model" title="Built for clinic reality" />
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {deliveryFacts.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="stat-card accent-bar-blue">
                <div className="font-display font-bold text-[#0072BC] mb-0.5">{f.value}</div>
                <div className="text-xs text-muted-foreground">{f.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="stat-card flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#E8F4FD] text-[#0072BC] flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-1">Digital pedagogy integration</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mobile-first micro-learning videos, WhatsApp case scenarios, just-in-time protocol references, telemedicine support, and peer support groups — designed for low-connectivity clinic environments.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="stat-card flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-1">Clinic toolkit included</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every trained nurse receives: 10g monofilaments, laminated A5 protocol card, risk classification poster, standardised screening forms, and WhatsApp referral templates — everything needed to start screening the next day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Professional outcomes */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading badge="Measured Outcomes" title="What graduates achieve" />
        <div className="stat-card mb-10">
          <ul className="space-y-3">
            {outcomes.map((o, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                {o}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl bg-[#1A3A5C] p-6 flex gap-4 items-start mb-10">
          <Quote className="w-6 h-6 text-[#4CAF50] shrink-0 mt-0.5" />
          <p className="text-white/90 text-sm leading-relaxed italic">
            "When you save a foot, you save a life, a family, and a community's hope."
            <span className="block mt-2 not-italic text-white/60 text-xs">— Mazizi Njokweni, Founder & Executive Director</span>
          </p>
        </motion.div>

        {/* Framework alignment */}
        <div className="mt-12">
          <SectionHeading badge="Framework Alignment" title="Built on international & national standards" description="EDU-FOOT is not standalone — it is embedded within four established frameworks for sustained impact." />
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { icon: <FileText className="w-5 h-5" />, title: "Amputation Prevention Protocol (APP)", desc: "A podiatry-led triage model with infection and ischaemia pathways — the clinical backbone of EDU-FOOT, developed within the Gauteng public health system." },
              { icon: <Globe className="w-5 h-5" />, title: "IWGDF Guidelines", desc: "International Working Group on the Diabetic Foot (Schaper et al., 2016) — global standards for DFU care, adapted for South African clinical realities." },
              { icon: <Landmark className="w-5 h-5" />, title: "Gauteng Limb Salvage Programme", desc: "Provincial amputation reduction strategy built on four pillars: screening, hotline, wound clinic, and remission." },
              { icon: <BarChart3 className="w-5 h-5" />, title: "ICDM Framework (NDoH)", desc: "Integrated Chronic Disease Management — national framework for coordinated chronic care, within which EDU-FOOT operates seamlessly." },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="stat-card flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">{f.icon}</div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Ready to get certified?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto text-sm">
            Contact us to enrol in the next training cohort or request on-site training for your facility. Cohorts run every month across Gauteng.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">Register Interest</Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Training;
