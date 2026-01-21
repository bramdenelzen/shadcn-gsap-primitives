import { Typography } from "@/components/ui/typography";
import { componentRegistry } from "@/component-registration";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function ComponentsPage() {
  return (
    <div className="container max-w-5xl py-12 space-y-12">
      <header className="space-y-4">
        <Typography variant="h1">Components</Typography>
        <Typography variant="lead">
          A collection of GSAP-powered animations for shadcn/ui and React applications.
        </Typography>
      </header>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(componentRegistry).map(([slug, component]) => (
          <Link
            key={slug}
            href={`/components/${slug}`}
            className="block group h-full"
          >
            <div className="border border-border bg-muted text-card-foreground rounded-xs p-6 h-full hover:shadow-sm hover:-translate-y-2 transition-all duration-200 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <Typography
                  variant="h4"
                  className="group-hover:text-primary transition-colors"
                >
                  {component.name}
                </Typography>
              </div>
              <Typography variant="muted" className="text-sm flex-grow">
                {component.description}
              </Typography>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
