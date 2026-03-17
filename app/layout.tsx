import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import FormbricksProvider from "./formbricks-provider";
import { Analytics } from "@vercel/analytics/next";

// Typography
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// JSON-LD Schema Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Urganize",
  "url": "https://urganize.app",
  "logo": "https://urganize.app/images/urganize-logo.png",
  "description": "Release operations software for music managers and small label teams. Collect collaborator credits, structure release metadata automatically, and track what is ready next.",
  "sameAs": [
    "https://x.com/urganize",
    "https://linkedin.com/company/urganize",
    "https://instagram.com/urganize"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "theurganization@gmail.com",
    "contactType": "Customer Support"
  }
} as const;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Urganize",
  "url": "https://urganize.app",
  "description": "Release operations software for music teams. Stop chasing collaborators and re-typing song credits."
} as const;

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Urganize",
  "description": "Stop chasing collaborators and re-typing song credits. Collect credits once, structure metadata automatically, and prepare releases weeks before deadlines.",
  "url": "https://urganize.app",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://urganize.app"
      }
    ]
  }
} as const;

export const metadata: Metadata = {
  title: {
    default: "Urganize",
    template: "%s | Urganize",
  },
  description:
    "Release operations software for music teams. Collect collaborator credits, structure metadata automatically, and know what is ready, what is missing, and what to do next.",
  verification: {
    google: "",
  },

  metadataBase: new URL("https://urganize.app"),
  openGraph: {
    title: "Urganize",
    description:
      "Stop chasing collaborators and re-typing song credits. Collect credits once, structure metadata automatically, and prepare releases weeks before deadlines.",
    url: "https://urganize.app",
    siteName: "Urganize",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "Urganize release operations software for music teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urganize",
    description:
      "Stop chasing collaborators and re-typing song credits. Collect credits once, structure metadata automatically, and prepare releases weeks before deadlines.",
    images: ["/opengraph-image.png?v=2"],
  },
  keywords: [
    "music release operations software",
    "music manager tools",
    "small label workflow",
    "collaborator credit collection",
    "release metadata software",
    "release readiness tracking",
    "music metadata management",
    "release command center",
    "music team workspace",
    "release operations platform",
    "song credits workflow",
    "music release management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Urganize" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4PX21EV8K"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X4PX21EV8K');
          `,
        }} />

        {/* Manual canonical tag - always include this */}
        <link rel="canonical" href="https://urganize.app" />

        {/* JSON-LD STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          key="organization-schema"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          key="website-schema"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
          key="homepage-schema"
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense>
          <FormbricksProvider />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
