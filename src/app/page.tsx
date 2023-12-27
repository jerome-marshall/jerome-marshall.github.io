import About from "~/components/About";
import Contact from "~/components/Contact";
import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import SideBar from "~/components/SideBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <SideBar />
    </>
  );
}
