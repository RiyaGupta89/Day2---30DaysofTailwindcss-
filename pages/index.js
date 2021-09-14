import Head from 'next/head'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-auto py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Navbar />
     <Hero/>
     <About />
     <Pricing />
     <Team />
     <Contact />
     <Footer />

     
    </div>
  )
}
