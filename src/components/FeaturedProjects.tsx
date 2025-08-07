import ProjectCard from "./ProjectCard";
import { Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Scientific Calculator",
      tagline: "A feature-rich scientific calculator built with React and TypeScript",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      highlight: {
        text: "GitHub Repository",
        link: "https://github.com/tanveer744/scientific-calculator",
        icon: <ExternalLink size={16} className="text-primary" />
      },
      metrics: [
        { label: "Features", value: "20+" },
        { label: "Language", value: "TypeScript" }
      ],
      projectLink: "/project/scientific-calculator",
      githubLink: "https://github.com/tanveer744/scientific-calculator",
      image: "/scientific_calculator.png"
    },
    {
      title: "Road Rage Detection",
      tagline: "Built a CNN model achieving 94% accuracy for real-time driver behavior detection.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      highlight: {
        text: "GitHub Repository",
        link: "https://github.com/tanveer744/road-rage-detection",
        icon: <ExternalLink size={16} className="text-primary" />
      },
      metrics: [
        { label: "Model Accuracy", value: "94%" },
        { label: "Training Dataset", value: "2200+" }
      ],
      projectLink: "/project/road-rage-detection",
      githubLink: "https://github.com/tanveer744/road-rage-detection",
      image: "/road_rage.png"
    },
    {
      title: "LinkedIn Automator",
      tagline: "Automated LinkedIn job search with Selenium and Gemini API.",
      techStack: ["Python", "Tkinter", "Selenium", "Gemini API"],
      highlight: {
        text: "GitHub Repository",
        link: "https://github.com/tanveer744/linkedin-automator",
        icon: <ExternalLink size={16} className="text-primary" />
      },
      metrics: [
        { label: "Time Saved", value: "80%" },
        { label: "Automation Rate", value: "95%" }
      ],
      projectLink: "/project/linkedin-automator",
      githubLink: "https://github.com/tanveer744/linkedin-automator",
      image: "/linkedin_automator.png"
    }
];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A showcase of my work in AI, automation, and full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Link to={project.projectLink} key={project.title}>
              <ProjectCard
                {...project}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;