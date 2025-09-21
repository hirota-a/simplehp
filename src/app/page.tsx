import Works from "./works/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div className="container mx-auto min-h-screen bg-yellow-50">
      <div className="flex flex-col text-center py-10 md:py-12 lg:py-20">
        <h1 className="font-rocksolt text-5xl md:text-7xl lg:text-9xl my-20 md:my-28 lg:my-36 text-cyan-500 text-center">HIROTA</h1>
        <div className="space-y-2 text-left">
          <p className="font-notsans text-sm md:text-base lg:text-2xl text-zinc-400">Design = conveyed + playfulness</p>
          <p className="font-notsans text-sm md:text-base lg:text-2xl text-zinc-400">H2 + O2 → 1/2 H2O + 286kJ</p>
          <p className="font-notsans text-sm md:text-base lg:text-2xl text-zinc-400">E = h c / [design]</p>
          <p className="font-notsans text-sm md:text-base lg:text-2xl text-zinc-400">v = k [design]</p>
        </div>
      </div>
      <Works />
      <Contact />
    </div>
  );
}
