
import "./globals.css";
import Link from 'next/link'

export const metadata = {
  title: 'My homepage',
  description: '個人テストホームページ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow">
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-blue-600 hover:underline">HOME</Link></li>
            <li><Link href="/works" className="text-blue-600 hover:underline">Works</Link></li>
            <li><Link href="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <main className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}