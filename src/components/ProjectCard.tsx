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
  link: string;
  image?: string;
}

const ProjectCard = ({ title, tagline, techStack, highlight, link, image }: ProjectCardProps) => {
  return (
    <div className="card-shadow bg-card rounded-lg p-6 group">
      {image && (
        <div className="w-full h-48 bg-muted rounded-md mb-6 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Project Visual</span>
        </div>
      )}
      
      <h3 className="font-heading font-bold text-xl mb-3 text-card-foreground group-hover:text-primary transition-fast">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {tagline}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
      
      {highlight && (
        <div className="flex items-center space-x-2 mb-4 p-3 bg-secondary/50 rounded-md">
          {highlight.icon || <Award size={16} className="text-primary" />}
          {highlight.link ? (
            <a
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              {highlight.text}
            </a>
          ) : (
            <span className="text-sm font-medium text-card-foreground">
              {highlight.text}
            </span>
          )}
        </div>
      )}
      
      <Link to={link}>
        <Button variant="outline" size="sm" className="group/btn">
          View Project
          <ExternalLink size={14} className="ml-2 group-hover/btn:scale-110 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};

export default ProjectCard;