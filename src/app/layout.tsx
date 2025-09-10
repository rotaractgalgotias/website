
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import LayoutProvider from "@/components/providers/LayoutProvider";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rotaractgalgotias.org"),
  title: {
    default: "Rotaract Galgotias Website",
    template: "%s | Rotaract Galgotias Website",
  },
  description:
    "At Rotaract Galgotias, we function as a service-oriented organization that strives to create a better world through volunteerism, community service, and professional development. We are a part of the global network of Rotaract clubs sponsored by Rotary International, which gives us access to a wealth of resources and opportunities for growth.",
  openGraph: {
    title: {
      default: "Rotaract Galgotias Website",
      template: "%s | Rotaract Galgotias Website",
    },
    description:
      "At Rotaract Galgotias, we function as a service-oriented organization that strives to create a better world through volunteerism, community service, and professional development. We are a part of the global network of Rotaract clubs sponsored by Rotary International, which gives us access to a wealth of resources and opportunities for growth.",
    images: [
      {
        url: "https://rotaractgalgotias.org/logo.png",
      },
    ],
    url: "https://rotaractgalgotias.org/",
    siteName: "Rotaract Galgotias Website",
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  keywords: [
    "Rotaract",
    "Rotaract Galgotias",
    "Rotaract Club",
    "Galgotias University",
    "Community Service",
    "Volunteerism",
    "Professional Development",
    "Rotary International",
    "Student Organization",
    "Social Impact",
    "Leadership Development",
    "Youth Service",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content, viewport-fit=cover" 
        />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cn(inter.className, "antialiased")}
        suppressHydrationWarning
      >
        <Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            forcedTheme="light"
            disableTransitionOnChange
          >
            <LayoutProvider>{children}</LayoutProvider>
          </ThemeProvider>

          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
