import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { MobileCtaBar } from "./components/mobile-cta-bar";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const siteUrl = "https://bestseoagencymelbourne.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best SEO Agency Melbourne | #1 Ranked Since 2012 | Free $1,200 Audit",
    template: "%s | Best SEO Agency Melbourne",
  },
  description:
    "Melbourne's most awarded SEO agency. 500+ businesses ranked #1 on Google. 12 years of proven results. Claim your free SEO audit (valued at $1,200) — response within 24 hours. No lock-in contracts.",
  keywords: [
    "SEO agency Melbourne",
    "best SEO company Melbourne",
    "Melbourne SEO experts",
    "local SEO Melbourne",
    "SEO consultant Melbourne",
    "search engine optimisation Melbourne",
  ],
  authors: [{ name: "Best SEO Agency Melbourne" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Best SEO Agency Melbourne | #1 Ranked SEO Experts",
    description:
      "500+ Melbourne businesses ranked on page 1 of Google. Free SEO audit worth $1,200. Melbourne's most awarded SEO agency since 2012.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_AU",
    siteName: "Best SEO Agency Melbourne",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Agency Melbourne | #1 Ranked",
    description:
      "500+ Melbourne businesses on Google page 1. Free audit worth $1,200.",
    images: ["/images/og-image.jpg"],
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne, Victoria, Australia",
    "geo.position": "-37.8136;144.9631",
    ICBM: "-37.8136, 144.9631",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "Best SEO Agency Melbourne",
  alternateName: "Best SEO Melbourne",
  description:
    "Melbourne's most awarded SEO agency, delivering page 1 Google rankings for 500+ businesses since 2012. Specialists in local SEO, technical SEO, e-commerce SEO, and authority link building.",
  url: siteUrl,
  telephone: "+611300000000",
  email: "hello@bestseoagencymelbourne.au",
  foundingDate: "2012",
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/office.jpg`,
  priceRange: "$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Credit Card, Bank Transfer, Invoice",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 12, 200 Queen Street",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    postalCode: "3000",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -37.8136, longitude: 144.9631 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Melbourne SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO Melbourne",
          description:
            "Google Maps Pack and local search dominance for Melbourne businesses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical SEO Audit Melbourne",
          description:
            "Comprehensive technical SEO audit covering Core Web Vitals, crawlability and indexation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce SEO Melbourne",
          description:
            "Organic revenue growth for Shopify, WooCommerce and Magento stores",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise SEO Melbourne",
          description:
            "Large-scale SEO programs for enterprise businesses and site migrations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Link Building Australia",
          description:
            "Premium editorial backlink acquisition from authoritative Australian domains",
        },
      },
    ],
  },
  areaServed: [
    "Melbourne",
    "Fitzroy",
    "Collingwood",
    "Richmond",
    "South Yarra",
    "St Kilda",
    "Southbank",
    "Carlton",
    "Brunswick",
    "Hawthorn",
    "Camberwell",
    "Dandenong",
    "Frankston",
  ],
  sameAs: [
    "https://www.facebook.com/bestseomelbourne",
    "https://www.linkedin.com/company/bestseomelbourne",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to show results in Melbourne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Melbourne businesses see measurable ranking movement within 60–90 days, with significant traffic and lead growth by months 4–6. Highly competitive keywords may take 8–12 months. We provide honest, data-backed timelines during your free audit — never inflated promises.",
      },
    },
    {
      "@type": "Question",
      name: "How much does professional SEO cost in Melbourne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Melbourne SEO programs start from $1,500/month for local businesses and scale based on market competitiveness, site size, and goals. Typical mid-market programs run $2,500–$5,000/month. We provide a transparent, fixed-price proposal after your free audit — no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer lock-in SEO contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All our SEO services are on a month-to-month basis with 30 days notice to cancel. We believe results, not contracts, should be the reason you stay. The majority of our clients have been with us for 3+ years.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your Melbourne SEO agency different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine 12 years of Melbourne market experience with a fully in-house team (no outsourcing), proprietary ranking methodology, and a complete focus on business outcomes — not vanity metrics. 98% client retention speaks louder than awards.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside Melbourne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While Melbourne is our home and specialty, we work with clients across all Australian states and internationally. Our remote-first operation means geography is never a barrier to exceptional SEO results.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${playfair.variable} ${lato.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only z-1000 rounded-md bg-gold px-4 py-2 font-bold text-navy focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>
        <MobileCtaBar />
        <SiteNav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
