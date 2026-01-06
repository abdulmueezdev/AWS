"use client";

// import Navbar from "@/components/Navbar"; // Old navbar - commented out
import TubelightNavbar from "@/components/TubelightNavbar";
// import Hero from "@/components/Hero"; // Old hero - commented out
import { AnimatedHero } from "@/components/AnimatedHero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TubelightNavbar />

      <AnimatedHero />

      <About />

      <Events />


      <Blogs />

      <Team />

      <Contact />

      <Footer />
    </main>
  );
}
