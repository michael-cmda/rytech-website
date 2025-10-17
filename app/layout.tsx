import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "RY Tech IT Solutions - Your Partner in IT, Security & Digital Solutions",
  description:
    "Delivering secure, scalable, and efficient technology solutions for businesses. CCTV installation, networking, cybersecurity, software development, and IT support services.",
  generator: "v0.app",
  keywords: "IT solutions, cybersecurity, CCTV installation, networking, software development, IT support, Davao City",
  authors: [{ name: "RY Tech IT Solutions" }],
  openGraph: {
    title: "RY Tech IT Solutions - Your Partner in IT, Security & Digital Solutions",
    description: "Delivering secure, scalable, and efficient technology solutions for businesses.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
