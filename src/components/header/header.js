import Link from "next/link";

export function Header() {
  return (
    <header className="bg-yellow-500 p-5 flex justify-between items-center font-comfortaa">
      <h1 className="text-black text-2xl font-bold">Eveliina Ahonen</h1>
      <nav>
        <ul className="flex space-x-8">
          <li><Link href="/" className="text-black text-lg hover:underline">About</Link></li>
          <li><Link href="/projects" className="text-black text-lg hover:underline">Projects</Link></li>
          <li><Link href="/skills" className="text-black text-lg hover:underline">Skills</Link></li>
          <li><Link href="/contact" className="text-black text-lg hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
