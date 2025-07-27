import ProjectCard from "./ProjectCard";
import { Award } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Road Rage Detection Using Deep Learning",
      tagline: "Built a CNN model achieving 94% accuracy for real-time driver behavior detection.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      highlight: {
        text: "IEEE Publication",
        link: "#", // Add actual IEEE link when available
        icon: <Award size={16} className="text-primary" />
      },
      link: "/project/road-rage-detection",
      image: "placeholder"
    },
    {
      title: "AI-Powered LinkedIn Automation Tool",
      tagline: "Automated LinkedIn job search with Selenium and Gemini API.",
      techStack: ["Python", "Tkinter", "Selenium", "Gemini API"],
      highlight: {
        text: "Session-based auth via Chrome DevTools"
      },
      link: "/project/linkedin-automation",
      image: "placeholder"
    },
    {
      title: "Vendor Management System",
      tagline: "Internship project for streamlining vendor operations.",
      techStack: ["Flutter", "Firebase", "REST APIs", "JavaScript"],
      highlight: {
        text: "Internship @ Dev Creations and Solutions (April 2025 – Present)"
      },
      link: "/project/vendor-management",
      image: "placeholder"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, automation, and full-stack development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;