import React, { useRef } from 'react'
import AnimatedText from './AnimatedText'
import { ExpDetails } from './constants'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='sm:my-20 xx:my-10'>
            <AnimatedText text='Experience' className='font-bold text-3xl sm:mb-10 xx:mb-5 w-full sm:text-left xx:text-center' />

            <div ref={ref} className='sm:mx-auto relative'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute xx:ml-3 -left-2 top-0 w-[2px] h-full bg-gray-300 origin-top '/>

                {ExpDetails.map((exp) => (
                    <>
                        <ul className='my-6 md:ml-10 xx:ml-6 first:mt-0 last:mb-0 md:w-[60%] xx:w-[90%] xx:px-1  flex flex-col items-center justify-between'>
                            <li ref={ref}>
                                <LiIcon reference={ref}/>
                                <div key={exp}>
                                    <h3 className='capitalize font-bold sm:text-2xl xx:text-xl py-1'>
                                        {exp.position}&nbsp;
                                        <a href={exp.companyLink} target='_blank' className='text-rightOrange capitalize'>@{exp.company}</a>
                                    </h3>
                                    <span className='capitalize font-medium text-gray-300
                                     '>
                                        {exp.time} 
                                    </span>
                                    <p className='font-medium w-full py-1'>
                                        {exp.work}
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

export default Experience