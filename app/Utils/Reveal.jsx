// Reveal.js
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


const Reveal = ({ children , axis}) => {
    const xVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };
    
    const yVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    };
    const ref = useRef()
    const inView = useInView(ref,{once:false});
    const anim = useAnimation()
    useEffect(() => {
        if (inView)
        {
            anim.start("visible")
        }
    }, [inView])

    return (
        <motion.div
            ref={ref}
            variants={
                {
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }
            }
            initial="hidden"
            animate={anim}
            transition={{ duration: 0.5 }}
            className='relative overflow-hidden'
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
