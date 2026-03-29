import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Users, Eye, Hand, Activity, Zap, ClipboardCheck, Shield, FileText, CheckCircle, Flame, Thermometer, GitMerge } from "lucide-react";
import infographic from "@/assets/EDU-FOOT_INFORGRAPHIC.png";
import redFlagsPoster from "@/assets/EDU-FOOT.RED_FLAGS_FINAL.A5.Poster.25.01.2026.png";

const steps = [
  {
    icon: <Users className="w-8 h-8" />,
    label: "ASK",
    time: "~30 seconds",
    title: "Patient History",
    colour: "border-[#0072BC] bg-[#E8F4FD] text-[#0072BC]",
    headerColour: "bg-[#0072BC]",
    checklist: [
      "Pain / numbness / tingling?",
      "Colour / shape / temperature change?",
      "Non-healing wound?",
      "Shoe problems?",
      "Previous ulcer / amputation?",
    ],
    desc: "Gather comprehensive medical history focused on diabetic foot risk factors — takes under 30 seconds with the standardised prompt card.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    label: "LOOK",
    time: "~60 seconds",
    title: "Visual Inspection",
    colour: "border-[#4CAF50] bg-[#E8F5E9] text-[#2E7D32]",
    headerColour: "bg-[#4CAF50]",
    checklist: [
      "Skin, nails, deformity (claw, bunion, Charcot)",
      "Red flags: blood-stained callus, black discolouration, blister, swelling",
      "DP & PT pulse present/absent",
      "Temperature: warm, cool, cold",
    ],
    desc: "Systematic visual examination of both feet for deformities, skin changes, calluses, ulcers, nail pathology, and signs of infection.",
  },
  {
    icon: <Hand className="w-8 h-8" />,
    label: "FEEL",
    time: "~60 seconds",
    title: "Palpation",
    colour: "border-[#FFC107] bg-yellow-50 text-yellow-700",
    headerColour: "bg-[#FFC107]",
    checklist: [
      "DP & PT pulse present/absent",
      "Temperature: warm, cool, cold",
      "Capillary refill time",
      "Oedema or structural abnormalities",
    ],
    desc: "Assess dorsalis pedis and posterior tibial pulses, skin temperature, and check for oedema or structural abnormalities by hand.",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    label: "TEST",
    time: "~60 seconds",
    title: "Sensory Testing",
    colour: "border-[#FF9800] bg-orange-50 text-orange-700",
    headerColour: "bg-[#FF9800]",
    checklist: [
      "Use 10g monofilament",
      "Test 1st, 3rd, and 5th toes — felt / not felt",
      "Ipswich Touch Test (no monofilament alternative)",
      "128Hz tuning fork for vibration sense",
    ],
    desc: "Perform 10g monofilament test at standardised plantar sites. The Ipswich Touch Test is a validated no-equipment alternative for resource-limited settings.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    label: "ACT",
    time: "~30 seconds",
    title: "Risk Classification & Action",
    colour: "border-[#F44336] bg-red-50 text-red-700",
    headerColour: "bg-[#F44336]",
    checklist: [
      "Classify risk: Green / Yellow / Orange / Red",
      "Plan action: Annual / 6-Month / 3-Month / Urgent Referral",
      "Document findings on standardised form",
      "Initiate WhatsApp referral if urgent",
    ],
    desc: "Stratify risk, initiate the appropriate care pathway, document findings, and refer high-risk patients within 24 hours using the WhatsApp referral template.",
  },
];

