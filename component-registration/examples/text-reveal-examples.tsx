import { Example } from "@/component-registration/types";
import { TextReveal } from "@/registry/new-york/gsap-primitives/text-animations/text-reveal";

export const TextRevealBasicUsageExample: Example = {
  title: "Basic Usage",
  description: "Simple character-by-character reveal animation",
  preview:  (
    <TextReveal triggerOnView once={false}>
      Hello World
    </TextReveal>
  ),
};

export const TextRevealSlideUpAnimationExample: Example = {
  title: "Slide Up Animation",
  description: "Text slides up while fading in",
  preview: (
    <TextReveal variant="slideUp" duration="normal" triggerOnView once={false}>
      This text slides up as it appears
    </TextReveal>
  ),
};

export const TextRevealWordByWordExample: Example = {
  title: "Word by Word",
  description: "Reveal text word by word instead of character by character",
  preview:  (
    <TextReveal splitBy="word" stagger="medium" triggerOnView once={false}>
      Each word appears individually
    </TextReveal>
  ),
};

export const TextRevealCustomDurationExample: Example = {
  title: "Custom Duration",
  description: "Use a custom animation duration",
  preview:  (
    <TextReveal customDuration={1.5} variant="fade" triggerOnView once={false}>
      Slower fade in animation
    </TextReveal>
  ),
};

export const TextRevealWithDelayExample: Example = {
  title: "With Delay",
  description: "Add a delay before the animation starts",
  preview:  (
    <TextReveal delay={0.5} variant="blur" triggerOnView once={false}>
      This text appears after a delay
    </TextReveal>
  ),
};

export const TextRevealDifferentVariantsExample: Example = {
  title: "Different Variants",
  description: "Try different animation variants",
  preview:(
    <div className="space-y-4">
      <TextReveal variant="fade" triggerOnView once={false}>Fade</TextReveal>
      <TextReveal variant="slideUp" triggerOnView once={false}>Slide Up</TextReveal>
      <TextReveal variant="slideDown" triggerOnView once={false}>Slide Down</TextReveal>
      <TextReveal variant="slideLeft" triggerOnView once={false}>Slide Left</TextReveal>
      <TextReveal variant="slideRight" triggerOnView once={false}>Slide Right</TextReveal>
      <TextReveal variant="scale" triggerOnView once={false}>Scale</TextReveal>
      <TextReveal variant="blur" triggerOnView once={false}>Blur</TextReveal>
    </div>
  ),
};

const examples = [
  TextRevealBasicUsageExample,
  TextRevealSlideUpAnimationExample,
  TextRevealWordByWordExample,
  TextRevealCustomDurationExample,
  TextRevealWithDelayExample,
  TextRevealDifferentVariantsExample,
];

export default examples;
