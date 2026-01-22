import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Github } from "lucide-react";

type NavItem = {
  title: string;
  url: string;
  isActive?: boolean;
  items?: NavItem[];
};

// This is sample data.
const data: { navMain: NavItem[] } = {
  navMain: [
    {
      title: "Text Animations",
      url: "#",
      items: [
        {
          title: "Text Reveal",
          url: "/text-reveal",
        },
      ],
    },
    {
      title: "General Animations",
      url: "#",
      items: [
        {
          title: "Fade In",
          url: "/fade-in",
        },
        {
          title: "Mouse Follow",
          url: "/mouse-follow",
        }
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-border">
        <div className="flex gap-2 p-1">
          <ModeToggle />
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://github.com/bramdenelzen/shadcn-gsap-primitives"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items?.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
