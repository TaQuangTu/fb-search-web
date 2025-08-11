import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/components/language-provider"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "Facebook Search Tool - Tìm Kiếm Facebook & Số Điện Thoại",
    template: "%s | Facebook Search Tool",
  },
  description: "Công cụ tìm kiếm Facebook từ số điện thoại và ngược lại. Nhanh chóng, chính xác và bảo mật.",
  keywords: "facebook uuid, phone number search, facebook search, tìm kiếm facebook, uuid lookup, social media tools",
  authors: [{ name: "Facebook Search Tool" }],
  creator: "Facebook Search Tool",
  publisher: "Facebook Search Tool",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'fbsearch.net'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://fbsearch.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4935991631349621" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-GSXZBMWVSS" />
    </html>
  )
}
