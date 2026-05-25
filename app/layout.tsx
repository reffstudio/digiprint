import type { Metadata } from 'next'
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
  title: 'DigiPrint – Impresión Digital y Gran Formato en Tijuana',
  description:
    'La infraestructura detrás de las marcas más grandes de Tijuana. Alta fidelidad en stickers, lonas, posters y branding corporativo.',
  openGraph: {
    title: 'DigiPrint – Impresión Digital y Gran Formato',
    description:
      'La infraestructura detrás de las marcas más grandes de Tijuana. Calidad industrial a un clic de distancia.',
    url: 'https://www.digiprint.mx',
    siteName: 'DigiPrint',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'DigiPrint Banner Comercial',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiPrint – Impresión Digital Premium',
    description:
      'Impresión de alta fidelidad para marcas que dejan huella en Tijuana.',
    images: ['/opengraph-image.png'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <GoogleTagManager gtmId="GTM-5H5FLWHW" />
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