const riskMatrix = [
  { level: "Green", colour: "#4CAF50", textColour: "text-white", bgColour: "bg-[#4CAF50]", label: "Low Risk", action: "Continue self-care education", followUp: "Annual screening" },
  { level: "Yellow", colour: "#FFC107", textColour: "text-gray-900", bgColour: "bg-[#FFC107]", label: "Moderate Risk", action: "Enhanced monitoring + footwear review", followUp: "6-month follow-up" },
  { level: "Orange", colour: "#FF9800", textColour: "text-white", bgColour: "bg-[#FF9800]", label: "High Risk", action: "Active wound care + podiatry referral", followUp: "3-month follow-up" },
  { level: "Red", colour: "#F44336", textColour: "text-white", bgColour: "bg-[#F44336]", label: "Urgent", action: "Urgent specialist referral within 24 hours", followUp: "Immediate" },
];

const extras = [
  { icon: <ClipboardCheck className="w-6 h-6" />, title: "Documentation System", desc: "Standardised A5 assessment forms ensure consistent, auditable data capture across all clinic sites — paper and digital." },
  { icon: <Shield className="w-6 h-6" />, title: "Quality Assurance", desc: "Built-in OSCE competency validation ensures every nurse meets clinical screening standards before independent deployment." },
  { icon: <FileText className="w-6 h-6" />, title: "WhatsApp Referral Pathway", desc: "Structured referral templates with photo guidance and specialist directory — clear escalation with <24-hour turnaround for urgent cases." },
];

