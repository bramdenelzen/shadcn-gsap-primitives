import { ComponentConfig } from "./types";
import { FadeInDemo, TextRevealDemo, MouseFollowDemo } from "@/components/interactive-demos";

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
    filePath: "registry/new-york/gsap-primitives/standard/fade-in.tsx",
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
  "mouse-follow": {
    name: "Mouse Follow",
    description:
      "A smooth mouse follower component that creates a custom cursor using GSAP. The cursor smoothly follows mouse movement and can scale on hover over interactive elements.",
    component: "MouseFollow",
    filePath: "registry/new-york/gsap-primitives/standard/mouse-follow.tsx",
    interActiveDemo: MouseFollowDemo,
    displayName: "MouseFollow",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "Custom cursor element to render (replaces default cursor)",
      },
      {
        name: "ease",
        type: "number",
        default: "0.15",
        description: "How quickly the cursor follows the mouse (0-1, higher is faster)",
      },
      {
        name: "hideDefaultCursor",
        type: "boolean",
        default: "true",
        description: "Whether to hide the default system cursor",
      },
      {
        name: "hoverScale",
        type: "number",
        default: "1.5",
        description: "Scale factor when hovering over interactive elements",
      },
      {
        name: "enableHoverScale",
        type: "boolean",
        default: "true",
        description: "Whether to enable hover scaling on interactive elements",
      },
      {
        name: "offset",
        type: "{ x: number; y: number }",
        default: "{ x: 0, y: 0 }",
        description: "Offset from the actual cursor position (in pixels)",
      },
    ],
  },
};
