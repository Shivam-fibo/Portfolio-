import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from './components/Navbar'
import Project from "./components/Project";
import Skill from "./components/Skill";

import Articles from './components/Articles'
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96]">
      <Navbar/>
      <HeroSection/>
      <Skill/>
      <Project/>  
  
      <Articles/>
      <Contact/>
      <Footer/>
   
      </main>
  );
}