const Protocol = () => (
  <div>
    <PageHero
      badge="Clinical Methodology"
      title="The EDU-FOOT™ Screening Protocol"
      description="A structured, evidence-based ≤5-minute screening workflow designed for primary healthcare nurses in resource-limited South African clinics."
    />

    {/* Protocol intro callout */}
    <section className="bg-[#E8F4FD] border-b border-[#0072BC]/20 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
          {[
            { label: "Total screening time", value: "≤5 minutes" },
            { label: "Monofilament predictive value", value: "90%" },
            { label: "Works without electricity", value: "Yes" },
            { label: "Validated for low-resource clinics", value: "Yes" },
          ].map((item, i) => (
            <div key={i} className="py-2">
              <div className="font-display font-bold text-xl text-[#0072BC]">{item.value}</div>
              <div className="text-xs text-[#1A3A5C] mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 5-step workflow */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="5-Step Workflow" title="ASK → LOOK → FEEL → TEST → ACT" description="Each step is colour-coded to its risk level and includes a built-in checklist — no prior specialist training required." />
        <div className="space-y-5 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="stat-card overflow-hidden p-0"
            >
              <div className={`px-5 py-3 flex items-center gap-3 ${step.headerColour}`}>
                <span className="text-white font-display font-bold text-sm tracking-widest uppercase">Step {i + 1}: {step.label}</span>
                <span className="ml-auto text-white/80 text-xs">{step.time}</span>
              </div>
              <div className="p-5 flex gap-5 items-start">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${step.colour}`}>
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-1">
                    {step.checklist.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-[#4CAF50] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Infographic visual */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="Visual Reference" title="The protocol at a glance" description="A single-page visual summary of the full ASK–LOOK–FEEL–TEST–ACT workflow for clinic use." />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-md mx-auto">
          <img src={infographic} alt="EDU-FOOT ASK–LOOK–FEEL–TEST–ACT protocol infographic" className="w-full rounded-2xl shadow-lg" />
        </motion.div>
      </div>
    </section>

    {/* Risk classification matrix */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="ACT Step Detail" title="Risk Classification Matrix" description="The ACT step produces one of four risk levels — each with a defined action and follow-up interval." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {riskMatrix.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <div className={`${r.bgColour} px-4 py-3`}>
                <div className={`font-display font-bold text-lg ${r.textColour}`}>{r.level}</div>
                <div className={`text-xs font-medium ${r.textColour} opacity-90`}>{r.label}</div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-xs text-foreground font-medium mb-2">{r.action}</p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold">Follow-up:</span> {r.followUp}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6 max-w-xl mx-auto">
          Risk classification colours are consistent across all EDU-FOOT materials — digital, print, posters, and referral forms.
          Colour is always paired with a text label; never relied upon alone.
        </p>
      </div>
    </section>

    {/* First-line care */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="First-Line Care" title="What nurses can manage vs. refer" description="EDU-FOOT trains nurses to act immediately on common findings — and to escalate correctly when specialist care is needed." />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="stat-card border-t-4 border-[#4CAF50]">
            <div className="text-xs font-bold text-[#4CAF50] uppercase tracking-wider mb-4">Nurse can manage</div>
            <ul className="space-y-3">
              {[
                ["Dry skin", "Urea-based moisturiser; educate on daily application"],
                ["Callus", "Never cut — document, educate, refer for podiatry debridement"],
                ["Nail care", "Cut straight, avoid sides; refer if ingrown or fungal"],
                ["Wound first aid", "Saline irrigation only — no antiseptics, non-adherent dressings"],
                ["Patient education", "Footwear advice, daily foot inspection technique, warning signs"],
              ].map(([condition, action], j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                  <span><span className="font-semibold text-foreground">{condition}:</span> <span className="text-muted-foreground">{action}</span></span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="stat-card border-t-4 border-[#F44336]">
            <div className="text-xs font-bold text-[#F44336] uppercase tracking-wider mb-4">APP Referral Algorithm</div>
            <div className="space-y-3">
              {[
                { icon: <Flame className="w-4 h-4" />, label: "Hot Foot", route: "Infection dominant", dest: "General / Orthopaedic Surgery", colour: "text-[#F44336] bg-red-50" },
                { icon: <Thermometer className="w-4 h-4" />, label: "Cold Foot", route: "Ischaemia dominant", dest: "Vascular Surgery", colour: "text-[#0072BC] bg-[#E8F4FD]" },
                { icon: <GitMerge className="w-4 h-4" />, label: "Mixed Presentation", route: "Infection + Ischaemia", dest: "Both referrals — urgent", colour: "text-[#FF9800] bg-orange-50" },
              ].map((item, j) => (
                <div key={j} className={`flex items-start gap-3 rounded-lg p-3 ${item.colour}`}>
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-sm">{item.label}</div>
                    <div className="text-xs opacity-80">{item.route} → <span className="font-medium">{item.dest}</span></div>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pt-2">All Red-risk referrals must be completed within 24 hours using the WhatsApp tele-referral template with standardised photo documentation.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <img src={redFlagsPoster} alt="EDU-FOOT Red Flags — Urgent Action Required poster" className="w-full rounded-2xl shadow-md" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Supporting systems */}
    <section className="section-padding bg-[linear-gradient(180deg,#E8F4FD_0%,#FFFFFF_100%)]">
      <div className="container mx-auto">
        <SectionHeading badge="Supporting Systems" title="Beyond the screening" description="The protocol sits inside a complete implementation ecosystem — toolkit, digital tools, and 12-month support." />
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
              <div className="w-12 h-12 mx-auto rounded-lg bg-[#E8F4FD] text-[#0072BC] flex items-center justify-center mb-4">{item.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Evidence base callout */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-2xl bg-[#1A3A5C] p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">Evidence Base</p>
          <h3 className="font-display text-xl font-bold text-white mb-4">Built on published clinical evidence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { stat: "45–85%", label: "Ulcer incidence reduction with structured screening" },
              { stat: "90%", label: "Monofilament sensitivity for predicting ulceration" },
              { stat: "<5 min", label: "Total ASK–LOOK–FEEL–TEST–ACT screening time" },
              { stat: "80%", label: "Blood-stained callus as ulcer predictor" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/8 p-4 text-center">
                <div className="font-display text-xl font-bold text-white mb-1">{s.stat}</div>
                <div className="text-xs text-white/60 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/50">References: Singh et al. (2005), Bakker et al. (2016), Adler et al. (1997), Rayman et al. (2011), Schaper et al. (2016), Njokweni (2024)</p>
        </div>
      </div>
    </section>
  </div>
);

export default Protocol;
