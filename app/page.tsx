import Hero from "@/components/Hero";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
