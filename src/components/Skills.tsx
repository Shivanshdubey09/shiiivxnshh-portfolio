'use client';

import { motion } from "framer-motion";

const skillIcons: Record<string, string> = {
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  "Apache": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Microsoft SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Netlify": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  "NPM": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  "Nodemon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
  "Render": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Canva": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
};

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "C", "C++", "C#", "Java", "Python", "PHP", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["React", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", ".NET", "Apache", "JWT", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Microsoft SQL Server"],
  },
  {
    title: "DevOps & Hosting",
    skills: ["Git", "GitHub", "Netlify", "Vercel", "Render", "NPM", "Nodemon"],
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Canva", "VS Code", "Postman"],
  },
];

const techStack = [
  "React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS", "Python", "PostgreSQL", "Git", "GitHub"
];

const SkillBadge = ({ skill }: { skill: string }) => {
  const icon = skillIcons[skill];
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-muted text-muted-foreground border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:shadow-[0_0_12px_hsl(var(--primary)/0.1)] transition-all duration-300 cursor-default">
      {icon && <img src={icon} alt={skill} className="w-4 h-4" />}
      {skill}
    </span>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding gradient-bg bg-background z-20 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">What I Use</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="glow-text">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glass-card glow-hover p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="font-display text-lg font-bold mb-5 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Visualization */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xl font-semibold mb-10 text-muted-foreground">Core Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                className="glass-card glow-hover px-6 py-3 font-display text-sm font-bold cursor-default text-foreground inline-flex items-center gap-2"
                whileHover={{ scale: 1.1, y: -3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {skillIcons[tech] && <img src={skillIcons[tech]} alt={tech} className="w-5 h-5" />}
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
