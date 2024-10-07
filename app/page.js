"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "@/app/components/hero/Hero";
import Projects from "./components/projects/Projects";
import { motion } from "framer-motion";

const Home = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              setIsHeroVisible(true); // Show Hero component when in view
            } else if (entry.target === projectsRef.current) {
              setIsProjectsVisible(true); // Show Projects component when in view
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className="">
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeroVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75 }} // Increased duration
      >
        <Hero />
      </motion.div>
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isProjectsVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.2 }} // Increased duration and added delay
      >
        <Projects />
      </motion.div>
    </div>
  );
};

export default Home;
