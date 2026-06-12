import About from "./components/About";
import Hero from "./components/Hero";
import { Marquee } from "./components/Marquee";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Marquee/>
      <Services/>
      <About/>
      <Testimonials/>
    </div>
  );
}
