import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./context/theme-provider"
import { PreventTransitions } from "./components/prevent-transitions"

// Optimize font loading with display swap and preload
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
  preload: true,
  fallback: ['system-ui', 'sans-serif']
})

export const metadata = {
  title: "Altesse Imena - Portfolio",
  description: "Personal portfolio of Altesse Imena, a software developer specializing in web applications and interactive experiences",
  keywords: ["software developer", "web development", "portfolio", "react", "next.js", "AstroTrip"],
  authors: [{ name: "Altesse Imena" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Altesse Imena - Portfolio",
    description: "Personal portfolio of Altesse Imena, a software developer specializing in web applications and interactive experiences",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider defaultTheme="dark">
          <PreventTransitions />
          <div className="min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

