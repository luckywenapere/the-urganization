import type { Metadata } from "next";
import { Inter, Caveat_Brush } from "next/font/google";
import "./globals.css";

// Load fonts properly
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveatBrush = Caveat_Brush({
  variable: "--font-caveat-brush",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Urganization",
  description: "The Urganization is here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveatBrush.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}