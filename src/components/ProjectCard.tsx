import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  tagline: string;
  techStack: string[];
  highlight?: {
    text: string;
    link?: string;
    icon?: React.ReactNode;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  link: string;
  image?: string;
}

const ProjectCard = ({ title, tagline, techStack, highlight, metrics, link, image }: ProjectCardProps) => {
  return (
    <div className="card-shadow bg-card rounded-lg p-4 sm:p-6 group h-full flex flex-col">
      {image && (
        <div className="w-full h-40 sm:h-48 bg-muted rounded-md mb-4 sm:mb-6 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Project Visual</span>
        </div>
      )}
      
      <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 text-card-foreground group-hover:text-primary transition-fast">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base flex-grow">
        {tagline}
      </p>
      
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
        {techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
      
      {highlight && (
        <div className="flex items-start space-x-2 mb-4 p-3 bg-secondary/50 rounded-md">
          <div className="flex-shrink-0 mt-0.5">
            {highlight.icon || <Award size={16} className="text-primary" />}
          </div>
          {highlight.link ? (
            <a
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline leading-tight"
            >
              {highlight.text}
            </a>
          ) : (
            <span className="text-sm font-medium text-card-foreground leading-tight">
              {highlight.text}
            </span>
          )}
        </div>
      )}
      
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-2 sm:p-3 bg-secondary/30 rounded-md">
              <div className="font-bold text-base sm:text-lg text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground leading-tight">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-auto">
        <Link to={link} className="block">
          <Button variant="outline" size="sm" className="group/btn w-full sm:w-auto">
            View Project
            <ExternalLink size={14} className="ml-2 group-hover/btn:scale-110 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;