import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxBoundary from "@/store/ReduxBoudary";

export const metadata: Metadata = {
  title: "Ultimate Vargani App",
  description: "This is the Ultimate Vargani App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative w-screen bg-orange-50 h-screen capitalize flex justify-center no-scrollbar font-outfit items-start overflow-x-hidden overflow-y-auto">
        <ReduxBoundary>
          <div id="portal"></div>
          {children}
        </ReduxBoundary>
      </body>
    </html>
  );
}
