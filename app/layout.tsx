"use client";

import "./page.css";
import "./comon.css";
import "./modal.css";
import "./globals.css";

import Layout from "./components/layout";
import ThemeRegistry from "./theme-registry";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { Suspense } from "react";

/* ---- LOCAL FONTS ---- */
const geistSans = localFont({
  src: "../public/fonts/Geist/ttf/Geist-Regular.ttf",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono/ttf/GeistMono-Regular.ttf",
  variable: "--font-geist-mono",
});

/* ---- Layout wrapper which uses usePathname ---- */
function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayoutRoutes = ["/about"];
  const showHeader = !hideLayoutRoutes.includes(pathname);

  return showHeader ? <Layout>{children}</Layout> : <>{children}</>;
}

/* ---- ROOT LAYOUT ---- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>loyalty credit</title>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          {/* 🔥 Suspense boundary added */}
          <Suspense fallback={<div>Loading...</div>}>
            <LayoutWrapper>{children}</LayoutWrapper>
          </Suspense>
        </ThemeRegistry>
      </body>
    </html>
  );
}
