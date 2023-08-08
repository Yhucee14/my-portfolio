import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {

    return (
      
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white p-5 shadow-black cursor-pointer absolute' 
        whileHover={{scale:1.2 }}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}}>
            {name}
        </motion.div>

    
    )

}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-3xl mt-20 w-full text-left'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight px-10'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white p-6 shadow-black cursor-pointer' whileHover={{scale:1.2 }}>
            Web
        </motion.div>

        
        <Skill name='HTML' x='1vw' y='16vw'/>
        <Skill name='Javascript' x='27vw' y='6vw'/>
        <Skill name='CSS' x='-5vw' y='-9vw'/>
        <Skill name='NextJS' x='14vw' y='-22vw'/>
        <Skill name='Tailwind CSS' x='-23vw' y='3vw'/>
        <Skill name='ReactJS' x='-14vw' y='-22vw'/>

    </div>
    </>
  )
}

export default Skills