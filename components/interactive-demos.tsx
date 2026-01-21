"use client";

import * as React from "react";
import { TextReveal } from "@/registry/new-york/gsap-primitives/text-animations/text-reveal";
import { FadeIn } from "@/registry/new-york/gsap-primitives/text-animations/fade-in";
import { ComponentPreview } from "@/components/component-preview";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Text Reveal Interactive Demo
export function TextRevealDemo() {
  const [text, setText] = React.useState("Hello World");
  const [variant, setVariant] = React.useState<any>("slideUp");
  const [duration, setDuration] = React.useState<any>("normal");
  const [stagger, setStagger] = React.useState<any>("medium");
  const [splitBy, setSplitBy] = React.useState<any>("char");
  const [delay, setDelay] = React.useState(0);
  const [customDuration, setCustomDuration] = React.useState<number | undefined>(undefined);
  const [key, setKey] = React.useState(0);

  const resetAnimation = () => setKey((prev) => prev + 1);

  React.useEffect(() => {
    resetAnimation();
  }, [text, variant, duration, stagger, splitBy, delay, customDuration]);

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
          customDuration={customDuration}
          triggerOnView={false}
          className="text-2xl font-semibold"
        >
          {text}
        </TextReveal>
      </ComponentPreview>

      <div className="rounded-xs border border-border bg-background p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="text">Text</Label>
            <Input
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="variant">Variant</Label>
            <Select
              value={variant}
              onValueChange={(value) => setVariant(value)}
            >
              <SelectTrigger id="variant" className="w-full">
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fade">Fade</SelectItem>
                <SelectItem value="slideUp">Slide Up</SelectItem>
                <SelectItem value="slideDown">Slide Down</SelectItem>
                <SelectItem value="slideLeft">Slide Left</SelectItem>
                <SelectItem value="slideRight">Slide Right</SelectItem>
                <SelectItem value="scale">Scale</SelectItem>
                <SelectItem value="blur">Blur</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Select
              value={duration}
              onValueChange={(value) => setDuration(value)}
            >
              <SelectTrigger id="duration" className="w-full">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fast">Fast</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="slow">Slow</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="stagger">Stagger</Label>
            <Select
              value={stagger}
              onValueChange={(value) => setStagger(value)}
            >
              <SelectTrigger id="stagger" className="w-full">
                <SelectValue placeholder="Select stagger" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="splitBy">Split By</Label>
            <Select
              value={splitBy}
              onValueChange={(value) => setSplitBy(value)}
            >
              <SelectTrigger id="splitBy" className="w-full">
                <SelectValue placeholder="Select split" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="char">Character</SelectItem>
                <SelectItem value="word">Word</SelectItem>
                <SelectItem value="line">Line</SelectItem>
              </SelectContent>
            </Select>
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
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-duration">Custom Duration (seconds)</Label>
            <Input
              id="custom-duration"
              type="number"
              step="0.1"
              min="0"
              value={customDuration || ""}
              placeholder="Overrides preset"
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setCustomDuration(isNaN(val) ? undefined : val);
              }}
              className="w-full"
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
  const [customDuration, setCustomDuration] = React.useState<number | undefined>(undefined);
  const [key, setKey] = React.useState(0);

  const resetAnimation = () => setKey((prev) => prev + 1);

  React.useEffect(() => {
    resetAnimation();
  }, [variant, duration, delay, customDuration]);

  return (
    <div className="space-y-6">
      <ComponentPreview>
        <FadeIn
          key={key}
          variant={variant}
          duration={duration}
          delay={delay}
          customDuration={customDuration}
          triggerOnView={false}
        >
          <div className="p-8 bg-input rounded-xs">
            <h3 className="text-xl font-semibold mb-2">Card Title</h3>
            <p className="text-muted-foreground">
              This entire card fades in with the selected animation.
            </p>
          </div>
        </FadeIn>
      </ComponentPreview>

      <div className="rounded-xs border bg-background p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fade-variant">Variant</Label>
            <Select
              value={variant}
              onValueChange={(value) => setVariant(value)}
            >
              <SelectTrigger id="fade-variant" className="w-full">
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fade">Fade</SelectItem>
                <SelectItem value="slideUp">Slide Up</SelectItem>
                <SelectItem value="slideDown">Slide Down</SelectItem>
                <SelectItem value="slideLeft">Slide Left</SelectItem>
                <SelectItem value="slideRight">Slide Right</SelectItem>
                <SelectItem value="scale">Scale</SelectItem>
                <SelectItem value="blur">Blur</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fade-duration">Duration</Label>
            <Select
              value={duration}
              onValueChange={(value) => setDuration(value)}
            >
              <SelectTrigger id="fade-duration" className="w-full">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fast">Fast</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="slow">Slow</SelectItem>
              </SelectContent>
            </Select>
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
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fade-custom-duration">Custom Duration (seconds)</Label>
            <Input
              id="fade-custom-duration"
              type="number"
              step="0.1"
              min="0"
              value={customDuration || ""}
              placeholder="Overrides preset"
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setCustomDuration(isNaN(val) ? undefined : val);
              }}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
