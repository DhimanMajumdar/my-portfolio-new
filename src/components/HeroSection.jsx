"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 px-4 sm:px-6 lg:px-0 py-16 lg:py-24">
      
      {/* Left Content */}
      <div className="col-span-1 lg:col-span-7 place-self-center text-center lg:text-left order-2 lg:order-1">
        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="text-white block sm:inline">Hello, I'm </span>
          <span className="block sm:inline bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Dhiman Majumdar |", 1000,
                "Full Stack Developer |", 1000,
                "Agentic and GenAI Enthusiast |", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block"
            />
          </span>
        </h1>

        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 px-4 sm:px-0">
          Full-Stack Developer with strong DSA fundamentals, experienced in building scalable web applications, AI-powered solutions, and real-time systems using React, Node.js, FastAPI, Next.js and AWS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
          <Link href="#contact">
            <button className="px-8 py-4 sm:px-6 sm:py-3 rounded-full text-lg font-medium w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl">
              Hire Me
            </button>
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-3 flex-1 sm:flex-none">
            <Link href="/Dhiman_Resume_Upd.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-all">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 sm:px-7 py-3 sm:py-3 text-white text-sm sm:text-base">
                  Download Resume
                </span>
              </button>
            </Link>
            <Link href="https://leetcode.com/Dhiman_07" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-all">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 sm:px-7 py-3 sm:py-3 text-white text-sm sm:text-base">
                  LeetCode
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image - HIDDEN ON MOBILE */}
      <div className="hidden lg:flex col-span-1 lg:col-span-5 justify-center items-center place-self-center order-1 lg:order-2 mt-4 lg:mt-0">
        <div className="relative w-72 lg:w-72 xl:w-80 h-72 lg:h-72 xl:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-2">
          <Image
            src="/my.jpeg"
            alt="Dhiman Majumdar"
            fill
            className="object-cover object-center"
            priority
            sizes="33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
