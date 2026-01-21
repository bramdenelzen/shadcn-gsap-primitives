// Component registry for documentation
export interface ComponentConfig {
  name: string;
  description: string;
  component: string;
  filePath: string;
  examples: {
    title: string;
    description?: string;
    code: string;
  }[];
  props?: {
    name: string;
    type: string;
    default?: string;
    description: string;
  }[];
}

export const componentRegistry: Record<string, ComponentConfig> = {
  "text-reveal": {
    name: "Text Reveal",
    description: "An animated text component that reveals text character by character, word by word, or line by line with smooth GSAP animations.",
    component: "TextReveal",
    filePath: "registry/new-york/gsap-primitives/text-animations/text-reveal.tsx",
    examples: [
      {
        title: "Basic Usage",
        description: "Simple character-by-character reveal animation",
        code: `<TextReveal>
  Hello World
</TextReveal>`,
      },
      {
        title: "Slide Up Animation",
        description: "Text slides up while fading in",
        code: `<TextReveal variant="slideUp" duration="normal">
  This text slides up as it appears
</TextReveal>`,
      },
      {
        title: "Word by Word",
        description: "Reveal text word by word instead of character by character",
        code: `<TextReveal splitBy="word" stagger="medium">
  Each word appears individually
</TextReveal>`,
      },
      {
        title: "Custom Duration",
        description: "Use a custom animation duration",
        code: `<TextReveal customDuration={1.5} variant="fade">
  Slower fade in animation
</TextReveal>`,
      },
      {
        title: "With Delay",
        description: "Add a delay before the animation starts",
        code: `<TextReveal delay={0.5} variant="blur">
  This text appears after a delay
</TextReveal>`,
      },
      {
        title: "Different Variants",
        description: "Try different animation variants",
        code: `<div className="space-y-4">
  <TextReveal variant="fade">Fade</TextReveal>
  <TextReveal variant="slideUp">Slide Up</TextReveal>
  <TextReveal variant="slideDown">Slide Down</TextReveal>
  <TextReveal variant="slideLeft">Slide Left</TextReveal>
  <TextReveal variant="slideRight">Slide Right</TextReveal>
  <TextReveal variant="scale">Scale</TextReveal>
  <TextReveal variant="blur">Blur</TextReveal>
</div>`,
      },
    ],
    props: [
      {
        name: "variant",
        type: '"fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "blur"',
        default: '"slideUp"',
        description: "The animation variant to use",
      },
      {
        name: "duration",
        type: '"fast" | "normal" | "slow"',
        default: '"normal"',
        description: "Preset animation duration",
      },
      {
        name: "customDuration",
        type: "number",
        description: "Custom animation duration in seconds (overrides duration prop)",
      },
      {
        name: "stagger",
        type: '"none" | "small" | "medium" | "large"',
        default: '"medium"',
        description: "Delay between each character/word animation",
      },
      {
        name: "splitBy",
        type: '"char" | "word" | "line"',
        default: '"char"',
        description: "How to split the text for animation",
      },
      {
        name: "delay",
        type: "number",
        default: "0",
        description: "Delay before animation starts (in seconds)",
      },
      {
        name: "triggerOnView",
        type: "boolean",
        default: "true",
        description: "Whether to trigger animation when element enters viewport",
      },
      {
        name: "once",
        type: "boolean",
        default: "true",
        description: "Whether animation should only play once",
      },
      {
        name: "as",
        type: "React.ElementType",
        description: "The element to render as",
      },
    ],
  },
  "fade-in": {
    name: "Fade In",
    description: "An animated component that fades in entire elements (divs, sections, images, etc.) with smooth GSAP animations.",
    component: "FadeIn",
    filePath: "registry/new-york/gsap-primitives/text-animations/fade-in.tsx",
    examples: [
      {
        title: "Basic Usage",
        description: "Simple fade in animation",
        code: `<FadeIn>
  <div className="p-8 bg-muted rounded-lg">
    Content fades in smoothly
  </div>
</FadeIn>`,
      },
      {
        title: "Slide Up",
        description: "Element slides up while fading in",
        code: `<FadeIn variant="slideUp">
  <div className="p-8 bg-muted rounded-lg">
    Slides up from below
  </div>
</FadeIn>`,
      },
      {
        title: "Custom Element",
        description: "Use with any HTML element",
        code: `<FadeIn as="section" variant="scale">
  <h2>Section Title</h2>
  <p>Section content that scales in</p>
</FadeIn>`,
      },
      {
        title: "With asChild",
        description: "Use asChild for Radix UI patterns",
        code: `<FadeIn asChild variant="blur">
  <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
    Click Me
  </button>
</FadeIn>`,
      },
      {
        title: "Custom Duration and Delay",
        code: `<FadeIn customDuration={1.2} delay={0.3} variant="slideLeft">
  <img src="/image.jpg" alt="Animated image" />
</FadeIn>`,
      },
    ],
    props: [
      {
        name: "variant",
        type: '"fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "blur"',
        default: '"fade"',
        description: "The animation variant to use",
      },
      {
        name: "duration",
        type: '"fast" | "normal" | "slow"',
        default: '"normal"',
        description: "Preset animation duration",
      },
      {
        name: "customDuration",
        type: "number",
        description: "Custom animation duration in seconds (overrides duration prop)",
      },
      {
        name: "delay",
        type: "number",
        default: "0",
        description: "Delay before animation starts (in seconds)",
      },
      {
        name: "triggerOnView",
        type: "boolean",
        default: "true",
        description: "Whether to trigger animation when element enters viewport",
      },
      {
        name: "once",
        type: "boolean",
        default: "true",
        description: "Whether animation should only play once",
      },
      {
        name: "as",
        type: "React.ElementType",
        default: '"div"',
        description: "The element to render as",
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        description: "Merge props with child element (Radix UI pattern)",
      },
    ],
  },
};
