import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icon'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { FaBars, FaTimes } from "react-icons/fa";

const CustomLink = ({ href, title, className = "", setMobileMenuOpen }) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    const handleClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <Link href={href} className={`${className} relative group cursor-pointer ${isActive ? "text-green" : "text-black"
            }`} onClick={handleClick}>

            {title}


            <span className={`h-[1px] inline-block bg-black absolute bottom-0 left-0
        group-hover:w-full transition-[width] ease duration-500
        ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-white`} >
                &nbsp;
            </span>
        </Link>

    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='w-full h-[85px] shadow-md sm:px-16 xx:px-5 py-5 font-medium flex items-center justify-between dark:text-white'>
            <Logo />

            <nav className={`${isMobileMenuOpen
                ? "absolute p-4  top-16  right-5 font-medium w-[230px] rounded-lg h-[170px]  bg-white shadow-md border-y-[1px] border-[#00000048] flex flex-col "
                : "hidden"
                } sm:flex flex-row mr-14`}>

                <CustomLink href='/' title="Home" className='mx-4 py-2' setMobileMenuOpen={setMobileMenuOpen} />
                <CustomLink href='/about' title="About" className='mx-4 py-2' setMobileMenuOpen={setMobileMenuOpen} />
                <CustomLink href='/projects' title="Projects" className='ml-4 py-2' setMobileMenuOpen={setMobileMenuOpen} />
            </nav>

               
            <nav className='flex items-center justify-center flex-wrap '>
                {/* <motion.a href='https://twitter.com/Ucee_14' target={'_blank'}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mx-3'>
                    <TwitterIcon />
                </motion.a> */}

                <motion.a href='https://github.com/Yhucee14' target={'_blank'} className='w-8 mx-3'
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GithubIcon />
                </motion.a>

                {/* <motion.a href='https://twitter.com/Ucee_14' target={'_blank'} className='w-6 ml-3'
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}>
                    <LinkedInIcon />
                </motion.a> */}


            </nav>


        

            <button
                onClick={toggleMobileMenu}
                className="px-4 sm:hidden focus:outline-none"
            >
                {isMobileMenuOpen ? (
                    <FaTimes className="text-black text-2xl " />
                ) : (
                    <FaBars className="text-black text-2xl " />
                )}
            </button>

         
        </header>
    )
}

export default Navbar