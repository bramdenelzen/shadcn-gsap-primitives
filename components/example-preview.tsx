"use client";

import { ComponentPreview } from "@/components/component-preview";
import { Typography } from "@/components/ui/typography";
import * as React from "react";

interface ExamplePreviewProps {
  preview: React.ReactNode;
}

export function ExamplePreview({ preview }: ExamplePreviewProps) {
  const [key, setKey] = React.useState(0);

  const resetPreview = () => {
    setKey((prev) => prev + 1);
  };

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
      <ComponentPreview key={key}>
        {preview}
      </ComponentPreview>
    </div>
  );
}
