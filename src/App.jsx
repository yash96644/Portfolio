import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import AboutDetail from "./Component/About/AboutDetail";
import ContactDetail from "./Component/Contect/ContactDetail";
import AboutMe from './Component/About/AboutMe'
import Mywork from './Component/Contect/Mywork'
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_works" element={<Mywork />} />
        <Route path="/about_us" element={<AboutDetail />} />
        <Route path="/contact_us" element={<ContactDetail />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}
export default App;
