"use client";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import SpecialOrders from "./components/specialOrders";
import Testimonials from "./components/testimonials";
import Features from "./components/features";
import NewsLetter from "./components/newsLetter";
import Footer from "./components/footer";

export default function Home(){
  return(
      <main>
        <Navbar 
        className="fixed top-full left-0 w-full"
        />
        <section>
          <Hero />
        </section>
        <div>
          <SpecialOrders />
        </div>
        <section>
          <Features />
        </section>
        <section>
          <Testimonials />
        </section>
        <form>
          <NewsLetter />
        </form>
        <footer>
          <Footer />
        </footer>
      </main>
    );
}