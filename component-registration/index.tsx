import { ComponentConfig } from "./types";
import { FadeInDemo, TextRevealDemo } from "@/components/interactive-demos";

export const componentRegistry: Record<string, ComponentConfig> = {
  "text-reveal": {
    name: "Text Reveal",
    description:
      "An animated text component that reveals text character by character, word by word, or line by line with smooth GSAP animations.",
    component: "TextReveal",
    filePath:
      "registry/new-york/gsap-primitives/text-animations/text-reveal.tsx",
    interActiveDemo: TextRevealDemo,
    displayName: "TextReveal",
    props: [
      {
        name: "variant",
        type: '"fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "blur"',
        default: '"slideUp"',
        description: "The animation variant to use, add your own variants as needed",
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
        description:
          "Custom animation duration in seconds (overrides duration prop)",
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
        name: "skipDelayOnOutOfView",
        type: "boolean",
        default: "false",
        description:
          "Whether to skip the delay if the element is initially out of view",
      },
      {
        name: "triggerOnView",
        type: "boolean",
        default: "true",
        description:
          "Whether to trigger animation when element enters viewport",
      },
      {
        name: "once",
        type: "boolean",
        default: "true",
        description: "Whether animation should only play once",
      },
      {
        name: "skipDelayOnOutOfView",
        type: "boolean",
        default: "false",
        description:
          "Whether to skip the delay if the element is initially out of view",
      },
      {
        name: "withOverflowHidden",
        type: "boolean",
        default: "false",
        description: "Whether to hide overflow on the character/word wrapper",
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
    description:
      "An animated component that fades in entire elements (divs, sections, images, etc.) with smooth GSAP animations.",
    component: "FadeIn",
    filePath: "registry/new-york/gsap-primitives/text-animations/fade-in.tsx",
    interActiveDemo: FadeInDemo,
    displayName: "FadeIn",
    props: [
      {
        name: "variant",
        type: '"fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "blur"',
        default: '"fade"',
        description: "The animation variant to use, add your own variants as needed",
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
        description:
          "Custom animation duration in seconds (overrides duration prop)",
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
        description:
          "Whether to trigger animation when element enters viewport",
      },
      {
        name: "skipDelayOnOutOfView",
        type: "boolean",
        default: "false",
        description:
          "Whether to skip the delay if the element is initially out of view",
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
        description: "Merge props with child element",
      },
    ],
  },
};
