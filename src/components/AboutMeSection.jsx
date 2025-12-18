"use client"
import React, { startTransition } from 'react'
import Image from 'next/image'
import {useState , useTransition} from "react"
import TabButton from './TabButton'

//Data to be displayed in the tabs
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          <span className="font-semibold text-white">Languages:</span>{" "}
          C++, JavaScript (ES6+), Python, SQL, HTML, CSS
        </li>

        <li>
          <span className="font-semibold text-white">Frontend:</span>{" "}
          React.js, Next.js, Zustand, Redux, Tailwind CSS, 
        </li>

        <li>
          <span className="font-semibold text-white">Backend:</span>{" "}
          Node.js, Express.js, FastAPI, WebSockets, REST APIs
        </li>

        <li>
          <span className="font-semibold text-white">Databases:</span>{" "}
          MongoDB, Firebase, Supabase
        </li>

        <li>
          <span className="font-semibold text-white">AI & LLM Tools:</span>{" "}
          OpenAI APIs, Google Gemini, Hugging Face, Ollama, LangChain,
          LangGraph, Prompt Engineering
        </li>

        <li>
          <span className="font-semibold text-white">
            Cloud & Infrastructure:
          </span>{" "}
          AWS EC2, Docker
        </li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          <span className="font-semibold text-white">
            Bachelor of Technology in Computer Science
          </span>{" "}
          — Pranveer Singh Institute of Technology, Kanpur
          <br />
          <span className="text-sm text-gray-400">
            Dec 2022 – Jun 2026
          </span>
        </li>

        <li>
          <span className="font-semibold text-white">
            Senior Secondary & Secondary Education
          </span>{" "}
          — Ganga International School, New Delhi
          <br />
          <span className="text-sm text-gray-400">
            Class XII: 85% | Class X: 90.6%
          </span>
        </li>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          <span className="font-semibold text-white">
            Namaste JavaScript
          </span>{" "}
          — Akshay Saini (NamasteDev)
          <span className="text-sm text-gray-400"> · Feb 2024</span>
        </li>

        <li>
          <span className="font-semibold text-white">
            Namaste React
          </span>{" "}
          — Akshay Saini (NamasteDev)
          <span className="text-sm text-gray-400"> · Aug 2024</span>
        </li>

        <li>
          <span className="font-semibold text-white">
            Namaste Node.js
          </span>{" "}
          — Akshay Saini (NamasteDev)
          <span className="text-sm text-gray-400"> · Feb 2025</span>
        </li>

        <li>
          <span className="font-semibold text-white">
            Full Stack Generative & Agentic AI
          </span>{" "}
          — Hitesh Choudhary & Piyush Garg (Udemy)
          <span className="text-sm text-gray-400"> · Oct 2025</span>
        </li>

        <li>
          <span className="font-semibold text-white">
            Object Oriented Programming
          </span>{" "}
          — Raj Vikramaditya (takeUforward)
          <span className="text-sm text-gray-400"> · Sep 2025</span>
        </li>
      </ul>
    ),
  },
];



//---------------------------------------------------------------------------------------------------------------------------------------------------

const AboutMeSection = () => {
  
    const [tab , setTab]= useState("skills");
    const [  isPending  , startTransition]=useTransition();

  //for the transition when we click on skills , certification and education
  
const handleTabChange=(id)=>{
  startTransition(()=>{
    setTab(id);
  })
}

  return (

    // ABOUT ME
    <div className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-1 xl:gap-16 sm:py-16 xl:px-16">
        <Image
        src="/AboutMe.jpg" width={500} height={500} alt="me"
        className="rounded-2xl "
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2  className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">About Me</h2>
      <p className="text-base sm:p-0">
  I am a Computer Science undergraduate at Pranveer Singh Institute of
  Technology, Kanpur, with strong foundations in Data Structures,
  Algorithms, and full-stack development. I specialize in building
  scalable, user-centric applications using modern web and AI
  technologies.
</p>

<br />

<p>
  I have solved 600+ problems on LeetCode with a consistent contest rating
  of 1600+, and I enjoy working on real-world systems involving
  real-time communication, cloud deployment, and AI-powered solutions. I
  am actively seeking software engineering opportunities where I can
  contribute, learn, and grow.
</p>
   
 {/* TAB Headings */}
 <div className="flex flex-row justify-start mt-8">
    <TabButton selectTab={()=> handleTabChange("skills")} active = {tab === "skills"}>{" "}Skills{" "}</TabButton>
    <TabButton selectTab={()=> handleTabChange("education")} active = {tab === "education"}>{" "}Education{" "}</TabButton>
    <TabButton selectTab={()=> handleTabChange("certifications")} active = {tab === "certifications"}>{" "}Certifications{" "}</TabButton>
   </div>

 {/* displaying the tab content */}
<div className="mt-8">{TAB_DATA.find((t)=> t.id===tab).content}</div>




</div>
      </div>
     
    </div>
  )
}

export default AboutMeSection
