"use client";
import "./page.css";
import "./comon.css";
import "./modal.css";
import "./globals.css";
import Layout from "./components/layout";
import ThemeRegistry from "./theme-registry";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";

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
  const pathname = usePathname();
  const hideLayoutRoutes = ["/about"];
  const showHeader = !hideLayoutRoutes.includes(pathname);

  return (
    <html lang="en">
      {/* <link rel="icon" href="/favicon.svg" /> */}
      <title>loyalty credit</title>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          {showHeader ? <Layout>{children}</Layout> : <>{children}</>}
        </ThemeRegistry>
      </body>
    </html>
  );
}
