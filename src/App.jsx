import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { Hero } from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import { Contact } from "./Component/Contact/Contact";
import { Portfolio } from "./Component/Portfolio/Portfolio";

// import your Services, Portfolio, Contact components too

const App = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
            <Services/>
        </section>
        <section id="portfolio">
            <Portfolio/>
        </section>
        <section id="contact">
             <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
