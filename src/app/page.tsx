import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="page">
      <div className="layout">
        <div className="fixed">
          <Hero />
        </div>
        <div className="scroll">
          <div id="projects">
            <Projects />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
