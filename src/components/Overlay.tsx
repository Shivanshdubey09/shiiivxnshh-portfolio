'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from "react";

const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Full Stack Web Developer",
];

export default function Overlay() {
  const { scrollYProgress } = useScroll();
  
  // Opacity transforms for each text section
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], ['0%', '-30%']);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], ['10%', '-30%']);

  const opacity3 = useTransform(scrollYProgress, [0.65, 0.7, 0.9, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 1], ['10%', '-30%']);

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect from the old Hero
  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 60 : 130
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center">
      
      {/* Section 1 */}
      <motion.div 
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-8 -mb-[100vh]"
        style={{ opacity: opacity1, y: y1 }}
      >
        <p className="text-primary font-mono text-sm md:text-base mb-6 tracking-[0.3em] uppercase drop-shadow-xl">
          {"<Hello World />"}
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] drop-shadow-2xl text-center">
          Hi, I'm{" "}
          <span className="text-gradient">Shivansh</span>
        </h1>
        <div className="text-xl md:text-3xl mb-8 h-10 font-display drop-shadow-xl">
          <span className="text-foreground">I'm a </span>
          <motion.span
            className="text-primary font-bold drop-shadow-md"
            key={roleIndex}
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {text}
          </motion.span>
          <span className="border-r-2 border-primary ml-0.5 animate-typing-cursor">&nbsp;</span>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-start px-10 md:px-32 -mb-[100vh]"
        style={{ opacity: opacity2, y: y2 }}
      >
        <h2 className="font-display text-4xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-2xl max-w-2xl leading-[1.1]">
          I build <span className="text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">scalable</span> web apps and <span className="text-accent drop-shadow-[0_0_15px_hsl(var(--accent)/0.5)]">AI-powered</span> tools.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-end px-10 md:px-32"
        style={{ opacity: opacity3, y: y3 }}
      >
        <h2 className="font-display text-4xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-2xl max-w-2xl text-right leading-[1.1]">
          Passionate about the <span className="text-gradient">MERN</span> stack.
        </h2>
      </motion.div>
      
    </div>
  );
}
