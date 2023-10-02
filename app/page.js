'use client'
import React from 'react';
import { Link, Element } from 'react-scroll';
import IntroductionPage from './Pages/IntroductionPage';
import EducationPage from './Pages/EducationPage';
import ExperiencePage from './Pages/ExperiencePage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';


const Page = () => {
  const skills = [
    {
      img: '/images/nodejs.png',
      alt:'nojejs'
    },
    {
      img:'/images/react.png'
    },
    {
      img:'/images/express.png',
      alt:'express',
    },
    {
      img:'/images/mongoDb.png',
      alt:'mongoDb',
    },
    {
      img:'/images/flutter.png',
      alt:'flutter',
    },
    {
      img:'/images/dart.png',
      alt:'dart',
    },
    {
      img:'/images/firebase.png',
      alt:'firebase',
    },
    {
      img:'/images/mySql.png',
      alt:'mySql',
    },
    {
      img:'/images/numpy.png',
    },
    {
      img:'/images/python.png',
      alt:'python',
    },
  ]
  return (
    <div>
      <nav className=' fixed py-4 md:py-8 flex flex-row md:flex-row justify-between max-w-screen md:h-[18vh] absolute'>
      <div className='text-[2vw] md:text-[3vw] px-[5vw] md:px-14 py-2 md:py-3 font-bold tracking-wider'>
            Nitish Kumar
        </div>
        <nav className='text-center text-[5vw] md:text-[10vw]'>
        <ul className='flex flex-row md:flex-row space-x-4 md:space-x-1'>
        <li className='text-lg md:text-xl px-[5vw] md:px-14 py-2 font-mono tracking-wider'>

            <Link
              to="intro"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className='text-lg md:text-xl px-[5vw] md:px-14 py-2 font-mono tracking-wider'>

            <Link
              to="edu"
              smooth={true}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li className='text-lg md:text-xl px-[5vw] md:px-14 py-2 font-mono tracking-wider'>

            <Link
              to="exp"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className='text-lg md:text-xl px-[5vw] md:px-14 py-2 font-mono tracking-wider'>

            <Link
              to="proj"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className='text-lg md:text-xl px-[5vw] md:px-14 py-2 font-mono tracking-wider'>

            <Link
              to="cont"
              smooth={true}
                duration={500}
                
              >
              Contact
            </Link>
          </li>
          </ul>
          </nav>
      </nav>
      <Element name="intro">
        <IntroductionPage logos={skills} />
      </Element>
      <Element name="edu">
        <EducationPage skills={skills } />
      </Element>
      <Element name="exp">
        <ExperiencePage />
      </Element>
      <Element name="proj">
        <ProjectsPage />
      </Element>
      <Element name="cont">
        <ContactPage />
      </Element>
      
      
    </div>
  );
}

export default Page;
