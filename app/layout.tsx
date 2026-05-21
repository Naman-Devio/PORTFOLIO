import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Naman Vaishnav ✌️",
  description: "B.Tech CSE student at Kota MIT College, building bots, APIs, and interactive web experiences.",
  keywords: "Naman Vaishnav, B.Tech CSE, Kota MIT College, Telegram bots, FastAPI, Web development",
  authors: [{ name: "Naman Vaishnav" }],
  creator: "Naman Vaishnav",
  publisher: "Naman Vaishnav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Naman Vaishnav - B.Tech CSE Student",
    description: "B.Tech CSE student at Kota MIT College, building bots, APIs, and interactive web experiences.",
    url: "https://github.com/Naman-Devio/PORTFOLIO",
    siteName: "Naman Vaishnav's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Vaishnav - B.Tech CSE Student",
    description: "B.Tech CSE student at Kota MIT College, building bots, APIs, and interactive web experiences.",
  },
  verification: {
    google: "",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'}/>
    </html>
  );
}
