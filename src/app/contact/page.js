import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#FBEED9] min-h-screen flex flex-col items-center justify-center px-6 sm:px-16">
      <h1 className="text-4xl font-bold text-center mb-4 font-comfortaa">
        Contact Me
      </h1>
      
      {/* Email */}
      <a 
        href="mailto:eveliinaahonen@gmail.com" 
        className="text-xl text-gray-700 hover:text-gray-900 transition mb-6"
      >
        eveliinaahonen@gmail.com
      </a>
      <div className="flex space-x-6">
        {/* LinkedIn */}
        <Link 
          href="https://www.linkedin.com/in/eveliina-ahonen-18064a11a/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:opacity-80 transition"
        >
          <FaLinkedin size={50} />
        </Link>

        <Link 
          href="https://github.com/ebsgit1/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:opacity-80 transition"
        >
          <FaGithub size={50} />
        </Link>
      </div>
    </div>
  );
}
