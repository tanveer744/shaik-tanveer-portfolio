import React from 'react';
import { cn } from "@/lib/utils";

export interface GradientIconProps {
  icon: React.ReactNode;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  className?: string;
}

export function GradientIcon({ 
  icon, 
  title, 
  gradientFrom, 
  gradientTo,
  className 
}: GradientIconProps) {
  return (
    <li 
      className={cn(
        "relative w-15 h-15 bg-card",
        "shadow-lg shadow-foreground/10 rounded-full",
        "cursor-pointer flex items-center justify-center",
        "transition-all duration-500 hover:w-[180px]",
        "group",
        className
      )}
      style={{
        '--gradient-from': gradientFrom,
        '--gradient-to': gradientTo,
      } as React.CSSProperties}
    >
      {/* Gradient background on hover */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full opacity-0",
          "bg-gradient-to-br from-[--gradient-from] to-[--gradient-to]",
          "transition-opacity duration-500 group-hover:opacity-100"
        )}
      />
      
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute top-2.5 w-full h-full rounded-full opacity-0",
          "bg-gradient-to-br from-[--gradient-from] to-[--gradient-to]",
          "transition-opacity duration-500 group-hover:opacity-50 blur-md -z-10",
          "group-hover:shadow-[0_0_15px_var(--gradient-from)]"
        )}
      />
      
      {/* Icon */}
      <div className="text-muted-foreground group-hover:scale-0 transition-transform duration-500 group-hover:delay-0 delay-250">
        {React.cloneElement(icon as React.ReactElement, {
          className: cn("w-6 h-6", (icon as React.ReactElement)?.props?.className)
        })}
      </div>
      
      {/* Text */}
      <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm font-medium uppercase tracking-wider transition-opacity duration-500 delay-250">
        {title}
      </span>
    </li>
  );
}
