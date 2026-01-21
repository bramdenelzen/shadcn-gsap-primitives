import { Typography } from "@/components/ui/typography";
import { CodeBlock } from "@/components/code-block";
import fs from "fs";
import path from "path";

interface ExampleCodeSectionProps {
  filePath: string;
}

export function ExampleCodeSection({ filePath }: ExampleCodeSectionProps) {
  const code = fs.readFileSync(path.join(process.cwd(), filePath), "utf8");

  return (
    <section>
      <Typography variant="h2">Source Code</Typography>
      <Typography variant="p" className="mb-8">
        The complete source code for this component.
      </Typography>
      <CodeBlock code={code} lang="tsx" />
    </section>
  );
}
