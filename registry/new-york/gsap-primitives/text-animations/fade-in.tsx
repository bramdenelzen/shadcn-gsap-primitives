"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const fadeInVariants = cva("", {
  variants: {
    variant: {
      fade: "",
      slideUp: "",
      slideDown: "",
      slideLeft: "",
      slideRight: "",
      scale: "",
      blur: "",
    },
    duration: {
      fast: "",
      normal: "",
      slow: "",
    },
  },
  defaultVariants: {
    variant: "fade",
    duration: "normal",
  },
});

// Animation configuration mapped to variants (GSAP initial states)
const GSAPOriginalStatesMap = {
  variant: {
    fade: {
      initial: { opacity: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: "25%" },
    },
    slideDown: {
      initial: { opacity: 0, y: "-25%" },
    },
    slideLeft: {
      initial: { opacity: 0, x: "25%" },
    },
    slideRight: {
      initial: { opacity: 0, x: "-25%" },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(8px)" },
    },
  },
  duration: {
    fast: 0.3,
    normal: 1,
    slow: 1.5,
  },
} as const;

export interface FadeInProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof fadeInVariants> {
  as?: React.ElementType;
  asChild?: boolean;
  children: React.ReactNode;
  delay?: number;
  customDuration?: number;
  triggerOnView?: boolean;
  once?: boolean;
}

function FadeInComponent(
  {
    className,
    variant,
    duration,
    as,
    asChild = false,
    children,
    delay = 0,
    customDuration,
    triggerOnView = true,
    once = true,
    ...props
  }: FadeInProps,
  ref: React.Ref<HTMLElement>,
) {
  const Comp = asChild ? Slot : as || "div";
  const containerRef = React.useRef<HTMLElement>(null);
  const [isReady, setIsReady] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useImperativeHandle(ref, () => containerRef.current!);

  // Detect prefers-reduced-motion
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Get animation config from variants
  const variantConfig = GSAPOriginalStatesMap.variant[variant || "fade"];
  const animationDuration =
    customDuration ?? GSAPOriginalStatesMap.duration[duration || "normal"];

  // Mark as ready after mount
  React.useLayoutEffect(() => {
    setIsReady(true);
  }, []);

  // Use useGSAP hook for animation
  useGSAP(
    () => {
      if (!containerRef.current || !isReady || prefersReducedMotion) return;

      // Animation properties
      const animationProps: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: animationDuration,
        ease: "power2.out",
        delay: delay,
      };

      if (triggerOnView) {
        gsap.fromTo(containerRef.current, variantConfig.initial, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        });
      } else {
        gsap.fromTo(
          containerRef.current,
          variantConfig.initial,
          animationProps,
        );
      }
    },
    {
      scope: containerRef,
      dependencies: [
        isReady,
        prefersReducedMotion,
        variant,
        animationDuration,
        delay,
        triggerOnView,
        once,
      ],
    },
  );

  return (
    <Comp
      ref={containerRef}
      className={cn(
        !isReady && !prefersReducedMotion && "opacity-0",
        fadeInVariants({ variant, duration }),
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

const FadeIn = React.forwardRef<HTMLElement, FadeInProps>(FadeInComponent);
FadeIn.displayName = "FadeIn";

export { FadeIn, fadeInVariants };
