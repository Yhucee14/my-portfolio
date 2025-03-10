import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import SkillsCarousel from './SkillsCarousel'

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
   <AnimatedText text='Skills' className='font-bold text-3xl mt-20 w-full sm:text-left xx:text-center' />
    {/* <div className='w-full sm:h-screen xx:h-[450px] relative flex items-center justify-center rounded-full bg-circularLight px-10'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white p-6 shadow-black cursor-pointer' whileHover={{scale:1.2 }}>
            Web
        </motion.div>

        
        <Skill name='HTML' x='18vw' y='-4vw'/>
        <Skill name='C++' x='0vw' y='15vw'/>
        <Skill name='Javascript' x='32vw' y='6vw'/>
        <Skill name='CSS' x='-8vw' y='-13vw'/>
        <Skill name='NextJS' x='17vw' y='-25vw'/>
        <Skill name='Tailwind CSS' x='-32vw' y='3vw'/>
        <Skill name='ReactJS' x='-18vw' y='-26vw'/>
        <Skill name='Wordpress' x='0vw' y='28vw'/>

    </div> */}

    <SkillsCarousel />
    </>
  )
}

export default Skills