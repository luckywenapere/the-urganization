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
  "description": "Music project management software built for artist teams to manage releases, tasks, files, and workflows in one place.",
  "sameAs": [
    "https://x.com/urganize",
    "https://linkedin.com/company/urganize",
    "https://instagram.com/urganize"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "theurganization@gmail.com", // Change to actual contact email
    "contactType": "Customer Support"
  }
} as const;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Urganize",
  "url": "https://urganize.app",
  "description": "Workflow and project management software built specifically for music teams and artist operations.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://urganize.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
} as const;

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Urganize: Manage Music Projects & Releases for Artists",
  "description": "Music project management software built for artist teams to manage releases, tasks, files, and workflows in one place.",
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
    default: 'Urganize: Manage Music Projects & Releases for Artists',
    template: '%s - Urganize',
  },
  description:
    'Urganize: Music project management software for artist teams. Plan releases, track tasks & collaborate efficiently.',
  verification: {
    google: '',
  },

  metadataBase: new URL('https://urganize.app'),
  openGraph: {
    title: 'Urganize – Workflow Software for Music Teams',
    description:
      'Get early access to Urganize, the workflow and project management software built specifically for music teams and artist operations.',
    url: 'https://urganize.app',
    siteName: 'Urganize',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Urganize - Music Project Management Application',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
  },
  keywords: [
    'Music Project Management',
    'Artist Collaboration',
    'Release Planning',
    'Music Team Organization',
    'Creative Workflow',
    'Music Production Management',
    'Artist Team Workspace',
    'Music Project Tracking',
    'Collaboration for Musicians',
    'Music Industry Tools',
    'project management for musicians',
    'music team workflow software',
    'music release planning tool',
    'artist workflow management',
    'organize music releases',
    'tools for independent artists teams',
    'manage music collaborations',
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

        {/* START Formbricks Surveys */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){
                var appUrl = "https://app.formbricks.com";
                var environmentId = "cmja8xlr9xzf0ad01xu8mpoas";
                var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=appUrl+"/js/formbricks.umd.cjs",t.onload=function(){window.formbricks?window.formbricks.setup({environmentId:environmentId,appUrl:appUrl}):console.error("Formbricks library failed to load properly. The formbricks object is not available.");};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();
             }();
            `
          }}
        /> */}
        {/* END Formbricks Surveys */}

      </head>
      
      <body className="antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100 selection:bg-cyan-500 selection:text-slate-900">
        <Suspense fallback={null}>
          <FormbricksProvider />
        </Suspense>
        {children}
      </body>
    </html>
  );
}