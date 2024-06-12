import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from './components/Navbar'
import Project from "./components/project";
import Skill from "./components/Skill";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96]">
      <Navbar/>
      <HeroSection/>
      <Skill/>
      <Project/>
      </main>
  );
}
