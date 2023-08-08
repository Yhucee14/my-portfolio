import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import profilePic from '../../public/images/profile/uc2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 8000 })
    const isInView = useInView(ref);

    useEffect(() => {
        if(isInView){
           motionValue.set(value) 
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])


    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Ucee | About page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-8'>
                    <AnimatedText text="Writing Lines That Transform Lives" className='mb-10' />


                    <div className='grid w-full grid-cols-8 gap-16'>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-green p-4'>

                            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-black' /> */}
                            <Image src={profilePic} alt='img' className='w-full h-auto rounded-2xl' />
                        </div>

                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 font-bold uppercase'>About Me</h2>
                            <p className='font-medium'>
                                Hi, I'm Uche, a web developer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 2 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients visions to life.
                            </p>
                            <p className='my-3 font-medium'>
                                I believe that web development is about more than just making things look pretty, it's about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className='font-medium'>
                                Whether I'm working on a website, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.

                            </p>
                        </div>

                        <div className='col-span-2 flex flex-col items-center '>

                            <div className='flex flex-col items-center justify-between pt-10'>
                                <span className='inline-block text-4xl font-bold'>
                                    <AnimatedNumbers value={2}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-black/75'>Years Of Experience</h2>
                            </div>

                            <div className='col-span-2 flex flex-col items-center justify-between pt-20'>
                                <span className='inline-block text-4xl font-bold'>
                                <AnimatedNumbers value={10}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-black/75'>Projects Completed</h2>
                            </div>

                        </div>


                    </div>

                    <Skills />
                </Layout>
            </main>
        </>
    )
}

export default about