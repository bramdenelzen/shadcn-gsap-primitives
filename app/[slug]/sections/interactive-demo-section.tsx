import { Typography } from "@/components/ui/typography";
import * as React from "react";

interface InteractiveDemoSectionProps {
  component: React.ComponentType;
}

export function InteractiveDemoSection({
  component: DemoComponent,
}: InteractiveDemoSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <Typography variant="h2">Interactive Demo</Typography>
        <Typography variant="p" className="mt-2">
          Try out different prop combinations and default variants and see the
          results in real-time.
        </Typography>
        <Typography variant="blockquote" className="mt-2">
          In your own project you can add your own variants and expand on this
          starting point.
        </Typography>
      </div>
      <DemoComponent />
    </section>
  );
}
