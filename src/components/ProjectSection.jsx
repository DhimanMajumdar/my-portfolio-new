import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "DevFusion",
    description: "Social platform for developers to connect, chat, and collaborate with real-time communication, JWT authentication, Cron jobs, Amazon SES, deployed on AWS EC2.",
    image: "/DevFusion.png",
    liveUrls: ["https://devfusion.co.in"],
    githubUrl: "https://github.com/DhimanMajumdar/DevFusion-full"
  },
  {
    id: 2,
    title: "EmPath AI",
    description: "AI-powered mental health assistant providing empathetic conversations, distress detection, crisis escalation, and privacy-first support via web and WhatsApp.",
    image: "/empath-ai.png",
    liveUrls: [
      "https://drive.google.com/file/d/13SI6v33GP6JE3SMJEBrN83iCPChUiOmn/view?usp=drive_link",
      "https://drive.google.com/file/d/1nFgPfCYbVxMlQpevh0gwwSxNCxI6RJgm/view?usp=drive_link"
    ],
    githubUrl: "https://github.com/DhimanMajumdar/EmPath-AI---AI-MENTAL-THERAPIST"
  },
  {
    id: 3,
    title: "FakeFlix GPT",
    description: "Netflix-like platform with movie recommendations powered by Gemini AI, secure Firebase Auth, TMDB API, interactive trailers, and responsive UI.",
    image: "/fakeflix.png",
    liveUrls: ["https://fakeflix-gpt-5dp4.vercel.app/"],
    githubUrl: "https://github.com/DhimanMajumdar/fakeflix-gpt"
  },
  {
    id: 4,
    title: "AI Personalized Newsletter Generator",
    description: "Next.js & Supabase based AI newsletter platform using Gemini AI, Inngest, and EmailJS for personalized, scheduled content delivery.",
    image: "/newsletter.png",
    liveUrls: ["https://ai-newsletter-generatorr.vercel.app/"],
    githubUrl: "https://github.com/DhimanMajumdar/AI-Newsletter-SaaS"
  },
  {
    id: 5,
    title: "AtlasAura",
    description: "React & Tailwind CSS app for exploring countries with real-time data, responsive UI, search, sort, and embedded YouTube travel guides.",
    image: "/atlasAura.png",
    liveUrls: ["https://dhiman-atlasaura.netlify.app"],
    githubUrl: "https://github.com/yourusername/AtlasAura.git"
  },
  {
    id: 6,
    title: "Speak2SQL",
    description: "AI-powered Text-to-SQL system using Python, Streamlit, LangChain, Llama 3, and Matplotlib for live database queries and visualizations.",
    image: "/sql.png",
    liveUrls: [""],
    githubUrl: "https://github.com/DhimanMajumdar/Speak2SQL"
  },
  
];

const ProjectSection = () => {
  return (
    <div>
      <div className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        My Projects
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            liveUrls={project.liveUrls}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
