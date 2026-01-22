import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  onReplay?: () => void;
}

export function ComponentPreview({ children, className, onReplay }: ComponentPreviewProps) {
  return (
    <div className={cn(
      "relative rounded-xs border bg-background p-8 min-h-[200px]",
      "flex items-center justify-center",
      className
    )}>
      {onReplay && (
        <Button
          size="icon"
          variant="ghost"
          onClick={onReplay}
          className="absolute top-2 right-2 h-8 w-8"
          aria-label="Replay animation"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      )}
      {children}
    </div>
  );
}
