import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you for your inquiry. We'll respond within 48 hours.");
    setForm({ name: "", email: "", organisation: "", subject: "", message: "" });
  };

  return (
    <div>
      <PageHero
        badge="Get in Touch"
        title="Contact EDU-FOOT™ NPC"
        description="Partnership inquiries, training registration, media requests — we're here to help."
      />
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <SectionHeading badge="Reach Us" title="Contact Information" centered={false} />
              <div className="stat-card border-t-4 border-[#0072BC] mb-2">
                <div className="text-xs font-bold text-[#0072BC] uppercase tracking-wider mb-1">Direct Contact</div>
                <p className="text-sm font-semibold text-foreground">Mazizi Njokweni</p>
                <p className="text-xs text-muted-foreground">Founder & Director · Senior Podiatrist, Leratong Hospital</p>
              </div>
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "mazizinjokweni@gmail.com" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+27 74 463 9939" },
                { icon: <MapPin className="w-5 h-5" />, label: "Office", value: "Leratong Hospital, Mogale City, Gauteng" },
                { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "+27 74 463 9939" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{c.label}</div>
                    <div className="text-sm text-foreground font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="stat-card mt-6">
                <p className="text-xs text-muted-foreground">All communications are handled in accordance with POPIA. Your personal information will not be shared with third parties.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeading badge="Send a Message" title="Inquiry Form" centered={false} />
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="stat-card space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email Address *</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@organisation.co.za" className="bg-background" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Organisation</label>
                    <Input value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} placeholder="Your organisation" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                    <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Partnership / Training / Media" className="bg-background" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help..." rows={5} className="bg-background" />
                </div>
                <Button variant="cta" size="lg" type="submit">
                  <Send className="w-4 h-4" /> Send Inquiry
                </Button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
