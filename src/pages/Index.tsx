import { Download, Linkedin, Mail, Github } from "lucide-react";
import { useState } from "react";
import profileImage from "@/assets/portrait.jpeg";
import hoverImage from "@/assets/laughing.jpeg";
import cvFile from "@/assets/cv.pdf";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-12 relative">
      <div className="flex flex-col items-center gap-8 max-w-md text-center">
        {/* Profile Photo with Hover Effect */}
        <div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? hoverImage : profileImage}
            alt="Profile photo"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Name & Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Florian Brunner
          </h1>
          <p className="text-muted-foreground">
          Tech enthusiast · Sportsman · Young dad
          </p>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-4">
          <a
            href={cvFile}
            download="Florian-Brunner-CV.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-6 pt-4">
          <a
            href="https://www.linkedin.com/in/florianbrunner/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/flobrunner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:brunnerflorian85@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <footer className="absolute bottom-4 right-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Florian Brunner. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
