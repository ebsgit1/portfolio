import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-[#FBEED9] min-h-screen py-10 px-6 sm:px-16 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>

      {/* Project List */}
      <div className="max-w-6xl w-full space-y-10">

        {/* Figma Projects */}
        <div className="flex flex-col md:flex-row items-center bg-yellow-500 rounded-lg shadow-md p-6">
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-bold">Figma Projects</h2>
            <p className="text-lg mt-2">
              Through my different courses, I have had the opportunity to create different types of prototypes. Here are three different examples; by clicking them, you can test the prototypes.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center gap-4">
            <Link href="https://www.figma.com/proto/5pXyva6sVL3UlVMXkRO63j/UIC-projekti?node-id=63-647&t=xQ5QUrIkJ2flyA5B-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A517&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
              <Image src="/carbon.png" alt="Carbon Companion" width={150} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
            </Link>
            <Link href="https://www.figma.com/proto/ravutbXAyTtnFXwpQTGtHD/MUO-E3060---Week-3?node-id=18-144&t=m8dqRIMzQsho5v8b-1" target="_blank" rel="noopener noreferrer">
              <Image src="/sightseeing.png" alt="Sightseeing App" width={150} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
            </Link>
            <Link href="https://www.figma.com/proto/SR8c8Q2Q0riP4ouIWJRkYd/AskareAppi?node-id=8-393&p=f&t=HkkbwThC1kc38MUp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A393&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
              <Image src="/askareappi.png" alt="Askare App" width={150} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Software Development */}
       <div className="flex flex-col md:flex-row items-center bg-yellow-500 rounded-lg shadow-md p-6">
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-bold">Software Development</h2>
            <p className="mb-4">
            Through courses such as <strong>Full Stack, Web Software Development</strong>, and <strong>WWW-Services</strong>, 
            I have gained valuable experience in both <strong>Frontend and Backend development</strong>. As part of a team 
            project, we developed an application designed to efficiently manage daily chores, enhancing task organization 
            and collaboration.
          </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center gap-4">
            <Link href="https://github.com/ebsgit1/AskareAppi_final">
              <Image src="/askareappi.png" alt="Askare App" width={300} height={450} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
            </Link>
          </div>
        </div>

                {/* Master Thesis*/}
                <div className="flex flex-col md:flex-row items-center bg-yellow-500 rounded-lg shadow-md p-6">
          <div className="w-full">
            <h2 className="text-2xl font-bold">Master Thesis</h2>
            <p className="text-lg mt-2">
              I am currently working on my Master Thesis on Data Visualization in the Metaverse. The research involves creating and programming the metaverse, and fiuring out the integration of the data. In addition, a user research investigating the use of an interactive platform (the metaverse) in understandind data. The project is still on going and will be updated here when ready. 
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
