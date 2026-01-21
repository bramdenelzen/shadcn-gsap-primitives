import { Typography } from "@/components/ui/typography";
import { ExamplePreview } from "@/components/example-preview";
import { Example } from "@/component-registration/types";

interface UsageExamplesSectionProps {
  examples: Example[]
}

export default function UsageExamplesSection({
  examples,
}: UsageExamplesSectionProps) {
  return (
    <section className="space-y-8">
      <div>
        <Typography variant="h2">Usage Examples</Typography>
        <Typography variant="p" className="mt-2">
          Explore different ways to use this component in your application.
        </Typography>
      </div>

      <div className="space-y-12">
        {examples.map((example, index) => {
          // Call preview function to get the actual JSX

          return (
            <div key={index} className="space-y-4">
              <div>
                <Typography variant="h3" className="text-xl">
                  {example.title}
                </Typography>
                {example.description && (
                  <Typography variant="muted" className="mt-1">
                    {example.description}
                  </Typography>
                )}
              </div>

              <ExamplePreview preview={example.preview} />

              {/* <div>
                <Typography variant="small" className="text-muted-foreground mb-2">
                  Code
                </Typography>
                <CodeBlock code={code} lang="tsx" />
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
