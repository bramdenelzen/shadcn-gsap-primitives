type ComponentConfig = {
  name: string;
  description: string;
  component: string;
  filePath: string;
  interActiveDemo?: React.ComponentType;
  displayName: string;
  props?: {
    name: string;
    type: string;
    default?: string;
    description: string;
  }[];
};

export type { ComponentConfig };
