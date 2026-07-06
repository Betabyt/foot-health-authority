import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Building2, Users, Award, FileCheck, Target, Eye, Heart, CheckCircle, Landmark, BookOpen, BarChart3, Globe } from "lucide-react";
import logoVideo from "@/assets/EDU-FOOT.Video.LOGO.mp4";
import logoVideo3 from "@/assets/EDU-FOOT.Video.LOGO.3.mp4";
import maziziBio from "@/assets/Mazizi Njokweni.png";
import mphoBio from "@/assets/Mpho Bernice Mqaisa.png";
import gontseBio from "@/assets/Gontse Phatlane.png";
import teamTogether from "@/assets/EDU-FOOT directors.png";
import maziziBioScreening from "@/assets/Mazizi_conducting_screening.jpg";
import screeningImage from "@/assets/17.jpg";

const team = [
  {
    name: "Mazizi Njokweni",
    role: "Founder & Executive Director",
    credential: "Senior Podiatrist | Clinical Lead",
    bio: "A passionate healthcare advocate and Senior Podiatrist with extensive clinical experience in diabetic foot care. Mazizi founded EDU-FOOT™ NPC after witnessing the preventable amputation crisis first-hand. He leads clinical programme design, government engagement, and strategic partnerships — driving the organisation's mission to scale nurse-led foot screening across South Africa.",
  },
  {
    name: "Mpho Bernice Mqaisa",
    role: "Clinical Training Lead",
    credential: "Nursing Education & Quality Assurance",
    bio: "A specialist in nursing education and quality assurance, Mpho leads the development and delivery of EDU-FOOT's competency-based training programme. She oversees curriculum design, the OSCE assessment framework, and post-training implementation coaching — ensuring every trained nurse meets verified clinical competency standards.",
  },
  {
    name: "Gontse Rosina Phatlane",
    role: "Systems & Partnerships Lead",
    credential: "MPH Health Systems",
    bio: "An MPH-qualified health systems specialist, Gontse manages strategic partnerships, monitoring & evaluation, and stakeholder engagement. She leads EDU-FOOT's ESG reporting framework, grant reporting, and government relations — connecting the programme's clinical outcomes to measurable public health impact.",
  },
];

const values = [
  { icon: <Target className="w-6 h-6" />, title: "Prevention over reaction", desc: "Every intervention is designed to act before complications occur — screening is the first line of defence." },
  { icon: <Eye className="w-6 h-6" />, title: "Evidence before expansion", desc: "We only scale what the data validates. Pilot results inform every decision, and outcomes are independently audited." },
  { icon: <Heart className="w-6 h-6" />, title: "Dignity in care", desc: "Diabetic patients in underserved clinics deserve the same standard of foot assessment as private patients." },
  { icon: <Users className="w-6 h-6" />, title: "Nurse-centred design", desc: "The protocol, tools, and support system are built around the realities of PHC nurses — limited time, limited equipment, high patient load." },
];

const governance = [
  { icon: <Building2 className="w-6 h-6" />, title: "NPC Registration", desc: "CIPC Registration No. 2026/045897/08. Registered as a Non-Profit Company under the Companies Act 71 of 2008 on 19 January 2026." },
  { icon: <Users className="w-6 h-6" />, title: "Board Structure", desc: "Four standing committees: Audit & Finance; Program & Impact; Governance & Nominations; Fundraising & Partnerships." },
  { icon: <Award className="w-6 h-6" />, title: "SANC CPD Accreditation", desc: "CPD accreditation application submitted to the South African Nursing Council. Interim programme delivery underway at pilot sites." },
  { icon: <FileCheck className="w-6 h-6" />, title: "Compliance", desc: "Full compliance with POPIA, NPO Act, and Public Benefit Organisation requirements. Financial statements independently audited." },
];

const milestones = [
  "NPC registered with CIPC (January 2026)",
  "Competency-based curriculum developed and validated",
  "Pilot programme conducted at Adcock Ingram facilities",
  "ASK–LOOK–FEEL–TEST–ACT protocol finalised",
  "SANC CPD accreditation application submitted",
  "Gauteng pilot site proof-of-concept: 92% screening coverage achieved",
  "35% reduction in emergency amputations at pilot site",
  "R4.5M in estimated cost savings from prevented amputations",
];

const alignment = [
  { icon: <Landmark className="w-6 h-6" />, title: "NCD Strategic Plan 2022–2027", desc: "Directly addresses South Africa's National Health priority to reduce non-communicable disease morbidity — diabetic foot complications are a major NCD driver." },
  { icon: <BookOpen className="w-6 h-6" />, title: "PHC Re-engineering", desc: "Aligns with the national PHC re-engineering agenda — empowering frontline nurses as the first point of specialist-equivalent care." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "National Health Insurance (NHI)", desc: "EDU-FOOT's standardised protocol and outcome tracking infrastructure supports NHI quality-of-care and cost-efficiency mandates." },
  { icon: <Globe className="w-6 h-6" />, title: "SDG 3: Good Health & Well-being", desc: "Contributes to SDG 3.4 (reduce premature mortality from NCDs) and SDG 3.8 (universal health coverage for essential services)." },
];

