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
  "name": "The Operating System for Music Teams",
  "url": "https://urganize.app",
  "logo": "https://urganize.app/images/urganize-logo.png",
  "description": "The all-in-one platform for music teams. AI-guided release decisions, organized tasks, and content planning. One system, zero confusion.",
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
  "name": "The Operating System for Music Teams",
  "url": "https://urganize.app",
  "description": "The all-in-one platform for music teams. AI-guided release decisions, organized tasks, and content planning. One system, zero confusion.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://urganize.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
} as const;

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "The Operating System for Music Teams",
  "description": "The all-in-one platform for music teams. AI-guided release decisions, organized tasks, and content planning. One system, zero confusion.",
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
    default: 'The Operating System for Music Teams',
    template: '%s - The Operating System for Music Teams',
  },
  description:
    'The all-in-one platform for music teams. AI-guided release decisions, organized tasks, and content planning. One system, zero confusion.',
  verification: {
    google: '',
  },

  metadataBase: new URL('https://urganize.app'),
  openGraph: {
    title: 'The Operating System for Music Teams',
    description:
      'AI-guided release decisions. Organized tasks. Content planning. Everything your music team needs in one place.',
    url: 'https://urganize.app',
    siteName: 'The Operating System for Music Teams',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png?v=2',
        width: 1200,
        height: 630,
        alt: 'The Operating System for Music Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png?v=2'],
  },
  keywords: [
    'music team platform',
    'music release management',
    'artist team tools',
    'music operations software',
    'release planning system',
    'music project management',
    'AI music guidance',
    'music release checklist',
    'music team workspace',
    'release management platform',
    'music promotion planning',
    'music workflow automation',
    'release task management',
    'music operations system',
    'intelligent music guidance',
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
