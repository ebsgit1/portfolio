import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full bg-[#FBEED9]">
      <section className="relative w-full h-[550px] sm:h-[650px] flex items-center bg-yellow-500 overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center max-w-6xl mx-auto px-6 w-full">
          <div className="w-full sm:w-1/2 text-left text-black">
            <h1 className="text-5xl sm:text-6xl font-bold font-comfortaa">Hello,</h1>
            <h2 className="text-4xl sm:text-5xl font-bold font-comfortaa">my name is</h2>
            <h2 className="text-4xl sm:text-5xl font-bold font-comfortaa">Eveliina Ahonen</h2>
          <br></br>
          <p className="text-lg text-black-700 leading-relaxed">
            I am a cheerful and socially engaged Master of Science student in <span className="font-semibold">Computer, Communication, and Information Sciences</span> at <span className="font-semibold">Aalto University</span>, I am majoring in <span className="font-semibold">Human-Computer Interaction</span>. 
            I bring a vibrant energy to the field of technology and user experience.  Known for my <span className="font-semibold">positive attitude</span> and <span className="font-semibold">collaborative spirit</span>, I excel in team environments, inspiring innovation by blending <span className="font-semibold">technology</span> and <span className="font-semibold">human insight</span>.
          </p>
          </div>
          <div className="relative w-full sm:w-1/2 flex justify-end items-end absolute bottom-0 right-0">
            <Image
              src="/omakuva.png"
              alt="Eveliina Ahonen"
              width={400}
              height={400}
              className="rounded-lg object-contain relative z-10 sm:mr-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
