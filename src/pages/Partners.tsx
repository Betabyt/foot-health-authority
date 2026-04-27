import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Heart, BarChart3, Leaf, Users, CheckCircle, ChevronRight, Building2, Landmark, Globe, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import welcomeToEdufoot from "@/assets/new assets/welcome-to-edufoot.png";
import partnershipProposal from "@/assets/new assets/partnership-sponsorship-proposal.png";
import sponsorshipProspectus from "@/assets/new assets/sponsorship-prospectus.png";
import budgetImage from "@/assets/new assets/budget.png";

const reasons = [
  { icon: <Heart className="w-6 h-6" />, title: "Save lives directly", desc: "Every nurse you train becomes a sentinel against preventable amputation. R2,500 per nurse trained prevents complications costing the system R500,000." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Measurable impact", desc: "Full transparency with quarterly dashboards, annual impact reports, and independently audited outcomes. Know exactly what your investment achieved." },
  { icon: <Leaf className="w-6 h-6" />, title: "ESG & SDG alignment", desc: "Strong alignment with SDG 3 (Good Health and Well-being) and ESG social metrics. Reduces emergency admissions, improves referral quality, and enables auditing." },
  { icon: <Users className="w-6 h-6" />, title: "Turnkey CSR programme", desc: "Co-branded materials, joint presentations, media coverage, and professional impact reporting — all included. You invest; we deliver and document." },
  { icon: <Globe className="w-6 h-6" />, title: "Market insights", desc: "Gain first-hand insights into public sector wound care needs, supply gaps, and clinical practice patterns across South African primary healthcare facilities." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Professional engagement", desc: "Your clinical teams participate as guest trainers in wound care and infection control sessions — meaningful engagement for your healthcare professionals." },
];

const channels = [
  { icon: <Landmark className="w-6 h-6" />, title: "Provincial & District Government", desc: "Gauteng DOH (primary), National DOH (scale), district clinical teams, and facility managers.", colour: "bg-[#E8F4FD] text-[#0072BC]" },
  { icon: <Building2 className="w-6 h-6" />, title: "Hospital & Clinical Institutions", desc: "Referral hospitals, limb-salvage programmes, nursing colleges, universities, and professional associations.", colour: "bg-[#E8F5E9] text-[#2E7D32]" },
  { icon: <Globe className="w-6 h-6" />, title: "Foundations & Health Funders", desc: "Health innovation funders, WHO-aligned foundations, diabetes-focused grants and trusts.", colour: "bg-yellow-50 text-yellow-700" },
  { icon: <Briefcase className="w-6 h-6" />, title: "Corporate CSR & Diabetes Portfolios", desc: "Companies with diabetes product portfolios or B-BBEE CSR obligations aligned to public health impact.", colour: "bg-orange-50 text-orange-700" },
];

const journey = [
  { step: "1", title: "Pilot cohort", desc: "Co-fund a cohort of 15–20 nurses at a partnered clinic or hospital. Receive a detailed pre/post competency report." },
  { step: "2", title: "Clinic toolkit rollout", desc: "Equip the clinic with monofilaments, laminated protocol cards, risk posters, and referral templates." },
  { step: "3", title: "Data + impact report", desc: "Receive a branded quarterly impact report: screenings, referrals, nurse confidence, and estimated cost avoidance." },
  { step: "4", title: "Scale contract", desc: "Evidence in hand, formalise a multi-site scale agreement with co-branding and ESG reporting included." },
];

const revenueMix = [
  { label: "Government contracts", pct: "60%", colour: "bg-[#0072BC]" },
  { label: "Foundation grants", pct: "25%", colour: "bg-[#4CAF50]" },
  { label: "Corporate CSR", pct: "10%", colour: "bg-[#FF9800]" },
  { label: "Private training", pct: "5%", colour: "bg-[#999999]" },
];

const tiers = [
  {
    name: "Silver",
    subtitle: "Training Sponsor",
    investment: "R100,000 – R250,000 p.a.",
    colour: "border-[#C0C0C0]",
    benefits: [
      "Logo on EDU-FOOT materials & website",
      "Sponsorship of specific training modules",
      "Support for mobile app development",
      "Nurse scholarship programme",
      "Annual impact report",
      "CSR recognition certificate",
    ],
  },
  {
    name: "Gold",
    subtitle: "Programme Facilitator",
    investment: "R250,000 – R500,000 p.a.",
    colour: "border-[#FFD700]",
    benefits: [
      "All Silver benefits",
      "In-kind donated wound care products & educational materials",
      "Involvement in annual symposium & case study development",
      "Quarterly impact updates",
      "Event co-branding",
      "Provincial programme sponsorship",
    ],
  },
  {
    name: "Platinum",
    subtitle: "Comprehensive Support",
    investment: "R500,000+ p.a.",
    colour: "border-[#4CAF50] ring-2 ring-[#4CAF50]/20",
    benefits: [
      "All Gold benefits",
      "Wound care kits, monofilaments & Doppler devices supplied",
      "Logo on all EDU-FOOT materials as founding partner",
      "Company experts as guest trainers (wound care, infection control)",
      "Custom impact dashboard & full ESG reporting suite",
      "National programme co-ownership & government engagement access",
    ],
  },
];

const Partners = () => (
  <div>
    <PageHero
      badge="Partnership & Sponsorship"
      title="Partner With EDU-FOOT™ NPC"
      description="Join South Africa's leading initiative in diabetic foot screening. Your partnership directly prevents amputations, saves lives, and delivers measurable ESG impact."
    />

    {/* Why partner */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Why Partner" title="Make a measurable difference" description="Every R2,500 invested in a trained nurse prevents complications costing the system R500,000. That's a conservative 10:1 social return on investment." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-[#E8F4FD] text-[#0072BC] flex items-center justify-center mb-4">{r.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Partner journey */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="Partner Journey" title="From pilot to national scale" description="A typical partner progresses through four stages — each backed by evidence and transparent reporting." />
        <div className="flex flex-col md:flex-row items-center gap-3 max-w-5xl mx-auto">
          {journey.map((j, i) => (
            <>
              <motion.div
                key={j.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-card flex-1 w-full md:text-center border-t-4 border-[#0072BC]"
              >
                <div className="w-9 h-9 rounded-full bg-[#0072BC] text-white font-display font-bold text-sm flex items-center justify-center mb-3 md:mx-auto">{j.step}</div>
                <h4 className="font-display font-semibold text-foreground mb-2">{j.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{j.desc}</p>
              </motion.div>
              {i < journey.length - 1 && (
                <ArrowRight key={`arrow-${i}`} className="hidden md:block shrink-0 w-5 h-5 text-[#0072BC]/40" />
              )}
            </>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Outcome: measurable clinic behaviour change + evidence for scale funding.
        </p>
      </div>
    </section>

    {/* Primary channels */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Who We Work With" title="Primary partnership channels" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="stat-card">
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${c.colour}`}>{c.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-2 text-sm">{c.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Revenue mix */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading badge="Business Model" title="Diversified revenue with government as anchor" description="Revenue mix designed for sustainability — not reliant on any single funder." />
        <div className="stat-card">
          <div className="space-y-4">
            {revenueMix.map((r, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground font-medium">{r.label}</span>
                  <span className="text-muted-foreground font-semibold">{r.pct}</span>
                </div>
                <div className="h-2.5 rounded-full bg-[#F5F5F5] overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${r.colour}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: r.pct }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-5 border-t border-border pt-4">
            Public sector pricing: ~R2,500 per nurse trained (cost recovery, incl. materials). Private sector: ~R3,500. Grants subsidise underserved clinics.
          </p>
        </div>
      </div>
    </section>

    {/* Sponsorship tiers */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Sponsorship Tiers" title="Choose your level of impact" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`stat-card border-t-4 ${tier.colour}`}>
              <h3 className="font-display font-bold text-xl text-foreground mb-0.5">{tier.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">{tier.subtitle}</p>
              <p className="text-sm text-[#0072BC] font-semibold mb-4">{tier.investment}</p>
              <ul className="space-y-2">
                {tier.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="cta" size="lg">Request Partnership Proposal <ChevronRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Next steps */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading badge="How to Partner" title="Three steps to formalise collaboration" description="We invite pharmaceutical, wound care, and diabetic care companies to join us as strategic partners." />
        <div className="space-y-4">
          {[
            { step: "1", title: "Schedule a meeting", desc: "Connect with Mazizi Njokweni and the EDU-FOOT team to discuss your organisation's goals and explore the partnership tier that fits best." },
            { step: "2", title: "Review the programme blueprint", desc: "We'll share the full programme documentation, impact data, and co-design specific partnership deliverables tailored to your CSR or ESG objectives." },
            { step: "3", title: "Sign a Memorandum of Understanding", desc: "Formalise the collaboration with a clear MOU outlining responsibilities, reporting cadence, and co-branding arrangements." },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-[#0072BC] text-white font-display font-bold text-base flex items-center justify-center shrink-0">{s.step}</div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/contact">
            <Button variant="cta" size="lg">Start the Conversation <ChevronRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Partnership documents showcase */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="Partnership Materials" title="Step Ahead of Amputation" description="Our full suite of partnership documents — from introduction to investment detail." />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { src: welcomeToEdufoot, alt: "Welcome to EDU-FOOT overview", label: "Welcome to EDU-FOOT" },
            { src: partnershipProposal, alt: "EDU-FOOT partnership & sponsorship proposal", label: "Partnership & Sponsorship Proposal" },
            { src: sponsorshipProspectus, alt: "EDU-FOOT sponsorship prospectus", label: "Sponsorship Prospectus" },
            { src: budgetImage, alt: "EDU-FOOT budget overview", label: "Budget Overview" },
          ].map((doc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={doc.src} alt={doc.alt} className="w-full h-auto object-contain" />
              </div>
              <p className="text-xs font-semibold text-muted-foreground text-center mt-3 uppercase tracking-wider">{doc.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/contact">
            <Button variant="cta">Request the Proposal <ChevronRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Partners;
