/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import TechStack from "@/src/components/sections/TechStack";
import Projects from "@/src/components/sections/Projects";
import Experience from "@/src/components/sections/Experience";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/layout/Footer";

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#0a0a0b] text-slate-200 selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

