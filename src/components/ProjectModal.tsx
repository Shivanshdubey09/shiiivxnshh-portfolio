'use client';

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  liveDemo: string;
  image: string;
  featured: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-card max-w-3xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto relative bg-background"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} className="text-foreground" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Project Image */}
                <div className="mb-8 -mx-8 md:-mx-12 -mt-8 md:-mt-12">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover rounded-t-xl"
                  />
                </div>

                {/* Header */}
                <div className="mb-8">
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 glow-text">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-bold rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-border/50">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all flex items-center gap-2">
                    <ExternalLink size={18} /> View Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2">
                    <Github size={18} /> View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
