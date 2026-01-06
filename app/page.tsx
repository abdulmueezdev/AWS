"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <About />

      <Events />


      <Blogs />

      <Team />

      <Contact />

      <Footer />
    </main>
  );
}
