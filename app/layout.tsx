import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saniya - Frontend Developer & Aspiring Full Stack Engineer",
  description:
    "Personal portfolio of Saniya, a passionate Computer Science student and frontend developer specializing in React.js, JavaScript, and modern web technologies.",
  keywords: "frontend developer, react developer, web developer, javascript, portfolio, computer science",
  authors: [{ name: "Saniya" }],
  openGraph: {
    title: "Saniya - Frontend Developer Portfolio",
    description: "Explore my projects and skills in web development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
