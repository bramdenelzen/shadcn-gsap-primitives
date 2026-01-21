import { Example } from "@/component-registration/types";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/registry/new-york/gsap-primitives/text-animations/fade-in";

export const FadeInBasicUsageExample: Example = {
  title: "Basic Usage",
  description: "Simple fade in animation",
  preview:  (
    <FadeIn triggerOnView once={false}>
      <div className="p-8 bg-primary-foreground rounded-lg">
        Content fades in smoothly
      </div>
    </FadeIn>
  ),
};

export const FadeInSlideUpExample: Example = {
  title: "Slide Up",
  description: "Element slides up while fading in",
  preview:  (
    <FadeIn variant="slideUp" triggerOnView once={false}>
      <div className="p-8 bg-foreground text-background rounded-lg">
        Slides up from below
      </div>
    </FadeIn>
  ),
};

export const FadeInCustomElementExample: Example = {
  title: "Custom Element",
  description: "Use with any HTML element",
  preview:  (
    <FadeIn as="section" variant="scale" triggerOnView once={false}>
      <h2 className="text-xl font-semibold">Section Title</h2>
      <p>Section content that scales in</p>
    </FadeIn>
  ),
};

export const FadeInWithAsChildExample: Example = {
  title: "With asChild",
  description: "Use asChild for Radix UI patterns",
  preview: (
    <FadeIn asChild variant="blur" triggerOnView once={false}>
      <Button>
        Click Me
      </Button>
    </FadeIn>
  ),
};

export const FadeInCustomDurationAndDelayExample: Example = {
  title: "Custom Duration and Delay",
  preview:  (
    <FadeIn customDuration={1.2} delay={0.3} variant="slideLeft" triggerOnView once={false}>
      <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground">Image Preview</span>
      </div>
    </FadeIn>
  ),
};

const examples = [
    FadeInBasicUsageExample,
    FadeInSlideUpExample,
    FadeInCustomElementExample,
    FadeInWithAsChildExample,
    FadeInCustomDurationAndDelayExample
];

export default examples;