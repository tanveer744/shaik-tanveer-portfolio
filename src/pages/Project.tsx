import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface ProjectProps {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  projectUrl: string;
  githubUrl: string;
  screenshots?: string[];
}

const projects = {
  "scientific-calculator": {
    title: "🧮 Professional Calculator",
    description: "A modern, feature-rich web calculator with a sleek glass morphism design and advanced mathematical functions.",
    features: [
      "Basic Operations: Addition, Subtraction, Multiplication, Division",
      "Decimal point calculations",
      "Clear (AC) and Delete (Del) functions",
      "Percentage calculations (%)",
      "Trigonometric Functions: sin, cos, tan (in degrees)",
      "Logarithmic Functions: log₁₀",
      "Power Operations: x^y",
      "Square Root: √x",
      "Factorial: x!",
      "Mathematical Constants: π (Pi)",
      "Parentheses: For complex expressions",
      "Modern UI/UX: Glass Morphism Design",
      "Gradient Backgrounds",
      "Smooth Animations",
      "Responsive Design",
      "Dark Mode Support",
      "Interactive Feedback"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    projectUrl: "https://github.com/tanveer744/scientific-calculator",
    githubUrl: "https://github.com/tanveer744/scientific-calculator",
    screenshots: []
  },
  "road-rage-detection": {
    title: "🚗 Road Rage Detection System",
    description: "A two-stage AI system for detecting aggressive driving behavior in real-time or from recorded videos, helping improve traffic safety and law enforcement.",
    features: [
      "Two-stage Detection Pipeline",
      "Violence Detection Model (98% accuracy)",
      "Road Rage Detection Model (94% accuracy)",
      "Real-time Video Processing",
      "Transfer Learning Implementation",
      "Performance Metrics Visualization",
      "Live Detection Capability",
      "Dataset Integration",
      "Confusion Matrix Analysis"
    ],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Jupyter Notebook"],
    projectUrl: "https://github.com/tanveer744/road-rage-detection",
    githubUrl: "https://github.com/tanveer744/road-rage-detection",
    screenshots: []
  },
  "linkedin-automator": {
    title: "🤖 LinkedIn Automation Assistant",
    description: "A Tkinter-based desktop application for automating various LinkedIn tasks using Chrome sessions or manual login. Features include connection automation, post creation, feed engagement, and messaging.",
    features: [
      "Chrome Session and Credential Login",
      "Personalized Connection Requests",
      "AI-based Post Creation",
      "Smart Feed Engagement",
      "Custom Message Templates",
      "Human-like Behavior Simulation",
      "Local Data Processing",
      "Secure Authentication",
      "Multiple Task Automation",
      "Smart Delay System"
    ],
    techStack: ["Python", "Tkinter", "Selenium", "ChromeDriver", "Gemini API"],
    projectUrl: "https://github.com/tanveer744/linkedin-automator",
    githubUrl: "https://github.com/tanveer744/linkedin-automator",
    screenshots: []
  }
};

const Project = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Project Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Project
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
              >
                GitHub
              </a>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-12">
                <h2 className="font-heading font-bold text-xl sm:text-2xl mb-6 text-foreground">
                  Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;
