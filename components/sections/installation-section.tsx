import { Typography } from "@/components/ui/typography";
import { CodeBlock } from "@/components/code-block";

interface InstallationSectionProps {
  componentName: string;
}

export function InstallationSection({ componentName }: InstallationSectionProps) {
  const installCommand = `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentName}.json`;

  return (
    <section>
      <Typography variant="h2" className="mb-6">
        Installation
      </Typography>
      <CodeBlock code={installCommand} lang="bash" />
    </section>
  );
}
