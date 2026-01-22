"use client";

import * as React from "react";
import { TextReveal, type TextRevealProps } from "@/registry/new-york/gsap-primitives/text-animations/text-reveal";
import { FadeIn, type FadeInProps } from "@/registry/new-york/gsap-primitives/standard/fade-in";
import { MouseFollow, type MouseFollowProps } from "@/registry/new-york/gsap-primitives/standard/mouse-follow";
import { ComponentPreview } from "@/components/component-preview";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
  const [variant, setVariant] = React.useState<TextRevealProps["variant"]>("slideUp");
  const [duration, setDuration] = React.useState<TextRevealProps["duration"]>("normal");
  const [stagger, setStagger] = React.useState<TextRevealProps["stagger"]>("medium");
  const [splitBy, setSplitBy] = React.useState<TextRevealProps["splitBy"]>("char");
  const [delay, setDelay] = React.useState(0);
  const [customDuration, setCustomDuration] = React.useState<number | undefined>(undefined);
  const [withOverflowHidden, setWithOverflowHidden] = React.useState(false);
  const [key, setKey] = React.useState(0);

  const resetAnimation = () => setKey((prev) => prev + 1);

  React.useEffect(() => {
    resetAnimation();
  }, [text, variant, duration, stagger, splitBy, delay, customDuration, withOverflowHidden]);

  return (
    <div className="space-y-6">
      <ComponentPreview onReplay={resetAnimation}>
        <TextReveal
          key={key}
          variant={variant}
          duration={duration}
          stagger={stagger}
          splitBy={splitBy}
          delay={delay}
          withOverflowHidden={withOverflowHidden}
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
              value={variant || undefined}
              onValueChange={(value) => setVariant(value as TextRevealProps["variant"])}
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
              value={duration || undefined}
              onValueChange={(value) => setDuration(value as TextRevealProps["duration"])}
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
              value={stagger || undefined}
              onValueChange={(value) => setStagger(value as TextRevealProps["stagger"])}
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
              value={splitBy || undefined}
              onValueChange={(value) => setSplitBy(value as TextRevealProps["splitBy"])}
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

          <div className="flex items-center gap-2 h-fit my-auto pt-5 ">
            <Checkbox
              id="overflow-hidden"
              checked={withOverflowHidden}
              onCheckedChange={(checked) => setWithOverflowHidden(checked === true)}
            />
            <Label htmlFor="overflow-hidden">With Overflow Hidden</Label>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fade In Interactive Demo
export function FadeInDemo() {
  const [variant, setVariant] = React.useState<FadeInProps["variant"]>("fade");
  const [duration, setDuration] = React.useState<FadeInProps["duration"]>("normal");
  const [delay, setDelay] = React.useState(0);
  const [customDuration, setCustomDuration] = React.useState<number | undefined>(undefined);
  const [key, setKey] = React.useState(0);

  const resetAnimation = () => setKey((prev) => prev + 1);

  React.useEffect(() => {
    resetAnimation();
  }, [variant, duration, delay, customDuration]);

  return (
    <div className="space-y-6">
      <ComponentPreview onReplay={resetAnimation}>
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
              value={variant || undefined}
              onValueChange={(value) => setVariant(value as FadeInProps["variant"])}
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
              value={duration || undefined}
              onValueChange={(value) => setDuration(value as FadeInProps["duration"])}
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
// Mouse Follow Interactive Demo
export function MouseFollowDemo() {
  const [ease, setEase] = React.useState(0.15);
  const [hideDefaultCursor, setHideDefaultCursor] = React.useState(false);
  const [hoverScale, setHoverScale] = React.useState(1.5);
  const [enableHoverScale, setEnableHoverScale] = React.useState(true);
  const [cursorSize, setCursorSize] = React.useState(24);

  return (
    <div className="space-y-6">
      <ComponentPreview className="min-h-[400px]">
        {hideDefaultCursor && (
          <MouseFollow
            ease={ease}
            hideDefaultCursor={hideDefaultCursor}
            hoverScale={hoverScale}
            enableHoverScale={enableHoverScale}
          >
            <div 
              className="rounded-full bg-foreground/50 backdrop-blur-sm border-2 border-foreground/30"
              style={{ width: cursorSize, height: cursorSize }}
            />
          </MouseFollow>
        )}
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-semibold">Move your mouse around</h3>
          <p className="text-muted-foreground">
            {hideDefaultCursor 
              ? "Custom cursor is active. Try hovering over the button below!"
              : "Enable custom cursor in the settings below"}
          </p>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-xs hover:bg-primary/90 transition-colors">
            Hover over me
          </button>
        </div>
      </ComponentPreview>

      <div className="rounded-xs border bg-background p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="mouse-ease">Ease (Follow Speed)</Label>
            <Input
              id="mouse-ease"
              type="number"
              step="0.01"
              min="0.01"
              max="1"
              value={ease}
              onChange={(e) => setEase(parseFloat(e.target.value) || 0.15)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mouse-hover-scale">Hover Scale</Label>
            <Input
              id="mouse-hover-scale"
              type="number"
              step="0.1"
              min="1"
              max="3"
              value={hoverScale}
              onChange={(e) => setHoverScale(parseFloat(e.target.value) || 1.5)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mouse-cursor-size">Cursor Size (px)</Label>
            <Input
              id="mouse-cursor-size"
              type="number"
              step="1"
              min="8"
              max="64"
              value={cursorSize}
              onChange={(e) => setCursorSize(parseInt(e.target.value) || 24)}
              className="w-full"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="mouse-hide-default"
              checked={hideDefaultCursor}
              onCheckedChange={(checked) => setHideDefaultCursor(checked as boolean)}
            />
            <Label htmlFor="mouse-hide-default" className="cursor-pointer">
              Hide Default Cursor
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="mouse-enable-hover"
              checked={enableHoverScale}
              onCheckedChange={(checked) => setEnableHoverScale(checked as boolean)}
            />
            <Label htmlFor="mouse-enable-hover" className="cursor-pointer">
              Enable Hover Scale
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}