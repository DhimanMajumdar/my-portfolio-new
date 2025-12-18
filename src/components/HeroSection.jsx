"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      
      {/* Left Content */}
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:text-5xl">
          <span className="text-white">Hello, I&apos;m </span><br/>
          <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Dhiman Majumdar |", 1000,
                "Full Stack Developer |", 1000,
                "Agentic and GenAI Enthusiast |", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-[#ADB7BE] text-base lg:text-lg leading-relaxed max-w-xl mb-6">
          Full-Stack Developer with strong DSA fundamentals, experienced in building scalable web applications, AI-powered solutions, and real-time systems using modern technologies like React, Node.js, FastAPI, Next.js and cloud deployment on AWS.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* Hire Me Button */}
          <button className="px-6 py-3 rounded-full hover:bg-slate-300 text-white w-full sm:w-fit bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 ">
            Hire Me
          </button>
          
          {/* Download Resume Button */}
          <a href="/Dhiman_Resume_Upd.pdf" download target="_blank" rel="noopener noreferrer">
            <button className="px-1 py-1 rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition cursor-pointer">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-3 text-white">
                Download Resume
              </span>
            </button>
          </a>

          {/* LeetCode Button */}
          <a href="https://leetcode.com/Dhiman_07" target="_blank" rel="noopener noreferrer">
            <button className="px-1 py-1 rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition cursor-pointer">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-3 text-white">Leetcode</span>
            </button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-span-5 flex justify-center items-center place-self-center mt-6 lg:mt-4">
        <div className="relative w-62.5 h-62.5 lg:w-75 lg:h-110 rounded-3xl overflow-hidden border-5 border-white hidden md:block">
          <Image
            src="/my.jpeg"
            alt="Dhiman Majumdar"
            width={300}
            height={300}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
