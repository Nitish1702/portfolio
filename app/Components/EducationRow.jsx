import React from 'react';
import Reveal from '../Utils/Reveal'; // Import the Reveal component

const EducationRow = ({ edus }) => {
    const props = edus;
    console.log(props);

    return (
        <div className='hover:bg-[#c2c3c2] transition-all ease-in duration-700'>
            <div className="divider h-[1px] bg-[#656865] mx-[7vw]" />
            <div className="flex h-[20vh] justify-between mr-[7vw]">
                <div className='pr-[2vw] text-[5vw] max-w-[30vw] flex align-middle mt-[5vh] font-extrabold text-[#656865] ml-[7vw]'>
                    <Reveal>{props.level}</Reveal> {/* Wrap the text with Reveal */}
                </div>
                <div className='pr-[2vw] text-[3vw] max-w-[30vw] flex align-middle font-extrabold text-[#656865] mt-[5vh]'>
                    <Reveal>{props.marks}</Reveal> {/* Wrap the text with Reveal */}
                </div>
                <div className='text-[2vw] max-w-[30vw] align-middle font-extrabold text-[#656865] mt-[5vh]'>
                    <Reveal>{props.institute}</Reveal> {/* Wrap the text with Reveal */}
                </div>
            </div>
            <div className="divider h-[1px] bg-[#656865] mx-[7vw]" />
        </div>
    );
}

export default EducationRow;
