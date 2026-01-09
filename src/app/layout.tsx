import type { Metadata } from "next";
import { Quicksand, Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClientLayout } from "@/components/layout/client-layout";
import { ThemeProvider } from "@/components/theme-provider";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quicksand',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: "Zackery Alline Fajardo",
  description: "Fullstack Developer | Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${figtree.variable}`}>
      <body className={`${quicksand.className} antialiased selection:bg-primary/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
