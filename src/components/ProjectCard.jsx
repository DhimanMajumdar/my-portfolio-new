import React from 'react'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, liveUrls, githubUrl }) => {
  return (
    <div className="bg-black backdrop-blur-lg p-3 rounded-xl hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] transition-all duration-300 ">
      
      {/* Project Image */}
      <div
        className="h-52 mb-2 md:h-72 rounded-t-xl relative group bg-white"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay with buttons */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex flex-col items-center justify-center gap-2 transition-all duration-500">
          
          {/* Live Demo Buttons */}
          {liveUrls.map((url, index) => (
            <Link key={index} href={url} target="_blank" rel="noopener noreferrer">
              <button className="px-3 py-2 bg-green-500 rounded-full text-white font-medium hover:bg-green-600 transition">
                Live Demo {index + 1}
              </button>
            </Link>
          ))}

          {/* GitHub Button */}
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <button className="px-3 py-2 bg-gray-700 rounded-full text-white font-medium hover:bg-gray-800 transition">
              GitHub
            </button>
          </Link>

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

export default ProjectCard;
