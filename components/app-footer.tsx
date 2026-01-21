import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="flex justify-center pb-8 mt-auto">
      <Typography variant={"small"}>
        <span className="text-muted-foreground">Made by </span>
        <Link
          className="italic group inline-flex items-center gap-1"
          href="https://github.com/bramdenelzen"
          target="_blank"
        >
          Bram den Elzen
          <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </Typography>
    </footer>
  );
}
