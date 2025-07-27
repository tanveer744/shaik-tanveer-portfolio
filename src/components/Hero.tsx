import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-foreground leading-tight">
          SHAIK TANVEER
          <br />
          <span className="hero-gradient bg-clip-text text-transparent">LOHARE</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-medium px-2">
          AI & Full-Stack Developer | Turning Concepts into Scalable Software
        </p>
        
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Computer Science undergraduate with a passion for building clean, scalable, and user-friendly software. 
          Experienced in automation, frontend/backend development, and applied AI. Seeking a software engineering 
          role where I can contribute to impactful projects and grow in a collaborative team environment.
        </p>
        
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12 px-4">
          <a
            href="mailto:shaiktanveer07404@gmail.com"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-fast"
          >
            <Mail size={18} className="sm:hidden" />
            <Mail size={20} className="hidden sm:block" />
            <span className="text-sm sm:text-sm break-all sm:break-normal">shaiktanveer07404@gmail.com</span>
          </a>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/shaik-tanveer-lohare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-fast"
            >
              <Linkedin size={18} className="sm:hidden" />
              <Linkedin size={20} className="hidden sm:block" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/tanveer744"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-fast"
            >
              <Github size={18} className="sm:hidden" />
              <Github size={20} className="hidden sm:block" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
          <Link to="/work" className="w-full sm:w-auto">
            <Button size="lg" className="group w-full sm:w-auto">
              View My Work
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a 
            href="/resume/Shaik-Tanveer-Lohare-Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="lg" variant="secondary" className="group w-full sm:w-auto">
              <Download size={16} className="mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;