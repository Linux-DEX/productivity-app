import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SidebarContextProvider } from "@/context/sidebarContext";
import NavMenu from "@/components/sidebar/NavMenu";

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
    <html lang="en" suppressHydrationWarning>
      <body data-theme="light">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
        >
          <SidebarContextProvider>
            <div className="flex h-screen">
              <NavMenu />
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
          </SidebarContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
