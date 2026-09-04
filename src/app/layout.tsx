import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Forn de Pa i Pastisseria a Parets del Vallès | Forn Calvo",
  description:
    "Forn de pa i pastisseria artesanal a Parets del Vallès. Pa artesà, croissants, pastissos i productes elaborats cada dia al nostre obrador.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const bakeryJsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Forn i Pastisseria Calvo",
  url: "https://fornipastisseriacalvo.vercel.app",
  telephone: "+34935621217",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avinguda de Catalunya, 96",
    postalCode: "08150",
    addressLocality: "Parets del Vallès",
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html
      className={`${inter.variable} ${playfairDisplay.variable}`}
      data-scroll-behavior="smooth"
      lang={locale}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd) }}
          type="application/ld+json"
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
