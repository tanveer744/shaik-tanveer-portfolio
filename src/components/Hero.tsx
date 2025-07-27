import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground">
          SHAIK TANVEER
          <br />
          <span className="hero-gradient bg-clip-text text-transparent">LOHARE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
          AI & Full-Stack Developer | Turning Concepts into Scalable Software
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Computer Science undergraduate with a passion for building clean, scalable, and user-friendly software. 
          Experienced in automation, frontend/backend development, and applied AI. Seeking a software engineering 
          role where I can contribute to impactful projects and grow in a collaborative team environment.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:shaiktanveer07404@gmail.com"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-fast"
          >
            <Mail size={20} />
            <span className="text-sm">shaiktanveer07404@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/shaik-tanveer-lohare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-fast"
          >
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/tanveer744"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-fast"
          >
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/work">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="/resume/Shaik-Tanveer-Lohare-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="group">
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