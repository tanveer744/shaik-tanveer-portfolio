import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedNavItemProps {
  icon: ReactNode;
  title: string;
  href: string;
  className?: string;
}

export function AnimatedNavItem({
  icon,
  title,
  href,
  className,
}: AnimatedNavItemProps) {
  return (
    <li className={cn(
      "relative group h-12 flex items-center px-4 rounded-lg overflow-hidden transition-all duration-300 hover:w-auto",
      "bg-background/80 backdrop-blur-sm hover:bg-background/90",
      "w-12 hover:w-auto",
      className
    )}>
      <a 
        href={href}
        className="w-full h-full flex items-center gap-3 text-foreground/80 hover:text-foreground"
      >
        <span className="min-w-5 min-h-5 flex items-center justify-center group-hover:scale-75 transition-transform duration-300">
          {icon}
        </span>
        <span className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 origin-left transition-all duration-300">
          {title}
        </span>
      </a>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 -z-20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
    </li>
  );
}
