import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 relative overflow-hidden bg-background z-20">
      <div className="absolute top-0 left-1/3 w-40 h-40 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-[60px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 Shivansh Dubey. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Shivanshdubey09" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shiiivxnshh/" },
              { icon: Mail, href: "mailto:shivanshdubey1009@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_10px_hsl(var(--primary)/0.15)] transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
