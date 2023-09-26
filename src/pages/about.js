import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import profilePic from '../pages/profile/uc2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

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
                    <AnimatedText text="Writing Lines That Transform Lives." className='xx:text-3xl sm:text-4xl mb-8' />


                    <div className='grid w-full sm:grid-cols-8 xx:grid-cols-3 gap-16'>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-green p-4 px-5'>

                            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-black' /> */}
                            <Image src={profilePic} alt='img' className='w-full sm:h-[400px] xx:h-[450px] xx:w-full rounded-2xl' />
                        </div>

                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 font-bold uppercase'>About Me</h2>
                            <p className='font-medium'>
                                Hi, I am Uche, a web developer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 2 years of experience in the field. I am always looking for
                                new and innovative ways to bring my ideas to life.
                            </p>
                            <p className='my-3 font-medium'>
                                I believe that web development is about more than just making things look pretty, it is about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className='font-medium'>
                                 I always bring my commitment to excellence and user-centered thinking to
                                every project I work on and i look forward to the opportunity to bring my skills and passion to your next project.

                            </p>
                        </div>

                        <div className='sm:col-span-2 xx:col-span-3 flex flex-col items-center '>

                            <div className='flex flex-col items-center justify-between sm:pt-10 xx:pt-5'>
                                <span className='inline-block text-4xl font-bold'>
                                    <AnimatedNumbers value={2}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-black/75'>Years Of Experience</h2>
                            </div>

                            <div className='sm:col-span-2 xx:col-span-3 flex flex-col items-center justify-between pt-20'>
                                <span className='inline-block text-4xl font-bold'>
                                <AnimatedNumbers value={7}/>
                                </span>
                                <h2 className='text-xl font-medium capitalize text-black/75'>Projects Completed</h2>
                            </div>

                        </div>


                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about