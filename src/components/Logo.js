import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/' className='w-16 h-16 bg-white flex items-center justify-center border border-solid border-transparent text-black rounded-full text-xl font-bold'
     >
            UCHE
        </MotionLink>
    </div>
  )
}

export default Logo