import { notFound } from "next/navigation";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { componentRegistry } from "@/lib/component-registry";
import { InstallationSection } from "@/components/sections/installation-section";
import { UsageExamplesSection } from "@/components/sections/usage-examples-section";
import { PropsSection } from "@/components/sections/props-section";
import { ExampleCodeSection } from "@/components/sections/example-code-section";
import { TextRevealDemo, FadeInDemo } from "@/components/interactive-demos";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Get component config from registry
  const config = componentRegistry[slug];

  // If component not found, show 404
  if (!config) {
    notFound();
  }

  // Select the appropriate interactive demo
  const InteractiveDemo =
    slug === "text-reveal"
      ? TextRevealDemo
      : slug === "fade-in"
        ? FadeInDemo
        : null;

  return (
    <div className="container max-w-5xl py-12 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Typography variant="meta" className="uppercase">
            Component
          </Typography>
        </div>
        <Typography variant="h1">{config.name}</Typography>
        <Typography variant="lead">{config.description}</Typography>
      </header>

      <Separator />

      {/* Interactive Demo */}
      {InteractiveDemo && (
        <>
          <section className="space-y-4">
            <div>
              <Typography variant="h2">Interactive Demo</Typography>
              <Typography variant="p" className="mt-2">
                Try out different prop combinations and see the results in real-time.
              </Typography>
            </div>
            <InteractiveDemo />
          </section>
          <Separator />
        </>
      )}

      {/* Installation */}
      <InstallationSection componentName={slug} />

      <Separator />

      {/* Usage Examples */}
      <UsageExamplesSection examples={config.examples} componentType={slug} />

      <Separator />

      {/* Props */}
      {config.props && config.props.length > 0 && (
        <>
          <PropsSection props={config.props} />
          <Separator />
        </>
      )}

      {/* Source Code */}
      <ExampleCodeSection filePath={config.filePath} />
    </div>
  );
}

// Generate static params for all components
export function generateStaticParams() {
  return Object.keys(componentRegistry).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each component
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = componentRegistry[slug];

  if (!config) {
    return {
      title: "Component Not Found",
    };
  }

  return {
    title: `${config.name} - GSAP Primitives`,
    description: config.description,
  };
}