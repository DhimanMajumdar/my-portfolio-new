import React from 'react'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, liveUrls, githubUrl }) => {
  return (
    <div className="bg-black backdrop-blur-lg p-3 rounded-xl relative group active:-translate-y-2 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] transition-all duration-300">
      
      {/* Project Image */}
      <div
        className="h-52 mb-2 md:h-72 rounded-t-xl relative bg-white"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🔥 MOBILE OVERLAY (tap anywhere on card) */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center gap-4 bg-[rgba(18,18,18,0.75)] backdrop-blur rounded-xl opacity-0 active:opacity-100 transition-opacity duration-300">
        {liveUrls?.map((url, index) => (
          <Link
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 rounded-full border-2 border-[#ADB7BE] flex items-center justify-center active:border-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6L10.5 13.5M6 18h6.75A2.25 2.25 0 0 0 15 15.75V9" />
            </svg>
          </Link>
        ))}

        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 rounded-full border-2 border-[#ADB7BE] flex items-center justify-center active:border-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </Link>
        )}
      </div>

      {/* 🖥️ DESKTOP OVERLAY (hover image only) */}
      <div className="hidden md:flex items-center justify-center absolute top-3 left-3 right-3 h-72 bg-[#181818] bg-opacity-0 group-hover:bg-[rgba(18,18,18,0.7)] opacity-0 group-hover:opacity-100 backdrop-blur transition-all duration-500 gap-4 rounded-t-xl">
        {liveUrls?.map((url, index) => (
          <Link
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6L10.5 13.5M6 18h6.75A2.25 2.25 0 0 0 15 15.75V9" />
            </svg>
          </Link>
        ))}

        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </Link>
        )}
      </div>

      {/* Project Info */}
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 relative z-10">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
