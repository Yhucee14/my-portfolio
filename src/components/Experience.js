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
        <div className='my-20'>
            <AnimatedText text='Experience' className='font-bold text-3xl mb-10 w-full text-left' />

            <div ref={ref} className='mx-auto relative'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute -left-2 top-0 w-[2px] h-full bg-black origin-top '/>

                {ExpDetails.map((exp) => (
                    <>
                        <ul className='my-6 ml-10 first:mt-0 last:mb-0 w-[60%]  flex flex-col items-center justify-between'>
                            <li ref={ref}>
                                <LiIcon reference={ref}/>
                                <div key={exp}>
                                    <h3 className='capitalize font-bold text-2xl'>
                                        {exp.position}&nbsp;
                                        <a href={exp.companyLink} target='_blank' className='text-rightBlue capitalize'>@{exp.company}</a>
                                    </h3>
                                    <span className='capitalize font-medium text-black/75'>
                                        {exp.time} | {exp.address}
                                    </span>
                                    <p className='font-medium w-full'>
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