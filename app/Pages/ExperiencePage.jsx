import React from 'react'

const ExperiencePage = () => {
  return (
      <div className='experiencePage bg-[#171717] min-h-screen w-[100vw] md:min-w-[100vw] p-[8vw]  '>
        <div className='experience h-[70vh] bg-[#565656]'>
              <div className='hover:scale-105 hover:translate-x-10 duration-500'>
                  <div className="w-[60vw] text-[7vw] font-extrabold text-[#C5C4C5] pl-[7vw] pt-[2vh]">
                      Experience
                  </div>
                  <div className='flex justify-between'>
                      <div className=''>
                  <div className="w-[40vw] text-[3vw] font-extrabold text-[#313131] pl-[7vw] pt-[2vh]">
                          Artificial Intelligence Intern
                  </div>
                    <div className='text-[2vw] font-bold text-[#D5FF3E] pl-[7vw]'>
                        Personifwy
                      </div>
                      </div>
                      <div className='flex-col text-right pr-[7vw] align-middle'>
                  <div className="w-[30vw] text-[2vw] font-extrabold text-[#3a3a3a] pl-[7vw] pt-[2vh]">
                  04/2022 - 06/2022
                  </div>
                    <div className='text-[2vw] font-bold text-[#3a3a3a] pl-[7vw]'>
                        Virtual
                      </div>
                      </div>
                  </div>
                      <div className="flex-wrap text-[2vw] font-bold text-[#e2e2e2] pl-[7vw] mt-[2vh]">
                          
                            Personifwy is an AI platform to automate people engagement and drive business success
                      </div>
            </div>
        </div>
    </div>
  )
}

export default ExperiencePage