'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import GitHubSection from '@/components/GitHubSection';
import Achievements from '@/components/Achievements';
import Training from '@/components/Training';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Preloader onComplete={() => setLoaded(true)} />
      
      {loaded && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="flex-grow flex flex-col"
        >
          <Navbar />
          {/* Main Scrollytelling Visualizer */}
          <div className="relative h-[600vh]">
            <ScrollyCanvas />
            <Overlay />
          </div>

          {/* Exact Replica Components below the scroll */}
          <div className="relative z-20 bg-background pt-20 pb-40 flex flex-col gap-32 border-t border-border flex-grow">
            <About />
            <Education />
            <Skills />
            <Projects />
            <GitHubSection />
            <Certifications />
            <Achievements />
            <Training />
            <Contact />
          </div>
          
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
