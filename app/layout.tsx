import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Quantavex | Company operating system',
  description: 'Quantavex is a founder-led company in India building Quantrion, Vdoc, and ExoraX.',
  keywords: ['Quantavex', 'Quantrion', 'Vdoc', 'ExoraX', 'EdTech', 'Entertainment', 'Commerce'],
  icons: {
    icon: '/quantavex-logo.jpg',
    shortcut: '/quantavex-logo.jpg',
    apple: '/quantavex-logo.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
