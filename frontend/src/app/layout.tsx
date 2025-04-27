import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/sidebar/sidebar";
import SidebarItem from "@/components/sidebar/sidebarItem";
import { SidebarContextProvider } from "@/context/sidebarContext";

export const metadata: Metadata = {
  title: "Productivity app",
  description: "Testing different nextjs project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="light">
        {/* <ThemeProvider attribute="data-theme">{children}</ThemeProvider> */}
        <ThemeProvider attribute="data-theme">
          <SidebarContextProvider>
            <div className="flex h-screen">
              <Sidebar>
                <SidebarItem text={"dashboard"} active />
                <SidebarItem text={"dashboard"} />
                <SidebarItem text={"dashboard"} alert />
                <hr className="my-3" />
                <SidebarItem text={"dashboard"} />
              </Sidebar>
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
          </SidebarContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
