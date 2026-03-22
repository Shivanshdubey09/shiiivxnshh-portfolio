'use client';

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code } from "lucide-react";

const infoCards = [
  { icon: MapPin, label: "Location", value: "India" },
  { icon: GraduationCap, label: "Education", value: "BTech CS (3rd Year)" },
  { icon: Code, label: "Focus", value: "Full Stack Development" },
];

const About = () => {
  return (
    <section id="about" className="section-padding gradient-bg z-20 relative bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">Who I Am</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 p-1 rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl overflow-hidden border border-primary/20">
                  <img
                    src="/profile.jpeg"
                    alt="Shivansh Dubey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 -left-4 w-8 h-[2px] bg-primary/40" />
              <div className="absolute top-1/2 -right-4 w-8 h-[2px] bg-primary/40" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground leading-relaxed mb-4 text-base">
              I am a dedicated Full Stack Developer with a strong foundation in both frontend interfaces and backend architecture. I thrive on the challenge of logical problem-solving and system design, constantly pushing the boundaries of what's possible on the web.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              My expertise lies in developing scalable applications using the <span className="text-primary font-semibold">JavaScript ecosystem and MERN stack</span>. I am passionate about continuously sharpening my programming skills and delivering robust, high-performance solutions that create meaningful digital experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  className="glass-card glow-hover p-5 text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <card.icon className="mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" size={22} />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{card.label}</p>
                  <p className="text-sm font-semibold text-foreground mt-1">{card.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
