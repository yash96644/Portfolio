import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Landing from "../Landing/Landing";
import About from "../About/About";
import SecondPage from "../SecondPage/SecondPage";
import Eyes from "../Eyes/Eyes";
import Featured from "../Featured/Featured";
import Skills from "../Skills/Skills";
import Contact from "../Contect/Contect";
import Footer from "../Footer/Footer";
function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Landing />
      <SecondPage />
      <About />
      <Eyes />
      <Featured />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
