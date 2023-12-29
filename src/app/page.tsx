import About from "~/components/About";
import Contact from "~/components/Contact";
import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import SideBar from "~/components/SideBar";
import payload from "payload";
import getAllData from "~/lib/getAllData";

const HomePage = async () => {
  const data = await getAllData(payload);

  return (
    <>
      <Hero data={data} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <SideBar />
    </>
  );
};

export default HomePage;
