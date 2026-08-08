import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Instrument_Sans, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
})

export const metadata: Metadata = {
  title: "P. Lokesh — Full-Stack Web Developer & AI Developer",
  description: "P. Lokesh is a Full-Stack Web Developer and AI Developer based in Hyderabad, India, building modern web experiences and intelligent products.",
  generator: "v0.app",
  openGraph: {
    title: "P. Lokesh — Full-Stack Web Developer & AI Developer",
    description: "P. Lokesh is a Full-Stack Web Developer and AI Developer based in Hyderabad, India, building modern web experiences and intelligent products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P. Lokesh — Full-Stack Web Developer & AI Developer",
    description: "P. Lokesh is a Full-Stack Web Developer and AI Developer based in Hyderabad, India, building modern web experiences and intelligent products.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${instrumentSans.variable} ${instrumentSerif.variable} bg-black`}
      >
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
