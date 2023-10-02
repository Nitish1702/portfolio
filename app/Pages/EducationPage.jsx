import React, { useEffect } from 'react'
import EducationRow from '../Components/EducationRow'

const EducationPage = ({ skills }) => {

    const edu = [
        { level: '10th', marks: '87.2/100', institute: 'Kendriya Vidyalaya IIM Lucknow' },
        { level: '12th', marks: '86/100', institute: 'Kendriya Vidyalaya IIM Lucknow' },
        { level: 'B.Tech', marks: '9.38/10', institute: 'SRM Institute of Science and Technology, NCR-Campus' }
    ]
    return (
        <div className='educationPage bg-[#171717] min-h-screen w-[100vw] md:min-w-[100vw]'>
            <div className='bg-[#111110] h-[18vh] relative overflow-hidden items-center flex '>
                <div className="cont w-fit items-center flex shrink-0 marquee-animation">
                    {skills.map((image, i) => (
                        <div className="elem pl-[5vw]" key={i}>
                            <img src={image.img} alt={image.alt} className='h-[5vw] w-[7vw] rounded-xl shadow-[#2c2b2b] shadow-md p-1' />
                        </div>
                    ))}
                </div>

                { /* Second .cont element */}
                <div className="cont w-fit items-center flex shrink-0 marquee-animation">
                    {skills.map((image, i) => (
                        <div className="elem pl-[5vw]" key={i}>
                            <img src={image.img} alt={image.alt} className='h-[5vw] w-[7vw] rounded-xl shadow-[#2c2b2b] shadow-md' />
                        </div>
                    ))}
                </div>

            </div>
            <div className='flex'>
                <div>
                    <div className='w-[60vw] text-[7vw] font-extrabold text-[#C5C4C5] pl-[7vw] pt-[2vh]'>
                        EDUCATION <span className='text-[10vw] font-extrabold text-[#D5FF3E]'>.</span>

                    </div>
                    <div className='text-[1.5vw] text-[#606060] pl-[7vw] '>

                        Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Asperiores, odio cumque! Inventore eligendi,<br /> eaque officiis deserunt repellendus temporibus quo ullam?
                    </div>
                </div>
                {/* <div>
                    <div className="dividerLabel1 flex space-x-5 pl-[7vw] w-[40vw] pt-[15vh] text-lg flex-wrap space-y-5 pr-[1vw]">
                        <div className='border-[#606060] border-[2px] w-fit px-[2vw] py-[1vh] rounded-3xl bg-transparent text-[#606060] h-[6vh] transition-transform transform hover:scale-110 hover:shadow-md hover:shadow-gray-500'>
                            10TH
                        </div>
                        <div className='border-[#606060] border-[2px] w-fit px-[2vw] py-[1vh] rounded-3xl bg-transparent text-[#606060] h-[6vh] '>12TH</div>
                        <div className='border-[#606060] border-[2px] w-fit px-[2vw] py-[1vh] rounded-3xl bg-transparent text-[#606060] h-[6vh] '>GRADUATION</div>
                    </div>
                </div> */}
            </div>
            {/* <div className="divider h-[1px] bg-[#656865] mt-[7vw] mx-[7vw]" /> */}
            {/* <EducationPage /> */}
            <div className='mt-[7vh]'>
                {
                    edu.map((edus, i) =>
                        <EducationRow edus={edus} key={i} />
                    )
                }
            </div>


        </div>
    )
}

export default EducationPage