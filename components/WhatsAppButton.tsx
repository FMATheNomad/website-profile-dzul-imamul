"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

const whatsappVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        outline:
          "border border-primary/40 bg-transparent text-primary hover:bg-primary/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface WhatsAppButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof whatsappVariants> {
  asChild?: boolean;
}

const WhatsAppButton = React.forwardRef<HTMLAnchorElement, WhatsAppButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        href="https://wa.me/6289661330005?text=Halo%2C%20saya%20ingin%20booking%20potong%20rambut."
        target="_blank"
        rel="noopener noreferrer"
        className={cn(whatsappVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <Phone className="mr-2 h-5 w-5" />
        Booking via WhatsApp
      </Comp>
    );
  }
);
WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;
