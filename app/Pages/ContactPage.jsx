import React from 'react'

const ContactPage = () => {
  return (
      <div className='bg-[#171717] text-white min-h-screen w-[100vw] md:min-w-[100vw] pt-3'>
          <div className="contactForm bg-[#D5FF3E] h-[70vh] w-[87vw] mx-[6.5vw] mt-[5vh] rounded-b-[5rem] flex-col">
              <img src='/images/divider1.png' alt='divider1' className=' py-[5vh]' />
              <div className=' pb-[5vh] ml-[10vw] text-[2vw] font-extrabold text-[#3d3d3c]'>Contact Me</div>
              <form className='space-y-7 ml-[10vw]'>
              <input class="placeholder:italic placeholder:text-black block bg-[#9fbf2e] w-[60vw] border border-slate-900 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your Name." type="text" name="search"/>
              <input class="placeholder:italic placeholder:text-black block bg-[#9fbf2e] w-[60vw] border border-slate-900 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your Name." type="text" name="search"/>
              <input class="placeholder:italic placeholder:text-black block bg-[#9fbf2e] w-[60vw] border border-slate-900 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your Name." type="text" name="search"/>
              <button class="rounded-full bg-[#acd37c] border border-slate-900 py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">Send</button>
              </form>
        </div>
    </div>
  )
}

export default ContactPage