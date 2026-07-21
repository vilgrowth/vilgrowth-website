import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Trust from "./components/Trust.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import Process from "./components/Process.jsx";
import WhyVilGrowth from "./components/WhyVilGrowth.jsx";
import Founder from "./components/Founder.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-bg">
      <Navbar />

      <main>
        <Hero />
        <Trust />
        <Problem />
        <Solution />
        <Process />
        <WhyVilGrowth />
        <Founder />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}