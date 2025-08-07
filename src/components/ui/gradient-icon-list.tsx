import React from 'react';
import { cn } from "@/lib/utils";
import { GradientIcon, type GradientIconProps } from "./gradient-icon";

interface GradientIconListProps {
  items: (Omit<GradientIconProps, 'className'> & { id: string | number })[];
  className?: string;
  itemClassName?: string;
}

export function GradientIconList({ 
  items, 
  className,
  itemClassName 
}: GradientIconListProps) {
  return (
    <ul className={cn(
      "flex flex-wrap justify-center gap-6 p-4",
      className
    )}>
      {items.map((item, index) => (
        <GradientIcon 
          key={item.id || index}
          icon={item.icon}
          title={item.title}
          gradientFrom={item.gradientFrom}
          gradientTo={item.gradientTo}
          className={itemClassName}
        />
      ))}
    </ul>
  );
}
