import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    );

  return (
    <figure className='absolute -left-16 stroke-black'>
        <svg width='75' height='75' viewBox='0 0 100 100'>
            <circle cx='75' cy='50' r='20' className='stroke-leftBlue stroke-1 fill-none'/>
            <motion.circle 
            style={{
                pathLength: scrollYProgress
            }} 
            cx='75' cy='50' r='20' className=' stroke-[2px] fill-white'/>
            <circle cx='75' cy='50' r='10' className=' stroke-1 fill-leftBlue'/>
        </svg>
    </figure>
  )
}

export default LiIcon