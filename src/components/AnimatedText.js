import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    }
}

const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full my-auto py-2 flex items-center overflow-hidden text-center justify-center'>
        <motion.h1 className={`inline-block w-full text-gray-200 font-bold capitalize text-4xl ${className}`}
        variants={quote}
        >
            {
                text.split(" ").map((word, index) =>
                <motion.span key={word+'-'+index} className='inline-block'
                variants={singleWord}
                initial="initial"
                animate='animate'>
                    {word}&nbsp;
                </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText