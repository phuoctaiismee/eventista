import type {Metadata} from "next";
import {Montserrat, Unbounded} from "next/font/google";
import "./globals.css";

import GlobalRootLayout from "@/layouts/root-layout";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RTK + Shadcn Core UI",
  description: "RTK + Shadcn Core UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${unbounded.className} ${montserrat.variable} antialiased`}
      >
        <GlobalRootLayout>{children}</GlobalRootLayout>
      </body>
    </html>
  );
}
