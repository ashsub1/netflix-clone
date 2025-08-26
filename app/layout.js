import './globals.css'

export const metadata = {
  title: 'Netflix Clone',
  description: 'Netflix UI built with Next.js 14 + Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
