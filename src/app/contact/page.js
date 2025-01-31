import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#FBEED9] min-h-screen flex flex-col items-center justify-center px-6 sm:px-16">
      <h1 className="text-3xl font-bold text-center mb-4 font-comfortaa">Contact Me</h1>
      
      {/* Email Link */}
      <p className="text-lg text-gray-700 mb-6">
        <a href="mailto:eveliinaahonen@gmail.com" className="hover:underline">
          eveliinaahonen@gmail.com
        </a>
      </p>

      {/* Social Links */}
      <div className="flex space-x-6">
        <Link href="https://www.linkedin.com/in/eveliina-ahonen-18064a11a/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" width={50} height={50} className="hover:opacity-80 transition duration-300" />
        </Link>
        <Link href="https://github.com/ebsgit1/" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" width={50} height={50} className="hover:opacity-80 transition duration-300" />
        </Link>
      </div>
    </div>
  );
}

