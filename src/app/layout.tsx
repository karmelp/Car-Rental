import Head from 'next/head';
import Sidebar from "@/components/sidebar/Sidebar"
import './globals.scss'

export const metadata = {
  title: {
    template: '%s | Car rental',
    default: 'Car rental',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
      </Head>
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
