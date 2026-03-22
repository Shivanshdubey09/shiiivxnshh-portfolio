'use client';

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology – Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "Aug 2023 – Present",
    cgpa: "CGPA: 6.92",
    description:
      "Pursuing BTech in CSE with specialization in Full Stack Web Development. Built a strong foundation in Data Structures, Web Technologies, and Software Development using React, Node.js, and MongoDB.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "St. Xavier's Public School",
    location: "Korba, Chhattisgarh",
    period: "Completed",
    description:
      "Completed higher secondary education with a focus on Science and Mathematics, building a strong analytical foundation.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background z-20 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">My Journey</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="glass-card glow-hover p-6 md:p-8 ml-12 md:ml-16 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[calc(3rem+6px)] md:-left-[calc(4rem+6px)] top-8 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />

                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground leading-tight">{edu.degree}</h3>
                    <p className="text-primary text-sm font-semibold mt-1">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary/60" /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-primary/60" /> {edu.location}
                  </span>
                  {edu.cgpa && (
                    <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">{edu.cgpa}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
