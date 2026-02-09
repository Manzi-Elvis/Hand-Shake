import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Handshake - Collaborative Workspace',
  description: 'The all-in-one collaboration platform combining docs, boards, and chat for modern teams.',
  generator: 'next.js',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Handshake',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#001a2e" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased dark bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
