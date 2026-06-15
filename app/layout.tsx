import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digiprint.mx'),
  title: {
    default: 'DigiPrint | Imprenta Profesional en Tijuana',
    template: '%s | DigiPrint Tijuana',
  },
  description:
    'Dale presencia a tu marca. Material publicitario de alta calidad para empresas y emprendedores en Tijuana. Atención personalizada y entrega rápida. Solicita tu cotización.',
  keywords: [
    'imprenta en Tijuana',
    'imprenta profesional Tijuana',
    'impresión digital Tijuana',
    'gran formato Tijuana',
    'lonas publicitarias Tijuana',
    'stickers Tijuana',
    'rotulación Tijuana',
    'branding vehicular Tijuana',
    'DTF Tijuana',
    'material publicitario Tijuana',
    'impresión Baja California',
  ],
  authors: [{ name: 'DigiPrint' }],
  creator: 'DigiPrint',
  publisher: 'DigiPrint',
  alternates: {
    canonical: 'https://www.digiprint.mx',
  },
  category: 'Imprenta',
  verification: {
    google: 'google1137412cbdd0b236',
  },
  openGraph: {
    title: 'DigiPrint | Imprenta Profesional en Tijuana',
    description:
      'Dale presencia a tu marca. Material publicitario de alta calidad para empresas y emprendedores. Atención personalizada y entrega rápida.',
    url: 'https://www.digiprint.mx',
    siteName: 'DigiPrint',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'DigiPrint – Imprenta Profesional en Tijuana',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiPrint | Imprenta Profesional en Tijuana',
    description:
      'Material publicitario de alta calidad para empresas y emprendedores en Tijuana. Solicita tu cotización.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'PrintShop',
      '@id': 'https://www.digiprint.mx/#business',
      name: 'DigiPrint',
      description:
        'Imprenta profesional en Tijuana. Material publicitario de alta calidad para empresas y emprendedores: lonas, stickers, rotulación, DTF, branding vehicular y gran formato.',
      url: 'https://www.digiprint.mx',
      telephone: '+52-664-607-0369',
      email: 'administracion@digiprint.mx',
      image: 'https://www.digiprint.mx/opengraph-image.png',
      logo: 'https://www.digiprint.mx/logo-digiprint.svg',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Blvd. de las Bellas Artes 19576, Nueva Tijuana',
        addressLocality: 'Tijuana',
        addressRegion: 'Baja California',
        postalCode: '22435',
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.59143565799971,
        longitude: -116.93889132164438,
      },
      hasMap: 'https://www.google.com/maps?q=32.59143565799971,-116.93889132164438',
      areaServed: [
        {
          '@type': 'City',
          name: 'Tijuana',
        },
        {
          '@type': 'State',
          name: 'Baja California',
        },
      ],
      sameAs: [
        'https://www.instagram.com/digiprint.tj',
        'https://www.facebook.com/share/1bBCMooukv/',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.5',
        reviewCount: '31',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '14:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de imprenta en Tijuana',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'DTF',
              description:
                'Transfer textil de alta resolución para producción rápida y a la medida en Tijuana.',
              areaServed: 'Tijuana',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lonas',
              description:
                'Impresión de lonas y banners publicitarios de alta fidelidad para exteriores e interiores.',
              areaServed: 'Tijuana',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Rotulación',
              description:
                'Rótulos, letreros y señalética corporativa instalada llave en mano.',
              areaServed: 'Tijuana',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Stickers',
              description:
                'Calcomanías y etiquetas con corte de precisión y producción de alto volumen.',
              areaServed: 'Tijuana',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Branding Vehicular',
              description:
                'Rotulación vehicular y branding para flotillas, vans, food trucks y unidades comerciales.',
              areaServed: 'Tijuana',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Gran Formato',
              description:
                'Impresión en gran formato con color preciso y acabados profesionales.',
              areaServed: 'Tijuana',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Prendas personalizadas',
              description:
                'Playeras, uniformes y merchandising con sublimación, DTF y bordado.',
              areaServed: 'Tijuana',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.digiprint.mx/#website',
      name: 'DigiPrint',
      url: 'https://www.digiprint.mx',
      inLanguage: 'es-MX',
      publisher: {
        '@id': 'https://www.digiprint.mx/#business',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.digiprint.mx/#webpage',
      name: 'DigiPrint | Imprenta Profesional en Tijuana',
      url: 'https://www.digiprint.mx',
      description:
        'Dale presencia a tu marca. Material publicitario de alta calidad para empresas y emprendedores en Tijuana.',
      inLanguage: 'es-MX',
      isPartOf: {
        '@id': 'https://www.digiprint.mx/#website',
      },
      about: {
        '@id': 'https://www.digiprint.mx/#business',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.digiprint.mx/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <GoogleTagManager gtmId="GTM-5H5FLWHW" />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-699809669"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-699809669');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
