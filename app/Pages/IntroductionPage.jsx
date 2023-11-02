import React, { useState } from 'react';
import { motion, spring } from 'framer-motion';
import Reveal from '../Utils/Reveal';
const IntroductionPage = ({ logos }) => {
  const [isMe, setIsMe] = useState(true);

  return (
    <>
      <div className='bg-[#c6fd3c] min-h-screen w-full pt-16'>
        <div className='heading pl-4 md:pl-20   md:flex-row'>
          <h1 className=' font-extrabold text-[10vw] text-left z-50 wave'>WEB </h1>
          <h1 className=' font-extrabold text-[10vw] text-left z-50 wave'>WEB</h1>
          <h1 className=' font-extrabold text-[10vw] text-left z-50 wave'>DEVELOPER</h1>
          <h1 className=' font-extrabold text-[10vw] text-left z-50 wave'>DEVELOPER</h1>

          {/* <motion.img
            whileTap={{ x: 100 ,y:50 }}

            src='/images/Programming.gif'
            alt='Web Developer'
            className='h-[30vh] md:h-[40vh] w-[30vw] md:w-[25vw] ml-4 md:ml-10 mt-4 md:mt-0 absolute left-[60vw] hidden md:block top-[-5vh]'
          /> */}
        </div>

        <div className='dividerLabel1 flex space-x-5 px-[5vw] md:px-[10vw]'>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{width:100}}
            className='border-black border-[1px] w-[20vw] px-[2vw] py-[1vh] rounded-2xl bg-transparent hover:bg-[#89b26f] hover:drop-shadow-2xl flex justify-center'
            onClick={() => setIsMe(true)}
          >
            ME..
          </motion.button>
          <motion.button
            className='border-black border-[1px] w-[20vw] px-[2vw] py-[1vh] rounded-2xl bg-transparent hover:bg-[#89b26f] hover:drop-shadow-2xl flex justify-center'
            onClick={() => setIsMe(false)}
            whileHover={{ scale: 1.1 }}
          >
            SKILLS
          </motion.button>

          <img src='/images/divider.png' alt='divider' className='w-[30vw] h-10' />
        </div>

        <div className='h-[87vh] overflow-hidden p-16'>
          {isMe ? (
            <img src='/images/randomPhoto.jpeg' alt='Random Photo' className='rounded-[8rem] shadow-2xl shadow-black' />
          ) : (
            <div className='grid h-[100vh] bg-[#171717] grid-cols-4 md:grid-rows-4 rounded-[8rem] shadow-2xl shadow-black px-[10vw] pt-[15vh]'>
              {logos.map((logo) => (
                <motion.div key={logo.id} className='group relative' whileHover={{ scale: 1.1 }}>
                  <img
                    src={logo.img}
                    alt={logo.alt}
                    className='w-[8vw] h-[8vw] transition-transform transform group-hover:scale-110'
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IntroductionPage;
