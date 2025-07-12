import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-neu hover:shadow-neu-pressed active:shadow-neu-inset",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-neu hover:shadow-neu-pressed",
        outline:
          "border border-input bg-card shadow-neu hover:shadow-neu-pressed active:shadow-neu-inset",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-neu hover:shadow-neu-pressed",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        robot: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-neu hover:shadow-neu-pressed active:shadow-neu-inset font-semibold",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-neu hover:shadow-neu-pressed",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-neu hover:shadow-neu-pressed",
      },
      size: {
        default: "h-touch px-6 py-3 text-base",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-touch-lg rounded-2xl px-8 py-4 text-lg",
        xl: "h-20 rounded-2xl px-10 py-5 text-xl",
        icon: "h-touch w-touch rounded-xl",
        "icon-lg": "h-touch-lg w-touch-lg rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
