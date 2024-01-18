import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { FeaturedProjects, OtherProjects } from '@/components/constants'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icon'
import { motion } from 'framer-motion'

const projects = () => {
    return (
        <>
            <Head>
                <title>Ucee | Project page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className='w-full mb-4 flex flex-col items-center justify-center'>
                <Layout className='pt-5'>
                    <AnimatedText text='Your Divs Can Make A Difference.' className='text-gray-200 xx:text-2xl sm:text-3xl' />

                    <div >
                        <div className='sm:col-span-2 text-gray-300 flex xx:justify-center sm:justify-start sm:py-12 xx:py-8 capitalize font-bold text-xl'>
                            Featured Projects
                        </div>

                        {FeaturedProjects.map((pro) => (
                            <motion.article
                                initial={{ y: 50 }}
                                whileInView={{ y: 0, transition: { duration: 1.2, ease: 'easeInOut', staggerChildren: 0.08, } }} viewport={{once: true}}

                                key={pro} className=' border border-solid p-5 border-gray-300 shadow-2xl rounded-3xl  w-full flex sm:flex-row xx:flex-col items-center justify-between  '>

                                <Link href={pro.link} target='_blank' className='sm:w-1/2 xx:w-full cursor-pointer overflow-hidden rounded-lg'>
                                    <Image src={pro.img} alt={pro.title} className=' w-full h-auto ' />
                                </Link>

                                <div className='flex flex-col xx:w-full sm:w-1/2 pl-4 items-start justify-between py-2'>
                                    <h2 className='my-1 w-full text-left text-xl font-bold text-gray-300'>{pro.type}</h2>
                                    <Link href={pro.link} target='_blank' className='hover:underline underline-offset-3'>
                                        <h2 className='my-1 w-full text-left text-2xl font-bold text-gray-200'>{pro.title}</h2>
                                    </Link>

                                    <p className='my-2 font-medium text-gray-300'>{pro.summary}</p>

                                    <div className='mt-2 flex flex-row justify-between items-center w-full'>
                                        <Link href={pro.link} target='_blank' className='mr-4 rounded-lg bg-leftBlue hover:bg-black text-white p-2 px-4 text-lg font-semibold'>View Project </Link>
                                        <Link href={pro.github} target='_blank' className='w-10 hover:mb-2'><GithubIcon /> </Link>


                                    </div>
                                </div>

                            </motion.article>
                        ))}
                    </div>

                    <div className='grid sm:grid-cols-2 xx:grid-cols-1 text-gray-300 gap-8'>
                        <div className='sm:col-span-2 xx:col-span-1 py-8 capitalize font-bold text-xl'>
                            Other Projects
                        </div>

                        {OtherProjects.map((pro) => (
                            <motion.article initial={{ y: 200 }}  viewport={{once: true}}
                                whileInView={{ y: 0, transition: { duration: 1.2, ease: 'easeInOut', staggerChildren: 0.08, } }} key={pro} className=' border border-solid border-black shadow-2xl p-2 rounded-3xl w-full flex flex-col  justify-between  '>

                                <Link href={pro.link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                                    <Image src={pro.img} alt={pro.title} className=' w-full h-auto rounded-3xl' />
                                </Link>

                                <div className='flex flex-col w-full pl-4 items-start justify-between py-2'>
                                    <Link href={pro.link} target='_blank' className='hover:underline underline-offset-3'>
                                        <h2 className='my-1 w-full text-left text-xl font-bold text-gray-200'>{pro.title}</h2>
                                    </Link>

                                    <p className='my-2 font-medium text-black-700'>{pro.summary}</p>

                                    <div className='mt-2 flex flex-row items-center xx:justify-between w-full'>
                                        <Link href={pro.link} target='_blank' className='mr-4 rounded-lg hover:bg-black bg-leftBlue text-white p-1 px-4 text-lg font-semibold'>View Project </Link>
                                        <Link href={pro.github} target='_blank' className='w-10 hover:mb-2'><GithubIcon /> </Link>


                                    </div>
                                </div>

                            </motion.article>
                        ))}
                    </div>
                </Layout>
            </main>

        </>
    )
}

export default projects