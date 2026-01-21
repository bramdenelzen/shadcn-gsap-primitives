import { Typography } from "@/components/ui/typography";
import { TextReveal } from "@/registry/new-york/gsap-primitives/text-animations/text-reveal";

export default async function Home() {
  return (
    <div className="space-y-10">
      <div className="space-y-24">
        <section>
          <TextReveal once={false} variant={"blur"}>
            <Typography variant="h1" className="mb-6">
              GSAP Primitives
            </Typography>
          </TextReveal>
          <TextReveal once={false} variant={"blur"} splitBy="line" delay={0.5} customDuration={3}>
            <Typography variant="lead" className="mb-6">
              This is a shadcn based typography component. Used to keep the
              visual hierarchy of the page consistent, and keep the semantics
              flexible.
            </Typography>
          </TextReveal>
        </section>
      </div>
    </div>
  );
}
