import Head from 'next/head'
import Image from 'next/image'
import Header from './Header'
import Main from './Main'
import Navbar from './Navbar'
import Portfolio from './Portfolio'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Jayden.hu</title>
        <meta name="description" content="jayden.hu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <Navbar />
    </div>
  )
}
