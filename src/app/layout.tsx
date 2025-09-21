

import "./globals.css";
import Header from "./Header";


export const metadata = {
  title: 'My homepage',
  description: '個人テストホームページ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="ja">
      <body className="bg-yellow-50 font-sans min-h-dvh flex flex-col">
        <Header />
        <main className="w-full px-4 sm:px-6 md:px-10 lg:px-20 bg-yellow-50 flex-1">
          {children}
        </main>
        <footer className="w-full px-4 sm:px-6 md:px-10 lg:px-20 text-sm sticky top-full bg-yellow-50 flex py-4 border-t border-gray-200">
          <p className="text-sm md:base lg:text-xl text-gray-600">© 2025 HIROTA. </p>
        </footer>
      </body>
    </html>
  )
}

