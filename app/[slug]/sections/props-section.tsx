import { Typography } from "@/components/ui/typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PropsSectionProps {
  props: {
    name: string;
    type: string;
    default?: string;
    description: string;
  }[];
}

export function PropsSection({ props }: PropsSectionProps) {
  return (
    <section>
      <Typography variant="h2" className="mb-6">
        Props
      </Typography>
      <div className="rounded-xs border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.map((prop) => (
              <TableRow key={prop.name}>
                <TableCell className="font-mono font-semibold">
                  {prop.name}
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {prop.type}
                </TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {prop.default || "-"}
                </TableCell>
                <TableCell>{prop.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
