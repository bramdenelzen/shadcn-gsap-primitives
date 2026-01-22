import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import { MouseFollow } from "@/registry/new-york/gsap-primitives/standard/mouse-follow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn GSAP Primitives",
  description: "Flexible and semantic GSAP primitives for shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <MouseFollow hoverScale={1.8} hideDefaultCursor ease={0.1}>
            <div className="h-3 w-3 rounded-xs border-border shadow-2xl border bg-foreground " />
          </MouseFollow> */}
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-col min-h-screen">
                <AppHeader />
                <main className="w-full container mx-auto pb-10 pt-12 lg:pt-28 px-4 max-w-5xl">
                  {children}
                </main>
                <AppFooter />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
