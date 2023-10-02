import React from 'react'

const EducationRow = ({ edus }) => {
    const props = edus
    console.log(props)
    return (
        <div className=' hover:bg-[#c2c3c2] '>
            <div className="divider h-[1px] bg-[#656865] mx-[7vw]" />
            <div className=" flex h-[20vh] justify-between mr-[7vw]">
                <div className='pr-[2vw] text-[5vw] max-w-[30vw] flex align-middle mt-[5vh]  font-extrabold text-[#656865]  ml-[7vw]'>
                    {props.level}
                </div>
                {/* <div className="divider h-[15vh] w-[1px] bg-[#656865] m-[2vw]" /> */}
                <div className='pr-[2vw] text-[3vw] max-w-[30vw] flex align-middle font-extrabold text-[#656865] mt-[5vh] '>
                    {props.marks}
                </div>
                {/* <div className="divider h-[15vh] w-[1px] bg-[#656865] m-[2vw]" /> */}
                <div className='text-[2vw] flex-wrap max-w-[30vw] align-middle font-extrabold text-[#656865] mt-[5vh]'>
                    {props.institute}
                </div>
            </div>
            <div className="divider h-[1px] bg-[#656865] mx-[7vw]" /></div>
    )
}

export default EducationRow