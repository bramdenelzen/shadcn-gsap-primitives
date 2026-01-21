type ComponentConfig = {
  name: string;
  description: string;
  component: string;
  filePath: string;
  interActiveDemo?: React.ComponentType;
  examples: Example[];
  displayName: string;
  props?: {
    name: string;
    type: string;
    default?: string;
    description: string;
  }[];
};

type Example = {
  title: string;
  description?: string;
  preview: React.ReactNode;
};

export type { ComponentConfig, Example };
