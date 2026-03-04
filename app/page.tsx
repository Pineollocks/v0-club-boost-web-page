import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Partners } from "@/components/partners"
import { Founders } from "@/components/founders"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Partners />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
