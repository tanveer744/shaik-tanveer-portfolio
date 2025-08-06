import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/90 text-primary-foreground hover:bg-primary hover:shadow-lg hover:shadow-primary/20",
        secondary:
          "border-transparent bg-secondary/90 text-secondary-foreground hover:bg-secondary hover:shadow-lg hover:shadow-secondary/20",
        destructive:
          "border-transparent bg-destructive/90 text-destructive-foreground hover:bg-destructive hover:shadow-lg hover:shadow-destructive/20",
        outline: "text-foreground border-foreground/20 hover:bg-foreground/5 hover:border-foreground/40",
        skill: "border-transparent bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground hover:from-primary hover:to-primary/80 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
