import React, { useRef } from 'react'
import AnimatedText from './AnimatedText'
import { EduDetails } from './constants'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-20'>
            <AnimatedText text='Education' className='font-bold text-3xl sm:mb-10 xx:mb-6 w-full sm:text-left xx:text-center' />

            <div ref={ref} className='mx-auto relative text-gray-200'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute xx:-left-0 sm:-left-2 top-0 w-[2px] h-full bg-black origin-top '/>

                {EduDetails.map((edu) => (
                    <>
                        <ul className='my-6 ml-10 first:mt-0 last:mb-0 w-[90%]  flex flex-col  justify-between'>
                            <li ref={ref}>
                                <LiIcon reference={ref}/>
                                <div key={edu}>
                                    <h3 className='capitalize font-bold xx:text-xl sm:text-2xl py-1'>
                                        {edu.type}
                                    </h3>

                                    <span className='capitalize py-1 font-medium text-gray-300'>
                                        {edu.time} | {edu.place}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Education