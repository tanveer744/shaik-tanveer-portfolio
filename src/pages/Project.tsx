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
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-fast"
            >
              <ArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-foreground">
              {project.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-foreground">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="font-heading font-bold text-xl sm:text-2xl mb-6 text-foreground">
              Features
            </h2>
            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mb-12">
            <h2 className="font-heading font-bold text-xl sm:text-2xl mb-6 text-foreground">
              Links
            </h2>
            <div className="space-y-4">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:underline transition-fast"
              >
                <span>View Project</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:underline transition-fast"
              >
                <span>GitHub Repository</span>
              </a>
            </div>
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
      </main>
    </div>
  );
};

export default Project;