const About = () => (
  <div>
    <PageHero
      badge="About EDU-FOOT™ NPC"
      title="South Africa's National Authority on Diabetic Foot Prevention"
      description="A Non-Profit Company dedicated to eliminating preventable amputations through competency-based nurse training and systematic screening."
    />

    {/* Our Story */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Our Story" title="Born from a preventable crisis" centered={false} />
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 rounded-xl bg-[#0072BC] px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="font-display font-bold text-2xl text-white shrink-0">EDU-FOOT™</div>
          <div>
            <div className="text-white/90 text-sm font-medium">Every Diabetic Ulcer Footcare-Oriented Outcome Training</div>
            <div className="text-white/60 text-xs italic mt-0.5">Step Ahead of Amputation</div>
          </div>
        </motion.div>
        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4 mb-12">
          <p>EDU-FOOT™ NPC was founded in January 2026 in direct response to South Africa's escalating diabetes-related amputation crisis. With over 27,000 amputations occurring annually — 84% of which are preceded by foot ulcers that could have been detected with basic screening — the need for a structured, scalable nurse training solution was urgent.</p>
          <p>Founder Mazizi Njokweni, a Senior Podiatrist with first-hand clinical experience of the amputation cascade, established EDU-FOOT™ to bridge the critical gap between specialist foot care knowledge and frontline PHC delivery. The organisation's core insight: nurses want to screen, but lack the time, tools, and training to do so consistently.</p>
          <p>The EDU-FOOT™ model packages a validated ≤7-minute screening protocol, a hands-on 2-day training programme, a full clinic toolkit, and 12 months of implementation coaching into a single, deployable solution — designed for the realities of South African primary healthcare. The programme is embedded within the Amputation Prevention Protocol (APP) and Gauteng's Limb Salvage Programme, ensuring alignment with provincial and national health priorities.</p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="stat-card border-t-4 border-[#0072BC]">
            <div className="text-xs font-bold text-[#0072BC] uppercase tracking-wider mb-2">Mission</div>
            <p className="text-sm text-muted-foreground leading-relaxed">To eliminate preventable diabetes-related amputations in South Africa by empowering primary healthcare nurses with standardised, competency-verified foot screening skills — at scale, across all provinces.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="stat-card border-t-4 border-[#4CAF50]">
            <div className="text-xs font-bold text-[#4CAF50] uppercase tracking-wider mb-2">Vision</div>
            <p className="text-sm text-muted-foreground leading-relaxed">A South Africa where no patient loses a limb to a complication that a trained primary healthcare nurse could have detected — where every diabetic patient receives a structured foot assessment at every clinic visit.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Core Values" title="What drives every decision" />
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#E8F4FD] text-[#0072BC] flex items-center justify-center shrink-0">{v.icon}</div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership Team */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Leadership" title="The founding team" description="Three clinicians and health systems specialists with direct experience of the problem EDU-FOOT™ was built to solve." />
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden shadow-lg">
            <img src={teamTogether} alt="EDU-FOOT Leadership Team" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
        <div className="space-y-5">
          {team.map((member, i) => {
            const headshots = [maziziBio, mphoBio, gontseBio];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card flex gap-6 items-start">
                <div className="w-20 h-20 rounded-xl bg-[#E8F4FD] flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={headshots[i]} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">{member.name}</h3>
                  <p className="text-sm text-[#0072BC] font-semibold mb-0.5">{member.role}</p>
                  <p className="text-xs text-muted-foreground font-medium mb-2">{member.credential}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Current Achievements */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Milestones" title="What we've achieved since January 2026" />
        <div className="stat-card max-w-2xl mx-auto">
          <ul className="space-y-3">
            {milestones.map((m, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                {m}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Founder in Action */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Founder at Work" title="Mazizi conducting clinical screening" centered={false} />
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden shadow-lg md:col-span-2 lg:col-span-1">
            <img src={maziziBioScreening} alt="Mazizi conducting diabetic foot screening" className="w-full h-auto object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl overflow-hidden shadow-lg">
            <img src={screeningImage} alt="Clinical screening session" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Governance */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Governance & Compliance" title="Built on solid foundations" />
        <div className="grid md:grid-cols-2 gap-6">
          {governance.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#E8F4FD] text-[#0072BC] flex items-center justify-center shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* National alignment */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="National Alignment" title="Aligned with South Africa's health priorities" description="EDU-FOOT™ is designed to slot into existing national health frameworks — not compete with them." />
        <div className="grid md:grid-cols-2 gap-6">
          {alignment.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Brand videos */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading badge="Brand Identity" title="EDU-FOOT™ in motion" description="Our visual identity communicates the urgency, clarity, and hope behind every screening." />
        <div className="grid md:grid-cols-2 gap-6">
          {[logoVideo, logoVideo3].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl overflow-hidden shadow-md bg-[#1A3A5C]">
              <video autoPlay loop muted playsInline className="w-full">
                <source src={src} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
