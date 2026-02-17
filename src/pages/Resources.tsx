import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { FileText, BookOpen, FlaskConical, Landmark, Newspaper, Download, Search } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Toolkits", "Guidelines", "Research", "Policy", "Press"];

const resources = [
  { category: "Toolkits", icon: <FileText className="w-5 h-5" />, title: "EDU-FOOT™ Screening Toolkit", desc: "Complete screening forms, assessment templates, and referral documentation." },
  { category: "Guidelines", icon: <BookOpen className="w-5 h-5" />, title: "Clinical Practice Guidelines", desc: "Evidence-based guidelines for diabetic foot assessment in primary care settings." },
  { category: "Research", icon: <FlaskConical className="w-5 h-5" />, title: "Amputation Prevention Outcomes Study", desc: "Published research on the effectiveness of nurse-led screening programmes." },
  { category: "Policy", icon: <Landmark className="w-5 h-5" />, title: "National Screening Framework", desc: "Policy recommendations for integrating foot screening into chronic disease management." },
  { category: "Guidelines", icon: <BookOpen className="w-5 h-5" />, title: "Wound Classification Guide", desc: "Wagner and University of Texas wound classification systems for clinical use." },
  { category: "Press", icon: <Newspaper className="w-5 h-5" />, title: "EDU-FOOT™ Media Kit", desc: "Press releases, fact sheets, and brand assets for media coverage." },
  { category: "Toolkits", icon: <FileText className="w-5 h-5" />, title: "Patient Education Materials", desc: "Multilingual patient information leaflets on diabetic foot self-care." },
  { category: "Research", icon: <FlaskConical className="w-5 h-5" />, title: "Cost-Effectiveness Analysis", desc: "Economic evaluation of preventive screening versus reactive treatment." },
  { category: "Policy", icon: <Landmark className="w-5 h-5" />, title: "POPIA Compliance Guide", desc: "Data protection guidelines for patient screening information management." },
];

const Resources = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? resources : resources.filter(r => r.category === filter);

  return (
    <div>
      <PageHero
        badge="Resource Library"
        title="Downloads, Guidelines & Research"
        description="Access toolkits, clinical guidelines, policy documents, and research publications."
      />
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((res, i) => (
              <motion.div
                key={`${res.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="stat-card group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">{res.icon}</div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{res.category}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{res.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{res.desc}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Download className="w-4 h-4" /> Download PDF
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
