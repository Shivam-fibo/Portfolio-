import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from './components/Navbar'
import Project from "./components/project";
import Skill from "./components/Skill";
import Flex from "./components/Flex";
import Articles from './components/Articles'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96]">
      <Navbar/>
      <HeroSection/>
      <Skill/>
      <Project/>
      <Flex/>
      <Articles/>
   
      </main>
  );
}
