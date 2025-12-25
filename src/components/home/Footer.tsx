import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-background/70 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-foreground text-xs">
          © 2025 Dheeraj • Designing calm, sustainable digital experiences
        </p>

        <div className="flex gap-6 text-foreground">
          <a aria-label="GitHub" className="hover:text-foreground transition">
            <Github size={20} />
          </a>
          <a aria-label="LinkedIn" className="hover:text-foreground transition">
            <Linkedin size={20} />
          </a>
          <a aria-label="Email" className="hover:text-foreground transition">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
