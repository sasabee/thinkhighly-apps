import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    'ThinkHighly Apps | Software Development & Digital Solutions',

  description:
    'ThinkHighly Apps provides modern websites, mobile apps, AI automation, and custom software solutions in South Africa.',

  keywords: [
    'software development South Africa',
    'mobile app development',
    'web development Johannesburg',
    'ThinkHighly Apps',
  ],

  metadataBase: new URL(
    'https://thinkhighlyapps.co.za'
  ),

  verification: {
    google: 'Y7UjkCaYP6L9hhSl7o6QpN3cwacZdnfVNVNfzGCTytI',
  },

  openGraph: {
    title: 'ThinkHighly Apps',
    description:
      'Modern software development, mobile apps, websites, and AI-powered solutions.',
    url: 'https://thinkhighlyapps.co.za',
    siteName: 'ThinkHighly Apps',
    type: 'website',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


