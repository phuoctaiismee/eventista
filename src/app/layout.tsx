import type { Metadata } from "next";
import { Montserrat, Unbounded } from "next/font/google";
import "./globals.css";

import GlobalRootLayout from "@/layouts/root-layout";
import { COMMON } from "@/configs";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mister-tourism-world.vercel.app/"),
  title: {
    template: "%s",
    default: "Mister Tourism World",
  },
  description: "Mister Tourism World",
  openGraph: {
    title: COMMON.meta.title,
    description: COMMON.meta.description,
    url: "/",
    locale: "en-US",
    siteName: COMMON.meta.title,
    type: "website",
    images: [
      {
        url: COMMON.meta.image,
      },
    ],
  },
  twitter: {
    title: COMMON.meta.title,
    description: COMMON.meta.description,
    images: COMMON.meta.image,
    card: "summary_large_image",
  },
  alternates: {
    canonical: `/`,
  },
  icons: {
    icon: [
      {
        url: COMMON.meta.image,
        type: "image/png",
      },
      {
        url: COMMON.meta.image,
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: COMMON.meta.image,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: COMMON.meta.image,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [COMMON.meta.image],
    apple: [
      { url: COMMON.meta.image },
      {
        url: COMMON.meta.image,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: COMMON.meta.image,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Not nesscessary right now
  // manifest: `/manifest.json`,
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["teknix@gmail.com", "https://mister-tourism-world.vercel.app/"],
    },
  },
  appLinks: {
    web: {
      url: "/",
      should_fallback: true,
    },
  },
  archives: ["/"],
  assets: ["/public/assets"],
  bookmarks: ["/"],
  category: "Booking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sf ${montserrat.variable} ${unbounded.variable} antialiased`}
      >
        <GlobalRootLayout>{children}</GlobalRootLayout>
      </body>
    </html>
  );
}
