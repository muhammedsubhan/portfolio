import React from "react";
import Hero from "@/app/components/hero/Hero";
import Projects from "./components/projects/Projects";
import Quote from "./components/quote/Quote";
import Skills from "./components/skills/Skills";
import AboutMe from "./components/aboutme/AboutMe";
import ContactMe from "./components/contactme/ContactMe";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <ContactMe/>
    </div>
  );
};

export default Home;
