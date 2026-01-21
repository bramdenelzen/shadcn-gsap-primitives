"use client";

import * as React from "react";
import { TextReveal } from "@/registry/new-york/gsap-primitives/text-animations/text-reveal";
import { FadeIn } from "@/registry/new-york/gsap-primitives/text-animations/fade-in";
import { ComponentPreview } from "@/components/component-preview";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Text Reveal Interactive Demo
export function TextRevealDemo() {
  const [text, setText] = React.useState("Hello World");
  const [variant, setVariant] = React.useState<any>("slideUp");
  const [duration, setDuration] = React.useState<any>("normal");
  const [stagger, setStagger] = React.useState<any>("medium");
  const [splitBy, setSplitBy] = React.useState<any>("char");
  const [delay, setDelay] = React.useState(0);
  const [key, setKey] = React.useState(0);

  const resetAnimation = () => setKey((prev) => prev + 1);

  React.useEffect(() => {
    resetAnimation();
  }, [text, variant, duration, stagger, splitBy, delay]);

  return (
    <div className="space-y-6">
      <ComponentPreview>
        <TextReveal
          key={key}
          variant={variant}
          duration={duration}
          stagger={stagger}
          splitBy={splitBy}
          delay={delay}
          triggerOnView={false}
          className="text-2xl font-semibold"
        >
          {text}
        </TextReveal>
      </ComponentPreview>

      <div className="rounded-lg border bg-muted/50 p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="text">Text</Label>
            <Input
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="variant">Variant</Label>
            <select
              id="variant"
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
            >
              <option value="fade">Fade</option>
              <option value="slideUp">Slide Up</option>
              <option value="slideDown">Slide Down</option>
              <option value="slideLeft">Slide Left</option>
              <option value="slideRight">Slide Right</option>
              <option value="scale">Scale</option>
              <option value="blur">Blur</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
            >
              <option value="fast">Fast</option>
              <option value="normal">Normal</option>
              <option value="slow">Slow</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="stagger">Stagger</Label>
            <select
              id="stagger"
              value={stagger}
              onChange={(e) => setStagger(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
            >
              <option value="none">None</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="splitBy">Split By</Label>
            <select
              id="splitBy"
              value={splitBy}
              onChange={(e) => setSplitBy(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
            >
              <option value="char">Character</option>
              <option value="word">Word</option>
              <option value="line">Line</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="delay">Delay (seconds)</Label>
            <Input
              id="delay"
              type="number"
              step="0.1"
              min="0"
              value={delay}
              onChange={(e) => setDelay(parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fade In Interactive Demo
export function FadeInDemo() {
  const [variant, setVariant] = React.useState<any>("fade");
  const [duration, setDuration] = React.useState<any>("normal");
  const [delay, setDelay] = React.useState(0);
  const [key, setKey] = React.useState(0);

  const resetAnimation = () => setKey((prev) => prev + 1);

  React.useEffect(() => {
    resetAnimation();
  }, [variant, duration, delay]);

  return (
    <div className="space-y-6">
      <ComponentPreview>
        <FadeIn
          key={key}
          variant={variant}
          duration={duration}
          delay={delay}
          triggerOnView={false}
        >
          <div className="p-8 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Card Title</h3>
            <p className="text-muted-foreground">
              This entire card fades in with the selected animation.
            </p>
          </div>
        </FadeIn>
      </ComponentPreview>

      <div className="rounded-lg border bg-muted/50 p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fade-variant">Variant</Label>
            <select
              id="fade-variant"
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
            >
              <option value="fade">Fade</option>
              <option value="slideUp">Slide Up</option>
              <option value="slideDown">Slide Down</option>
              <option value="slideLeft">Slide Left</option>
              <option value="slideRight">Slide Right</option>
              <option value="scale">Scale</option>
              <option value="blur">Blur</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fade-duration">Duration</Label>
            <select
              id="fade-duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
            >
              <option value="fast">Fast</option>
              <option value="normal">Normal</option>
              <option value="slow">Slow</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fade-delay">Delay (seconds)</Label>
            <Input
              id="fade-delay"
              type="number"
              step="0.1"
              min="0"
              value={delay}
              onChange={(e) => setDelay(parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
