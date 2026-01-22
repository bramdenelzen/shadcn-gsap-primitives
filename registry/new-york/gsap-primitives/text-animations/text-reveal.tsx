"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const textRevealVariants = cva("inline-block", {
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
    stagger: {
      none: "",
      small: "",
      medium: "",
      large: "",
    },
  },
  defaultVariants: {
    variant: "slideUp",
    duration: "normal",
    stagger: "medium",
  },
});

// Animation configuration mapped to variants (GSAP inital states)
const GSAPOriginalStatesMap = {
  variant: {
    fade: {
      initial: { opacity: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: "100%" },
    },
    slideDown: {
      initial: { opacity: 0, y: "-100%" },
    },
    slideLeft: {
      initial: { opacity: 0, x: "25%" },
    },
    slideRight: {
      initial: { opacity: 0, x: "-25%" },
    },
    scale: {
      initial: { opacity: 0, scale: 0 },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(8px)" },
    },
  },
  duration: {
    fast: 0.3,
    normal: 0.9,
    slow: 1.5,
  },
  stagger: {
    none: 0,
    small: 0.02,
    medium: 0.05,
    large: 0.1,
  },
} as const;

export interface TextRevealProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textRevealVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  delay?: number;
  customDuration?: number;
  splitBy?: "char" | "word" | "line";
  triggerOnView?: boolean;
  once?: boolean;
  skipDelayOnOutOfView?: boolean;
  withOverflowHidden?: boolean;
}

function TextRevealComponent(
  {
    className,
    variant,
    duration,
    stagger,
    as,
    children,
    delay = 0,
    customDuration,
    splitBy = "char",
    triggerOnView = true,
    once = true,
    skipDelayOnOutOfView = false,
    withOverflowHidden = false,
    ...props
  }: TextRevealProps,
  ref: React.Ref<HTMLDivElement>,
): React.ReactElement {
  const isTextOnly = typeof children === "string";
  const Comp = as ? as : isTextOnly ? "p" : Slot;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textContentRef = React.useRef<string>("");
  const [isProcessed, setIsProcessed] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const [ariaLabel, setAriaLabel] = React.useState<string | undefined>(
    undefined,
  );

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
  const variantConfig = GSAPOriginalStatesMap.variant[variant || "slideUp"];
  const animationDuration =
    customDuration ?? GSAPOriginalStatesMap.duration[duration || "normal"];
  const staggerDelay = GSAPOriginalStatesMap.stagger[stagger || "medium"];

  // Split text and wrap in spans before paint 
  React.useLayoutEffect(() => {
    if (!containerRef.current || isProcessed) return;

    const text = containerRef.current.textContent || "";
    if (!text || text === textContentRef.current) return;

    // Set aria-label from the actual text content
    setAriaLabel(text);

    // If reduced motion is preferred, don't split the text - keep it accessible
    if (prefersReducedMotion) {
      setIsProcessed(true);
      return;
    }

    textContentRef.current = text;
    const fragment = document.createDocumentFragment();

    if (splitBy === "char") {
      const words = text.split(" ");
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.whiteSpace = "nowrap";

        const chars = word.split("");
        chars.forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.className = cn(
            "inline-block",
            "opacity-0",
            "text-reveal-element",
          );
          charSpan.textContent = char;

          gsap.set(charSpan, variantConfig.initial);

          if (withOverflowHidden) {
            const wrapper = document.createElement("span");
            wrapper.className = "inline-block overflow-hidden align-bottom";
            wrapper.appendChild(charSpan);
            wordSpan.appendChild(wrapper);
          } else {
            wordSpan.appendChild(charSpan);
          }
        });

        fragment.appendChild(wordSpan);

        if (wordIndex < words.length - 1) {
          fragment.appendChild(document.createTextNode(" "));
        }
      });
    } else {
      let elements: string[] = [];

      if (splitBy === "word") {
        elements = text.split(" ");
      } else if (splitBy === "line") {
        elements = text.split("\n");
      }

      elements.forEach((element, index) => {
        const span = document.createElement("span");
        span.className = cn(
          "inline-block",
          "opacity-0",
          "text-reveal-element",
        );
        span.textContent = element;

        gsap.set(span, variantConfig.initial);

        if (withOverflowHidden) {
          const wrapper = document.createElement("span");
          wrapper.className = "inline-block overflow-hidden align-bottom";
          wrapper.appendChild(span);
          fragment.appendChild(wrapper);
        } else {
          fragment.appendChild(span);
        }

        if (splitBy === "word" && index < elements.length - 1) {
          fragment.appendChild(document.createTextNode(" "));
        }
      });
    }

    // Append characters to container
    containerRef.current?.replaceChildren(fragment);
    setIsProcessed(true);
  }, [
    children,
    splitBy,
    variant,
    prefersReducedMotion,
    isProcessed,
    variantConfig,
    withOverflowHidden,
  ]);

  useGSAP(
    () => {
      if (!containerRef.current || !isProcessed || prefersReducedMotion) return;

      const elements = containerRef.current.querySelectorAll(
        ".text-reveal-element",
      );
      let finalDelay = delay;
      if (skipDelayOnOutOfView && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          finalDelay = 0;
        }
      }

      // Animation properties
      const animationProps: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: animationDuration,
        ease: "power2.out",
        stagger: staggerDelay,
        delay: finalDelay,
      };

      if (triggerOnView) {
        gsap.fromTo(elements, variantConfig.initial, {
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
        gsap.fromTo(elements, variantConfig.initial, animationProps);
      }
    },
    {
      scope: containerRef,
      dependencies: [
        skipDelayOnOutOfView,
        isProcessed,
        prefersReducedMotion,
        variant,
        animationDuration,
        staggerDelay,
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
        !isProcessed && !prefersReducedMotion && "opacity-0",
        className,
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Comp>
  );
}

const TextReveal = React.forwardRef<HTMLDivElement, TextRevealProps>(TextRevealComponent);

export { TextReveal, textRevealVariants };
