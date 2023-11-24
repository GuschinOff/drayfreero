import type { Metadata } from 'next'
import { Audiowide } from 'next/font/google'
import './globals.css'

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: 'DRAY FREERO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={audiowide.className}>{children}</body>
    </html>
  )
}
