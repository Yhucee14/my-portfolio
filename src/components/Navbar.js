import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon } from './Icon'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}


            <span className={`h-[1px] inline-block bg-black absolute bottom-0 left-0
        group-hover:w-full transition-[width] ease duration-500
        ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>

    )
}

const Navbar = () => {
    return (
        <header className='w-full px-10 py-4 font-medium flex items-center justify-between'>
            <Logo />

            <nav>
                <CustomLink href='/' title="Home" className='mr-4' />
                <CustomLink href='/about' title="About" className='mx-4' />
                <CustomLink href='/projects' title="Projects" className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='https://twitter.com/Ucee_14' target={'_blank'}
                    whileHover={{y:-4}}
                    whileTap={{scale:0.9}}
                    className='w-6 mx-3'>
                    <TwitterIcon />
                </motion.a>

                <motion.a href='https://github.com/Yhucee14' target={'_blank'} className='w-6 mx-3'
                whileHover={{y:-4}}
                whileTap={{scale:0.9}}
                >
                    <GithubIcon />
                </motion.a>

                <motion.a href='https://twitter.com/Ucee_14' target={'_blank'} className='w-6 ml-3'
                whileHover={{y:-4}}
                whileTap={{scale:0.9}}>
                    <LinkedInIcon />
                </motion.a>

            </nav>
        </header>
    )
}

export default Navbar