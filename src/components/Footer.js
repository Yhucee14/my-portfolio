import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2  border-
    font-medium text-lg border-black py-2'>
        <Layout className='sm:py-6 xx:py-3 flex xx:flex-col sm:flex-row items-center justify-between'>
            <span className='py-1'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <span className='py-1'>Built with Nextjs and Tailwind</span>
            <Link href='mailto:uchechukwu7814@gmail.com' target={"_blank"} className='py-1 px-2 hover:bg-black hover:text-white hover:border-2 hover:border-gray rounded-lg border-2 border-black'>
              Say Hello
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer