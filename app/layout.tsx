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
  "description": "Urganize helps artist teams collect collaborator credits, organize release assets, and track every step of a release from start to finish.",
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
  "description": "Urganize helps artist teams collect collaborator credits, organize release assets, and track every step of a release from start to finish."
} as const;

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Urganize",
  "description": "Urganize helps artist teams collect collaborator credits, organize release assets, and track every step of a release from start to finish.",
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

const marketingThemeScript = `
  try {
    const storageKey = "urganize-marketing-theme";
    const storedTheme = window.localStorage.getItem(storageKey);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;
    document.documentElement.dataset.marketingTheme = theme;
  } catch (error) {
    document.documentElement.dataset.marketingTheme = "light";
  }
`;

export const metadata: Metadata = {
  title: {
    default: "Urganize",
    template: "%s | Urganize",
  },
  description:
    "Urganize helps artist teams collect collaborator credits, organize release assets, and track every step of a release from start to finish.",
  verification: {
    google: "",
  },

  metadataBase: new URL("https://urganize.app"),
  openGraph: {
    title: "Urganize",
    description:
      "Urganize helps artist teams collect collaborator credits, organize release assets, and track every step of a release from start to finish.",
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
      "Urganize helps artist teams collect collaborator credits, organize release assets, and track every step of a release from start to finish.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Urganize" />
        <script dangerouslySetInnerHTML={{ __html: marketingThemeScript }} />

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
