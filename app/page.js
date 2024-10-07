import React from "react";
import Hero from "@/app/components/hero/Hero";
import Projects from "./components/projects/Projects";
const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Projects />
      </div>
    </>
  );
};

export default Home;
