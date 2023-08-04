import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/' className='w-16 h-16 bg-black-100 flex items-center justify-center text-white rounded-full text-xl font-bold'
        whileHover={{
            backgroundColor:[
                'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            ],
            transition:{duration:1, repeat: Infinity}

        }}>
            UCEE
        </MotionLink>
    </div>
  )
}

export default Logo