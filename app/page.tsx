
import Header from "@/components/header";
import Hero from "@/components/layout/hero";
import About from "@/components/layout/about";
import Services from "@/components/layout/services";
import Features from "@/components/layout/features";
import Faq from "@/components/layout/faq";
import Contact from "@/components/layout/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <>
      <Header />
      <main className="main">
          <Hero />
          <About />
          <Services />
          <Features />
          <Faq />
          <Contact />
      </main>
      <Footer />
   </>
  );
}
