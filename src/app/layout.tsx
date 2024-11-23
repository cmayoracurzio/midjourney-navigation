import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"

import { ResponsiveLayout } from "@/components/ResponsiveLayout"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Menu improvement ideas for Midjourney",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} text-pretty antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ResponsiveLayout>{children}</ResponsiveLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
