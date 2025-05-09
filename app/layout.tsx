import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "Altesse Imena - Portfolio",
  description: "Personal portfolio of Altesse Imena, a web developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-background text-primary">{children}</body>
    </html>
  )
}

