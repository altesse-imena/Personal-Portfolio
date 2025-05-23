import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./context/theme-provider"
import { PreventTransitions } from "./components/prevent-transitions"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter"
})

export const metadata = {
  title: "Altesse Imena - Portfolio",
  description: "Personal portfolio of Altesse Imena, a software developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
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

