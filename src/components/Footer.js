import React from 'react'
import Layout from './Layout'
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icon'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='w-full border-t-2  border-
    font-medium text-lg border-black py-2'>
        <Layout className='sm:py-6 xx:py-3 flex xx:flex-col sm:flex-row items-center justify-between'>
               
     
            
            <span className='py-1'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
           
            <nav className='flex items-center justify-center flex-wrap xx:py-2 xx:mr-2'>
                <motion.a href='https://twitter.com/Ucee_14' target={'_blank'}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mx-3'>
                    <TwitterIcon />
                </motion.a>

                <motion.a href='https://github.com/Yhucee14' target={'_blank'} className='w-6 mx-3'
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GithubIcon />
                </motion.a>

                <motion.a href='https://linkedin.com/in/uche-chukwu-248bb8280' target={'_blank'} className='w-6 ml-3'
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}>
                    <LinkedInIcon />
                </motion.a>

          

            </nav>
           
            <span className='py-1'>Built with Nextjs and Tailwind</span>
            
         
        </Layout>
    </footer>
  )
}

export default Footer