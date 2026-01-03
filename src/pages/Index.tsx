import { Download, Linkedin, Mail, Github, Phone } from "lucide-react";
import { useRef, useState } from "react";
import profileImage from "@/assets/portrait.jpeg";
import hoverImage from "@/assets/laughing.jpeg";
import staticNoise from "@/assets/static-noise.wav";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayStatic = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    void audioRef.current.play();
  };

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
          {isHovered ? (
            <button
              type="button"
              onClick={handlePlayStatic}
              className="absolute inset-0 flex items-center justify-center bg-black/40 text-white transition-opacity"
              aria-label="Play call static sound"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur">
                <Phone className="w-7 h-7" />
              </span>
            </button>
          ) : null}
        </div>
        <audio ref={audioRef} src={staticNoise} preload="auto" />

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
            href="/cv.pdf"
            download
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
