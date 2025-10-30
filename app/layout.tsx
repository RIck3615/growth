import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Growth in Peace Services - Conseil, Formation & Accompagnement',
  description: 'Entreprise de conseil, de formation et d\'accompagnement engagée dans la transformation économique et sociale des entreprises en RDC et dans le monde.',
  keywords: 'conseil, formation, accompagnement, RDC, République Démocratique du Congo, transformation économique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


