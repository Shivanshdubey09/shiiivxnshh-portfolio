'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, Download } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Shivanshdubey09" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shiiivxnshh/" },
  { icon: Mail, label: "Email", href: "mailto:shivanshdubey1009@gmail.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:shivanshdubey1009@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="section-padding bg-background z-20 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">Let's Connect</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="glow-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto flex-col-reverse md:flex-row">
          
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6 md:order-1 order-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold mb-2 block">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 placeholder:text-muted-foreground/40"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold mb-2 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 placeholder:text-muted-foreground/40 resize-none"
                placeholder="Your message"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all font-mono shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          <motion.div
            className="flex flex-col gap-6 justify-center md:order-2 order-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card glow-hover p-8 text-center flex flex-col items-center">
              <Download className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-display text-lg font-bold mb-2">Download Resume</h3>
              <p className="text-muted-foreground text-sm mb-5">Get a copy of my latest resume</p>
              
              <a 
                href="/resume.pdf" 
                download="Shivansh_Dubey_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
              >
                Download CV
              </a>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-display text-lg font-bold mb-5">Connect With Me</h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:bg-primary/15 transition-all">
                      <s.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
