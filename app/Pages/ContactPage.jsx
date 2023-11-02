import React from 'react';
import Reveal from '../Utils/Reveal';


const ContactPage = () => {
  return (
    <div className='bg-[#171717] text-white min-h-screen w-[100vw] md:min-w-[100vw] pt-3'>
      <div className="contactForm bg-[#D5FF3E] h-[70vh] w-[87vw] mx-[6.5vw] mt-[5vh] rounded-b-[5rem] shadow-2xl shadow-black flex-col">
        <Reveal> {/* Wrap the following div with the Reveal component */}
          <img src='/images/divider1.png' alt='divider1' className='py-[5vh]' />
        </Reveal>
        <Reveal> {/* Wrap the following div with the Reveal component */}
          <div className='pb-[5vh] ml-[10vw] text-[2vw] font-extrabold text-[#3d3d3c]'>Contact Me</div>
        </Reveal>
        <div className='pl-10'>
        <Reveal> {/* Wrap the following form with the Reveal component */}
          <form className='space-y-7 ml-[10vw]'>
            <Reveal> {/* Wrap each input element with the Reveal component */}
              <input
                class="placeholder:italic placeholder:text-black block bg-[#9fbf2e] w-[60vw] border border-slate-900 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Your Name."
                type="text"
                name="search"
              />
            </Reveal>
            <Reveal> {/* Wrap each input element with the Reveal component */}
              <input
                class="placeholder:italic placeholder:text-black block bg-[#9fbf2e] w-[60vw] border border-slate-900 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Your e-mail."
                type="text"
                name="search"
              />
            </Reveal>
            <Reveal> {/* Wrap each input element with the Reveal component */}
              <input
                class="placeholder:italic placeholder:text-black block bg-[#9fbf2e] w-[60vw] border border-slate-900 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Your Message."
                type="text"
                name="search"
              />
            </Reveal>
            <Reveal> {/* Wrap the button with the Reveal component */}
              <button
                class="rounded-full bg-[#acd37c] border border-slate-900 py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              >
                Send
              </button>
            </Reveal>
          </form>
        </Reveal>
            </div>
      </div>
    </div>
  );
};

export default ContactPage;
