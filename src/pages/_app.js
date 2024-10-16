import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

import { Quicksand } from 'next/font/google'
import Head from 'next/head'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>

      <main className={`${quicksand.variable} font-quicksand bg-blue  w-full min-h-screen `}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
