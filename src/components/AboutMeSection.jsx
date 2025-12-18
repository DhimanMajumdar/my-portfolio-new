"use client"
import React, { startTransition } from 'react'
import Image from 'next/image'
import {useState, useTransition} from "react"
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm sm:text-base">
        <li><span className="font-semibold text-white">Languages:</span> C++, JavaScript (ES6+), Python, SQL, HTML, CSS</li>
        <li><span className="font-semibold text-white">Frontend:</span> React.js, Next.js, Zustand, Redux, Tailwind CSS</li>
        <li><span className="font-semibold text-white">Backend:</span> Node.js, Express.js, FastAPI, WebSockets, REST APIs</li>
        <li><span className="font-semibold text-white">Databases:</span> MongoDB, Firebase, Supabase</li>
        <li><span className="font-semibold text-white">AI & LLM Tools:</span> OpenAI APIs, Google Gemini, Hugging Face, Ollama, LangChain, LangGraph, Prompt Engineering</li>
        <li><span className="font-semibold text-white">Cloud & Infrastructure:</span> AWS EC2, Docker</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside space-y-4 text-gray-300 text-sm sm:text-base">
        <li className="mb-4">
          <span className="font-semibold text-white block">Bachelor of Technology in Computer Science</span>
          Pranveer Singh Institute of Technology, Kanpur
          <br className="sm:hidden" />
          <span className="text-sm text-gray-400 block mt-1">Dec 2022 – Jun 2026</span>
        </li>
        <li>
          <span className="font-semibold text-white block">Senior Secondary & Secondary Education</span>
          Ganga International School, New Delhi
          <br className="sm:hidden" />
          <span className="text-sm text-gray-400 block mt-1">Class XII: 85% | Class X: 90.6%</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm sm:text-base">
        <li className="mb-2"><span className="font-semibold text-white">Namaste JavaScript</span> — Akshay Saini (NamasteDev) <span className="text-xs sm:text-sm text-gray-400">· Feb 2024</span></li>
        <li className="mb-2"><span className="font-semibold text-white">Namaste React</span> — Akshay Saini (NamasteDev) <span className="text-xs sm:text-sm text-gray-400">· Aug 2024</span></li>
        <li className="mb-2"><span className="font-semibold text-white">Namaste Node.js</span> — Akshay Saini (NamasteDev) <span className="text-xs sm:text-sm text-gray-400">· Feb 2025</span></li>
        <li className="mb-2"><span className="font-semibold text-white">Full Stack Generative & Agentic AI</span> — Hitesh Choudhary & Piyush Garg (Udemy) <span className="text-xs sm:text-sm text-gray-400">· Oct 2025</span></li>
        <li><span className="font-semibold text-white">Object Oriented Programming</span> — Raj Vikramaditya (takeUforward) <span className="text-xs sm:text-sm text-gray-400">· Sep 2025</span></li>
      </ul>
    ),
  },
];

const AboutMeSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
    <div className="text-white px-4 sm:px-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 items-center py-12 sm:py-8 sm:px-1 xl:gap-16 xl:px-16">
        {/* Image - Full width on mobile */}
        <div className="w-full h-64 sm:h-80 md:h-auto mb-8 md:mb-0">
          <Image
            src="/AboutMe.jpg"
            width={500}
            height={500}
            alt="me"
            className="w-full h-full rounded-2xl object-cover"
            priority
          />
        </div>
        
        <div className="text-left flex flex-col h-full space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4 leading-tight">
            About Me
          </h2>
          
          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Computer Science undergraduate at Pranveer Singh Institute of Technology, Kanpur, with strong foundations in Data Structures, Algorithms, and full-stack development.
            </p>
            <p>
              Solved 600+ LeetCode problems (1600+ contest rating). Building scalable web apps, AI-powered solutions, and real-time systems. Actively seeking software engineering opportunities.
            </p>
          </div>

          {/* Mobile-first Tab Buttons */}
          <div className="flex flex-wrap gap-3 justify-start">
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("certifications")} 
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-6">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection;
