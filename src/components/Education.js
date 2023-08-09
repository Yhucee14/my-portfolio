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
            <AnimatedText text='Education' className='font-bold text-3xl mb-10 w-full text-left' />

            <div ref={ref} className='mx-auto relative'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute -left-2 top-0 w-[2px] h-full bg-black origin-top '/>

                {EduDetails.map((edu) => (
                    <>
                        <ul className='my-6 ml-10 first:mt-0 last:mb-0 w-[80%]  flex flex-col items-center justify-between'>
                            <li ref={ref}>
                                <LiIcon reference={ref}/>
                                <div key={edu}>
                                    <h3 className='capitalize font-bold text-2xl'>
                                        {edu.type}
                                    </h3>

                                    <span className='capitalize font-medium text-black/75'>
                                        {edu.time} | {edu.place}
                                    </span>
                                    <p className='font-medium w-full'>
                                        {edu.info}
                                    </p>
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