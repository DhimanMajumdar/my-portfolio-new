"use client"
import AboutMeSection from "@/components/AboutMeSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4  ">
      <Navbar/>
    <div className="container mx-auto px-12 py-4">
   <HeroSection/>
   <AboutMeSection/>
   </div>  
    </div>
  );
}
