import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layouts/AppSidebar";
import "./globals.css";
import Navbar from "@/components/dashboard/Navbar";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard | DripOnDrip Ecom",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
