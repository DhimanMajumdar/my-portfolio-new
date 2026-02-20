import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "DevFusion",
    description:
      "Social platform for developers to connect, chat, and collaborate with real-time communication, JWT authentication, Cron jobs, Amazon SES, deployed on AWS EC2.",
    image: "/DevFusion.png",
    liveUrls: ["https://devfusion.co.in"],
    githubUrl: "https://github.com/DhimanMajumdar/DevFusion-full",
  },
  {
    id: 2,
    title: "DealSpy",
    description:
      "Full-stack price tracking app that monitors products across e-commerce sites, stores price history, and visualizes trends with interactive charts. Built with Next.js, Supabase, Firecrawl, and Recharts.",
    image: "/dealspy.png",
    liveUrls: ["https://dodealspy.vercel.app"],
    githubUrl: "https://github.com/DhimanMajumdar/DealSpy",
  },
  {
    id: 3,
    title: "SolveX",
    description:
      "Code platform for developers to create playlists, run code snippets with syntax highlighting, live execution, and language support.",
    image: "/image.png",
    liveUrls: ["https://solvex-opal.vercel.app/"],
    githubUrl: "https://github.com/DhimanMajumdar/code-platform-project",
  },
  {
    id: 4,
    title: "FakeFlix GPT",
    description:
      "Netflix-like platform with movie recommendations powered by Gemini AI, secure Firebase Auth, TMDB API, interactive trailers, and responsive UI.",
    image: "/fakeflix.png",
    liveUrls: ["https://fakeflix-gpt-5dp4.vercel.app/"],
    githubUrl: "https://github.com/DhimanMajumdar/fakeflix-gpt",
  },
  {
    id: 5,
    title: "EmPath AI",
    description:
      "AI-powered mental health assistant providing empathetic conversations, distress detection, crisis escalation, and privacy-first support via web and WhatsApp.",
    image: "/empath-ai.png",
    liveUrls: [
      "https://drive.google.com/file/d/13SI6v33GP6JE3SMJEBrN83iCPChUiOmn/view?usp=drive_link",
      "https://drive.google.com/file/d/1nFgPfCYbVxMlQpevh0gwwSxNCxI6RJgm/view?usp=drive_link",
    ],
    githubUrl:
      "https://github.com/DhimanMajumdar/EmPath-AI---AI-MENTAL-THERAPIST",
  },
  {
    id: 6,
    title: "LexiFetch: RAG Based AI CHATBOT FOR PDFs",
    description:
      "AI chatbot that answers questions from uploaded PDFs using LangChain, Llama 3, and Streamlit with a user-friendly interface.",
    image: "/lexifetch.png",
    liveUrls: ["https://lexifetch.streamlit.app/"],
    githubUrl: "https://github.com/DhimanMajumdar/LexiFetch-RAG-BASED-AI-CHATBOT",
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
  );
};

export default ProjectSection;
