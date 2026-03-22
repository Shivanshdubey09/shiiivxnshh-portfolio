'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import TrainingModal from "./TrainingModal";

const Training = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const trainingTitle = "Summer Training Certificate";
  const trainingDesc = "Successfully completed comprehensive industrial training. The training involved hands-on experience and practical implementations of industry-standard technologies and methodologies.";
  const trainingLink = "https://drive.google.com/file/d/1Tn_JQn897NANckofdF0coWZKluwPsirl/view?usp=drive_link";

  return (
    <>
      <section id="training" className="section-padding bg-background z-20 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">Professional Growth</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Industrial <span className="glow-text">Training</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card glow-hover p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-between cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
                  <Award size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {trainingTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mb-4">
                    {trainingDesc}
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-bold tracking-wider">Industrial</span>
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-bold tracking-wider">Practical Experience</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 mt-6 md:mt-0 flex flex-col items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                >
                  <ExternalLink size={18} /> View Certificate
                </button>
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1 group-hover:text-primary/80 transition-colors">
                  Click to preview &rarr;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrainingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={trainingTitle}
        description={trainingDesc}
        link={trainingLink}
      />
    </>
  );
};

export default Training;
