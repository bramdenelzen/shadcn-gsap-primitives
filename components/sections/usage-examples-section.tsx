import { Typography } from "@/components/ui/typography";
import { CodeBlock } from "@/components/code-block";
import { ExamplePreview } from "@/components/example-preview";

interface UsageExamplesSectionProps {
  examples: {
    title: string;
    description?: string;
    code: string;
    preview?: React.ReactNode;
  }[];
  componentType?: string;
}

export async function UsageExamplesSection({
  examples,
  componentType = "unknown",
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

              <ExamplePreview
                code={example.code}
                componentType={componentType}
                index={index}
              />

              <div>
                <Typography variant="small" className="text-muted-foreground mb-2">
                  Code
                </Typography>
                <CodeBlock code={example.code} lang="tsx" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
