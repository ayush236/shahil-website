import Hero from "./components/Hero";
import { Marquee } from "./components/Marquee";
import Services from "./components/Services";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Marquee/>
      <Services/>
    </div>
  );
}
