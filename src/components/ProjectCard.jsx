import React from 'react'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, liveUrls, githubUrl }) => {
  return (
    <div className="bg-black backdrop-blur-lg p-3 rounded-xl hover:-translate-y-2 active:-translate-y-2 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] transition-all duration-300">
      
      {/* Project Image */}
      <div
        className="h-52 mb-2 md:h-72 rounded-t-xl relative group bg-white"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-[rgba(18,18,18,0.7)] group-active:flex group-active:bg-[rgba(18,18,18,0.7)] group-hover:backdrop-blur group-active:backdrop-blur transition-all duration-500 gap-4">
          
          {/* Live Demo Icons */}
          {liveUrls?.map((url, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 relative rounded-full border-2 border-[#ADB7BE] hover:border-white active:border-white flex items-center justify-center"
            >
              {/* External link icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6L10.5 13.5M6 18h6.75A2.25 2.25 0 0 0 15 15.75V9" />
              </svg>
            </Link>
          ))}

          {/* GitHub Icon */}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 relative rounded-full border-2 border-[#ADB7BE] hover:border-white active:border-white flex items-center justify-center"
            >
              {/* Code bracket icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </Link>
          )}

        </div>
      </div>

      {/* Project Info */}
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
