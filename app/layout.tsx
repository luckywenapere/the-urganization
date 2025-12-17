import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import FormbricksProvider from "./formbricks-provider";

// Premium typography
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

export const metadata: Metadata = {
  title: {
    default: 'Urganize | Focus. Finish. Release.',
    template: '%s - Urganize',
  },
  description:
    'A workspace for artist teams to turn ideas into real music and projects. Plan releases, stay organized, and focus on creating your best work.',
  verification: {
    google: '',
  },

  metadataBase: new URL('https://urganize.app'),
  openGraph: {
    title: 'Focus on making the best music with Urganize',
    description:
      'A workspace for artist teams to turn ideas into real music and projects. Plan releases, stay organized, and focus on creating your best work.',
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