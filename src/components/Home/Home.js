import React from "react";
import HeroSetion from "../../sections/HeroSection";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/ResumeNew";
import Contact from "../Contact/contact";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Home() {

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
   
  };

  return (
    <>

      <section id="hero-section">
        <HeroSetion />
      </section>
      <motion.section  ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1 }} id="about-section">
        <About />
      </motion.section>
      <section id="projects-section">
        <Projects />
      </section>
      <section id="resume-section">
        <Resume />
      </section>
      <section id="contact-section">
        <Contact />
      </section>

    </>
  );
}

export default Home;
