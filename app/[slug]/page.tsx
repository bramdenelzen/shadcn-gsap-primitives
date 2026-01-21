import { notFound } from "next/navigation";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { componentRegistry } from "@/component-registration";
import { InstallationSection } from "@/app/[slug]/sections/installation-section";
import { PropsSection } from "@/app/[slug]/sections/props-section";
import { ExampleCodeSection } from "@/app/[slug]/sections/example-code-section";
import { InteractiveDemoSection } from "@/app/[slug]/sections/interactive-demo-section";

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
      <InstallationSection componentName={slug} />
      <Separator />
      {config.interActiveDemo && (
        <>
          <InteractiveDemoSection component={config.interActiveDemo} />
          <Separator />
        </>
      )}
      {/* <Separator />
      <UsageExamplesSection examples={config.examples} /> */}
      {/* <Separator />a */}
      {config.props && config.props.length > 0 && (
        <>
          <PropsSection props={config.props} />
          <Separator />
        </>
      )}
      <ExampleCodeSection filePath={config.filePath} />
    </div>
  );
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
