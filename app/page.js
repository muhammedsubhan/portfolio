import React from "react";
import Hero from "@/app/components/hero/Hero";
import Projects from "./components/projects/Projects";
import Quote from "./components/quote/Quote";
import Skills from "./components/skills/Skills";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Quote />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
