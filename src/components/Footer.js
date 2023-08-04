import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-
    font-medium text-lg border-black'>
        <Layout className='py-6 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <span>Built with Nextjs and Tailwind</span>
            <Link href='mailto:uchechukwu7814@gmail.com' target={"_blank"}>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer