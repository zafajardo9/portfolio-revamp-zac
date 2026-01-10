import type { Metadata } from "next";
import { Quicksand, Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClientLayout } from "@/components/layout/client-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { DEFAULT_IMAGE_URL, personalInfo, socialLinks } from "@/data/content";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3001")
  ),
  verification: {
    google: "EAAodF0He7fXzFVk2y6i9Ce_DRkZBq4RaEeHTRXbofw",
  },
  title: {
    default: personalInfo.name,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.title} portfolio. ${personalInfo.bio}`,
  keywords: [
    "Zack",
    "Zackery",
    "Zackery Alline Fajardo",
    "Zackery Fajardo",
    "Alline Fajardo",
    "Zafajardo",
    "Software Engineer",
    "Fullstack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: personalInfo.name,
    description: `${personalInfo.title} portfolio. ${personalInfo.bio}`,
    url: "/",
    siteName: personalInfo.name,
    type: "website",
    images: [
      {
        url: DEFAULT_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: personalInfo.name,
    description: `${personalInfo.title} portfolio. ${personalInfo.bio}`,
    images: [DEFAULT_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3001");

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: personalInfo.name,
      url: siteUrl,
      jobTitle: personalInfo.title,
      description: personalInfo.bio,
      sameAs: [
        socialLinks.github,
        socialLinks.linkedin,
        socialLinks.facebook,
      ].filter(Boolean),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: personalInfo.name,
      url: siteUrl,
    },
  ];

  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${quicksand.className} antialiased selection:bg-primary/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
