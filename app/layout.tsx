import "./globals.css"
import { Inter, Jost } from "next/font/google"
import { ThemeProvider } from "./context/theme-provider"
import { PreventTransitions } from "./components/prevent-transitions"
import StructuredData from "./components/structured-data"

// Optimize font loading with display swap and preload
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
  preload: true,
  fallback: ['system-ui', 'sans-serif']
})

const jost = Jost({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-jost",
  preload: true,
  fallback: ['system-ui', 'sans-serif']
})

export const metadata = {
  metadataBase: new URL('https://altesse-imena.vercel.app'),
  title: {
    default: "Altesse Imena - Software Developer Portfolio",
    template: "%s | Altesse Imena"
  },
  description: "Personal portfolio of Altesse Imena, a software developer specializing in web applications and interactive experiences. Explore my projects, skills, and professional journey.",
  keywords: [
    "Altesse Imena", 
    "software developer", 
    "software engineer",
    "web development", 
    "portfolio", 
    "react", 
    "next.js", 
    "typescript",
    "javascript",
    "full-stack developer",
    "Calgary developer",
    "SAIT",
    "AstroTrip",
    "Avenue Living",
    "frontend developer",
    "backend developer"
  ],
  authors: [{ name: "Altesse Imena", url: "https://altesse-imena.vercel.app" }],
  creator: "Altesse Imena",
  publisher: "Altesse Imena",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://altesse-imena.vercel.app",
  },
  openGraph: {
    type: "website",
    title: "Altesse Imena - Portfolio",
    description: "Personal portfolio of Altesse Imena, a software developer specializing in web applications and interactive experiences",
    url: "https://altesse-imena.vercel.app",
    siteName: "Altesse Imena Portfolio",
    images: [
      {
        url: "/images/Thumbnail.png", // Custom thumbnail image
        width: 1200,
        height: 630,
        alt: "Altesse Imena - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altesse Imena - Portfolio",
    description: "Personal portfolio of Altesse Imena, a software developer specializing in web applications and interactive experiences",
    images: ["/images/Thumbnail.png"],
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
    <html lang="en" className={`${inter.variable} ${jost.variable} scroll-smooth`}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
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

