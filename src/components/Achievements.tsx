'use client';

import { motion } from "framer-motion";
import { Trophy, Code, Cpu, Globe, Zap } from "lucide-react";

const achievements = [
  { icon: Globe, text: "Built multiple full stack applications using MERN stack" },
  { icon: Cpu, text: "Developed AI powered tools using APIs" },
  { icon: Code, text: "Experience designing REST APIs" },
  { icon: Zap, text: "Strong JavaScript development knowledge" },
  { icon: Trophy, text: "Building interactive web applications" },
];

const Achievements = () => {
  return (
    <section className="section-padding gradient-bg bg-background z-20 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">Highlights</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className="glass-card glow-hover p-6 flex items-center gap-5 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all">
                <a.icon className="text-primary" size={20} />
              </div>
              <p className="text-sm md:text-base text-foreground font-medium">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
