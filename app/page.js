"use client";
import React from "react";

import { Link, Element } from "react-scroll";
import IntroductionPage from "./Pages/IntroductionPage";
import EducationPage from "./Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import { motion } from "framer-motion";
import Empty from "./Pages/Empty";
import Reveal from "./Utils/Reveal";

const Page = () => {
  const skills = [
    {
      img: "/images/nodejs.png",
      alt: "nojejs",
    },
    {
      img: "/images/react.png",
    },
    {
      img: "/images/express.png",
      alt: "express",
    },
    {
      img: "/images/mongoDB.png",
      alt: "mongoDb",
    },
    {
      img: "/images/flutter.png",
      alt: "flutter",
    },
    {
      img: "/images/dart.png",
      alt: "dart",
    },
    {
      img: "/images/firebase.png",
      alt: "firebase",
    },
    {
      img: "/images/mySql.png",
      alt: "mySql",
    },
    {
      img: "/images/numpy.png",
    },
    {
      img: "/images/python.png",
      alt: "python",
    },
  ];
  return (
    <div className="bg-[#171717] ">
      <motion.nav
        initial={{ y: "-20vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="py-3 md:py-4 flex flex-row  justify-between w-[100vw] md:h-[18vh] fixed z-50"
      >
        <motion.div className="text-[2vw] md:text-[3vw]  md:pl-14 py-2 md:py-3 font-bold tracking-wider">
          Nitish Kumar
        </motion.div>
        <nav className="text-center w-[60vw] text-[5vw] md:text-[10vw]">
          <ul className="flex">
            <li className="text-lg md:text-xl  md:px-5 py-2 font-mono tracking-wider">
              <Link to="intro" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="text-lg md:text-xl  md:px-5 py-2 font-mono tracking-wider">
              <Link to="edu" smooth={true} duration={500}>
                Education
              </Link>
            </li>
            <li className="text-lg md:text-xl  md:px-5 py-2 font-mono tracking-wider">
              <Link to="exp" smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li className="text-lg md:text-xl  md:px-5 py-2 font-mono tracking-wider">
              <Link to="proj" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="text-lg md:text-xl  md:px-5 py-2 font-mono tracking-wider">
              <Link to="cont" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </motion.nav>
      <Element name="intro">
        <Reveal>
          <IntroductionPage logos={skills} />
        </Reveal>
      </Element>
      <Element name="edu">
        <Reveal>
          <EducationPage skills={skills} />
        </Reveal>
      </Element>
      <Element name="exp">
        <Reveal>
          <ExperiencePage />
        </Reveal>
      </Element>
      <Element name="proj">
        <Reveal>
          <ProjectsPage />
        </Reveal>
      </Element>
      <Element name="cont">
        <Reveal>
          <ContactPage />
        </Reveal>
      </Element>
    </div>
  );
};

export default Page;
