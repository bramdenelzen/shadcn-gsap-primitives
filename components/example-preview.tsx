"use client";

import { ComponentPreview } from "@/components/component-preview";
import { Typography } from "@/components/ui/typography";
import { TextReveal } from "@/registry/new-york/gsap-primitives/text-animations/text-reveal";
import { FadeIn } from "@/registry/new-york/gsap-primitives/text-animations/fade-in";
import * as React from "react";

interface ExamplePreviewProps {
  code: string;
  componentType: string;
  index: number;
}

// Helper to render live previews from code
function renderPreview(code: string, componentType: string, key?: number) {
  try {
    // Extract props from code
    const propsMatch = code.match(/<(TextReveal|FadeIn)([^>]*)>/);
    if (!propsMatch) return null;

    const propsString = propsMatch[2];
    
    // Extract children - handle both text and nested JSX
    let children: React.ReactNode = "Preview";
    
    // Try to extract content between opening and closing tags
    const componentMatch = code.match(/<(TextReveal|FadeIn)[^>]*>([\s\S]*?)<\/\1>/);
    if (componentMatch) {
      const content = componentMatch[2].trim();
      
      // Check if content is JSX (starts with <)
      if (content.startsWith("<")) {
        // Parse nested JSX elements
        if (content.includes("<button")) {
          const buttonText = content.match(/>([^<]+)</)?.[1] || "Button";
          children = (
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
              {buttonText}
            </button>
          );
        } else if (content.includes("<img")) {
          children = (
            <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Image Preview</span>
            </div>
          );
        } else if (content.includes("<div")) {
          // Extract div content
          const divContent = content.match(/<div[^>]*>([\s\S]*?)<\/div>/);
          if (divContent) {
            const innerContent = divContent[1].trim();
            // Check for h2, h3, p tags
            const hasHeading = innerContent.match(/<h[23][^>]*>([^<]+)<\/h[23]>/);
            const hasParagraph = innerContent.match(/<p[^>]*>([^<]+)<\/p>/);
            
            children = (
              <div className="p-6 bg-muted rounded-lg space-y-2">
                {hasHeading && <h3 className="text-xl font-semibold">{hasHeading[1]}</h3>}
                {hasParagraph && <p className="text-muted-foreground">{hasParagraph[1]}</p>}
              </div>
            );
          }
        }
      } else {
        // Plain text children
        children = content;
      }
    }

    // Parse common props
    const getProps = () => {
      const props: any = { triggerOnView: false };

      const variantMatch = propsString.match(/variant="([^"]*)"/);
      if (variantMatch) props.variant = variantMatch[1];

      const durationMatch = propsString.match(/duration="([^"]*)"/);
      if (durationMatch) props.duration = durationMatch[1];

      const staggerMatch = propsString.match(/stagger="([^"]*)"/);
      if (staggerMatch) props.stagger = staggerMatch[1];

      const splitByMatch = propsString.match(/splitBy="([^"]*)"/);
      if (splitByMatch) props.splitBy = splitByMatch[1];

      const delayMatch = propsString.match(/delay=\{([^}]*)\}/);
      if (delayMatch) props.delay = parseFloat(delayMatch[1]);

      const customDurationMatch = propsString.match(/customDuration=\{([^}]*)\}/);
      if (customDurationMatch)
        props.customDuration = parseFloat(customDurationMatch[1]);

      return props;
    };

    const props = getProps();

    if (componentType === "text-reveal") {
      return (
        <TextReveal key={key} {...props}>
          {children}
        </TextReveal>
      );
    } else if (componentType === "fade-in") {
      return (
        <FadeIn key={key} {...props}>
          {children}
        </FadeIn>
      );
    }
  } catch (error) {
    console.error("Preview render error:", error);
  }
  return null;
}

export function ExamplePreview({
  code,
  componentType,
  index,
}: ExamplePreviewProps) {
  const [key, setKey] = React.useState(0);

  const resetPreview = () => {
    setKey((prev) => prev + 1);
  };

  const preview = renderPreview(code, componentType, key);

  if (!preview) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Typography variant="small" className="text-muted-foreground">
          Preview
        </Typography>
        <button
          onClick={resetPreview}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Replay Animation
        </button>
      </div>
      <ComponentPreview>{preview}</ComponentPreview>
    </div>
  );
}
