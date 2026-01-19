import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import FormbricksProvider from "./formbricks-provider";

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
  "description": "AI-guided release management platform for artist managers and independent artists. One task at a time, intelligently adapted to your progress.",
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
  "description": "AI-guided release management that shows you exactly what to do next. One task at a time, adapted to your results.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://urganize.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
} as const;

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Urganize: AI-Guided Release Management for Music Artists",
  "description": "Release music without the stress. Urganize gives you one task at a time, intelligently guided by your progress. Complete a step, share the outcome, get your next move.",
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
    default: 'Urganize: AI-Guided Release Management for Music Artists',
    template: '%s - Urganize',
  },
  description:
    'Release music without the stress. Urganize gives you one task at a time, intelligently guided by your progress. Built for artist managers and independent artists.',
  verification: {
    google: '',
  },

  metadataBase: new URL('https://urganize.app'),
  openGraph: {
    title: 'Release Music Without the Stress | Urganize',
    description:
      'AI-guided release management. One task at a time, adapted to your results. Stop the overwhelm, start shipping music.',
    url: 'https://urganize.app',
    siteName: 'Urganize',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Urganize - AI-Guided Release Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png?v=2'],
  },
  keywords: [
    'AI release management',
    'music release platform',
    'artist manager tools',
    'independent artist software',
    'release planning',
    'music project management',
    'AI-guided workflow',
    'music release checklist',
    'artist team workspace',
    'release management system',
    'music promotion planning',
    'artist workflow automation',
    'release task management',
    'music operations software',
    'intelligent release guidance',
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
      </body>
    </html>
  );
}
