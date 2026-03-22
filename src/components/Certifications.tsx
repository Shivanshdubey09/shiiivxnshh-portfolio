'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import CertificationModal from "./CertificationModal";

export interface Certification {
  title: string;
  issuer: string;
  issuerLogo: string;
  description: string;
  image: string;
  link: string;
}

const certificationsData: Certification[] = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "Coursera",
    issuerLogo: "C",
    description: "Successfully completed this certification demonstrating practical knowledge and hands-on understanding.",
    image: "/privacy-security.png",
    link: "https://drive.google.com/file/d/1dQiRdFM0S0cFo1xmJxL8kllQEkxPZVt9/view?usp=sharing"
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Coursera",
    issuerLogo: "C",
    description: "Successfully completed this certification demonstrating practical knowledge and hands-on understanding.",
    image: "/automata.png",
    link: "https://drive.google.com/file/d/1P_y59O2TzNryfnnEEZIh5MInWuSuehXY/view?usp=sharing"
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Udemy",
    issuerLogo: "U",
    description: "Successfully completed this certification demonstrating practical knowledge and hands-on understanding.",
    image: "/prompt-engineering.png",
    link: "https://drive.google.com/file/d/1dCmICH4nzKptMPoBDtFg9v00kymjp9MX/view?usp=sharing"
  },
  {
    title: "Master Generative AI & Generative AI Tools (ChatGPT & more)",
    issuer: "Udemy",
    issuerLogo: "U",
    description: "Successfully completed this certification demonstrating practical knowledge and hands-on understanding.",
    image: "/genai-master.png",
    link: "https://drive.google.com/file/d/12GXclTDlSeYzIF2Yarl6-yoRdpbbO1-I/view?usp=sharing"
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Coursera",
    issuerLogo: "C",
    description: "Successfully completed this certification demonstrating practical knowledge and hands-on understanding.",
    image: "/no-code-ai.png",
    link: "https://drive.google.com/file/d/1wnGuj5LsZaixcCCJze8XYSO0FHD7IIwb/view?usp=sharing"
  },
  {
    title: "Accenture Social Media Certification",
    issuer: "Coursera",
    issuerLogo: "C",
    description: "Successfully completed this certification demonstrating practical knowledge and hands-on understanding.",
    image: "/accenture-socialmedia.png",
    link: "https://drive.google.com/file/d/1Az8wguYrVMHozEYG6kSmPwyk8bazu1F7/view?usp=sharing"
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <>
      <section id="certifications" className="section-padding bg-background z-20 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="glow-text">Certifications</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {certificationsData.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  className="glass-card p-6 flex flex-col justify-between group cursor-pointer hover:border-primary/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedCert(cert)}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${cert.issuer === 'Coursera' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                        {cert.issuerLogo}
                      </div>
                      <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-snug mb-6 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1 group-hover:text-primary/80 transition-colors">
                    Click to preview &rarr;
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CertificationModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
};

export default Certifications;
