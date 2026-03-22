'use client';

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Certification } from "./Certifications";

interface CertificationModalProps {
  cert: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationModal = ({ cert, isOpen, onClose }: CertificationModalProps) => {
  if (!cert) return null;

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
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto relative bg-background border border-border/50 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-muted transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} className="text-foreground" />
              </button>

              {/* Certificate Image Frame */}
              <div className="w-full bg-white p-6 pb-0 flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="max-w-full h-auto max-h-[50vh] object-contain drop-shadow-md rounded-t-sm"
                />
              </div>

              {/* Content Panel */}
              <div className="p-6 md:p-8 bg-card flex flex-col gap-2">
                <h2 className="font-display text-xl font-bold text-foreground">
                  {cert.title}
                </h2>
                <div className="text-sm text-muted-foreground mb-2">
                  <span className={cert.issuer === 'Coursera' ? 'text-blue-500' : 'text-purple-500'}>{cert.issuer}</span> • Verified Credential
                </div>
                
                <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-lg">
                  {cert.description}
                </p>

                <div className="mt-4">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors inline-block"
                  >
                    View Certificate &rarr;
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

export default CertificationModal;
