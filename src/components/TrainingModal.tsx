'use client';

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  link: string;
  description: string;
}

const TrainingModal = ({ isOpen, onClose, title, link, description }: TrainingModalProps) => {
  if (!isOpen) return null;

  // We convert the Google Drive link to a preview link for appending to iframe
  const previewLink = link.includes('/view') 
    ? link.replace('/view', '/preview').split('?')[0] 
    : link;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-background/95 backdrop-blur-md z-[100]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      
      <motion.div
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="glass-card max-w-5xl w-full h-[90vh] md:h-[85vh] overflow-hidden flex flex-col pointer-events-auto relative bg-background border border-border/50 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-muted transition-colors z-20 backdrop-blur-md shadow-md"
            aria-label="Close modal"
          >
            <X size={20} className="text-foreground" />
          </button>

          {/* Iframe for Google Drive PDF Preview */}
          <div className="flex-1 w-full bg-card overflow-hidden relative border-b border-border/20">
            <iframe 
              src={previewLink} 
              className="w-full h-full border-0 absolute inset-0" 
              title={title}
              allow="autoplay"
            />
          </div>

          {/* Content Panel */}
          <div className="p-6 md:p-8 bg-card flex flex-col gap-2 shrink-0">
            <h2 className="font-display text-xl font-bold text-foreground">
              {title}
            </h2>
            <div className="text-sm text-primary mb-2 font-medium">
              Industrial Training • Verified Credential
            </div>
            
            <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-3xl">
              {description}
            </p>

            <div className="mt-4">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
              >
                View Original Document <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TrainingModal;
