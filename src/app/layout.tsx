"use client";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layouts/AppSidebar";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Laptop2 } from "lucide-react";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const detect = () => {
      const ua = typeof navigator === "undefined" ? "" : navigator.userAgent;
      const touch =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua) ||
        (typeof window !== "undefined" && window.innerWidth < 900);
      setIsMobile(touch);
    };
    detect();
    window.addEventListener("resize", detect);
    setHydrated(true);
    return () => window.removeEventListener("resize", detect);
  }, []);

  if (hydrated && isMobile) {
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-background via-background to-background relative overflow-hidden`}
        >
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_60%),radial-gradient(circle_at_80%_70%,hsl(var(--primary)/0.12),transparent_55%)]" />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center">
            <div className="mb-8 inline-flex items-center justify-center rounded-2xl border bg-background/70 backdrop-blur-sm p-6 shadow-lg">
              <MonitorSmartphone className="size-14 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-3">
              Optimized for Desktop
            </h1>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              The dashboard experience is currently designed for larger screens
              so you can view analytics, manage products, and process orders
              efficiently. Please open this URL on a desktop or laptop device.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-sm">
              <Button
                className="w-full"
                onClick={() => {
                  navigator.clipboard
                    .writeText(window.location.href)
                    .catch(() => {});
                }}
              >
                Copy Link to Desktop
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md w-full opacity-80">
              <div className="col-span-1 flex flex-col items-center text-xs text-muted-foreground">
                <Laptop2 className="size-6 mb-1" />
                <span>Full tables</span>
              </div>
              <div className="col-span-1 flex flex-col items-center text-xs text-muted-foreground">
                <MonitorSmartphone className="size-6 mb-1" />
                <span>Dense data</span>
              </div>
              <div className="col-span-1 flex flex-col items-center text-xs text-muted-foreground">
                <span className="inline-flex items-center justify-center size-6 rounded-md bg-primary/10 text-primary font-semibold mb-1">
                  ∞
                </span>
                <span>Better view</span>
              </div>
            </div>
            <p className="mt-10 text-[11px] text-muted-foreground/70">
              Need mobile support? Contact us &mdash; coming soon.
            </p>
          </div>
        </body>
      </html>
    );
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex  h-screen`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="p-2.5 w-full">
            <Navbar />
            <DropdownMenuSeparator />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
