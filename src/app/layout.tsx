import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Geist, Geist_Mono, Pinyon_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

// Used by the example website mockups (wedding/event invitation styling)
const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    'ThinkHighly Apps | Websites for Weddings, Birthdays & Small Businesses',

  description:
    'Beautiful, easy websites for weddings, birthday parties and small businesses in South Africa, plus mobile apps and custom software. No tech skills needed.',

  keywords: [
    'wedding website South Africa',
    'birthday party website',
    'small business website',
    'affordable website design',
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
      'Websites for weddings, birthdays and small businesses, plus apps and custom software.',
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${pinyonScript.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


