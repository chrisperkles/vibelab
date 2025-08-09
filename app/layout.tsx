import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Vibe Lab Salzburg - Coming Soon',
  description: 'Bringing AI Innovation to Salzburg, Austria. Join us for an exciting journey into the future of artificial intelligence.',
  keywords: ['AI', 'Artificial Intelligence', 'Salzburg', 'Austria', 'Innovation', 'Technology', 'Vibe Lab'],
  openGraph: {
    title: 'AI Vibe Lab Salzburg - Coming Soon',
    description: 'Bringing AI Innovation to Salzburg, Austria. Join us for an exciting journey into the future of artificial intelligence.',
    url: 'https://vibelab.at',
    siteName: 'AI Vibe Lab Salzburg',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Vibe Lab Salzburg - Coming Soon',
    description: 'Bringing AI Innovation to Salzburg, Austria. Join us for an exciting journey into the future of artificial intelligence.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
