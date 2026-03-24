'use client';

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "ExamGen AI",
    description: "AI-powered exam paper generator using Gemini API with teacher authentication and smart question generation.",
    longDescription: "ExamGen AI is a comprehensive exam paper generation platform that leverages Google's Gemini API to create intelligent, customized exam questions. The system features secure teacher authentication, allowing educators to generate exam papers tailored to specific topics, difficulty levels, and learning objectives. Built with a modern tech stack, it provides a seamless experience for creating, managing, and exporting professional exam papers with AI-generated questions that maintain academic rigor.",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    features: [
      "AI-powered question generation using Gemini API",
      "Teacher authentication and authorization system",
      "Customizable exam templates and formats",
      "MongoDB database for storing questions and exams",
      "Export functionality for multiple formats",
      "Topic-based question categorization"
    ],
    github: "https://github.com/Shivanshdubey09",
    liveDemo: "https://examgen-ai-demo.vercel.app",
    image: "/examgen-preview.png",
    featured: true,
  },
  {
    title: "Automated Agriculture System",
    description: "IoT-based smart farming system for irrigation automation and real-time environmental monitoring.",
    longDescription: "An advanced IoT-based smart farming system designed to modernize agricultural practices. This project integrates automated irrigation control with real-time environmental monitoring to optimize water usage and crop health. Additionally, it features farmer assistance via chatbot integration, providing immediate, data-driven support and insights directly to users.",
    tech: ["PHP", "JavaScript", "HTML", "CSS", "IoT"],
    features: [
      "Automated irrigation control system",
      "Real-time environmental monitoring",
      "Farmer assistance via chatbot integration"
    ],
    github: "https://github.com/Shivanshdubey09",
    liveDemo: "#",
    image: "/agro-preview.png",
    featured: true,
  },
  {
    title: "Pathfinding Visualizer",
    description: "Interactive visualization of pathfinding algorithms like Dijkstra with step-by-step animation.",
    longDescription: "An educational pathfinding algorithm visualizer that brings algorithms to life through interactive animations. Users can watch step-by-step how different pathfinding algorithms like Dijkstra's, A*, and BFS navigate through grids to find optimal paths. The tool features customizable grid sizes, obstacle placement, and speed controls, making it perfect for students and developers learning about graph algorithms and pathfinding techniques.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    features: [
      "Step-by-step algorithm visualization",
      "Interactive grid with obstacle placement",
      "Multiple algorithm support (Dijkstra, A*, BFS)",
      "Adjustable animation speed",
      "Educational tooltips and explanations",
      "Responsive design for all devices"
    ],
    github: "https://github.com/Shivanshdubey09",
    liveDemo: "https://path-finding-algorithm-visualizer-eight.vercel.app/",
    image: "/pathfinding-preview.png",
    featured: false,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="section-padding bg-background z-20 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">What I Built</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="glow-text">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="glass-card glow-hover p-6 flex flex-col group relative overflow-hidden cursor-pointer bg-background"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Top accent */}
                <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />

                <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">{project.description}</p>

                <div className="mb-5">
                  <p className="text-xs text-primary/70 mb-2 uppercase tracking-wider font-semibold">Key Features</p>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto relative z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-transparent border border-primary text-primary hover:bg-primary/10 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground border border-transparent hover:bg-primary/90 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
