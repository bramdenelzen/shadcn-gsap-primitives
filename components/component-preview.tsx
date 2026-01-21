import * as React from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div className={cn(
      "relative rounded-xs border bg-background p-8 min-h-[200px]",
      "flex items-center justify-center",
      className
    )}>
      {children}
    </div>
  );
}
