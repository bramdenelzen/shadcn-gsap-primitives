import { Typography } from "@/components/ui/typography";
import { componentRegistry } from "@/component-registration";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { TextReveal } from "@/registry/new-york/gsap-primitives/text-animations/text-reveal";
import { FadeIn } from "@/registry/new-york/gsap-primitives/text-animations/fade-in";

export default function ComponentsPage() {
  return (
    <div className="container max-w-5xl py-12 space-y-12">
      <header className="space-y-4">
        <TextReveal once={false} variant={"blur"}>
          <Typography variant="h1">Shadcn GSAP Primitives</Typography>
        </TextReveal>
        <TextReveal
          once={false}
          variant={"slideUp"}
          splitBy="word"
          delay={0.7}
          duration={"slow"}
        >
          <Typography variant="lead">
            A collection of GSAP-powered animations for shadcn/ui and React
            applications.
          </Typography>
        </TextReveal>
      </header>
      <FadeIn delay={0.3}>
        <Separator />
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(componentRegistry).map(([slug, component], index) => (
          <FadeIn
            key={slug}
            once={false}
            variant={"slideUp"}
            customDuration={15}
            delay={1.5}
          >
            <Link href={`/${slug}`} className="block group h-full">
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
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
