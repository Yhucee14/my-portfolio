import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import pro from '../pages/profile/pro.jpeg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icon';

export default function Home() {
  return (
    <>
      <Head>
        <title>Uche</title>
        <meta name="description" content="My personal portfolio" />
      </Head>

      <main className='flex items-center text-gray-300  w-full'>
        <Layout className='border-b-2 border-b-gray-200'>
          <div className='flex xx:flex-col sm:flex-col md:flex-row items-center justify-between w-full'>
            <div className=' xx:w-full rounded-full border-2 border-solid border-gray-200 p-2'>
              <Image src={pro} alt='img' className='w-[100%] h-full  rounded-full' />
            </div>

            

            <div className=' xx:w-full md:px-14 py-3 flex flex-col self-center'>
              <AnimatedText text="Hello, I am Uche." className='sm:!text-4xl xx:text-3xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                As a Front-End Web developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects showcasing my abilities in web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href='/Resume.pdf' target={"_blank"}
                className='flex items-center bg-blue-600 text-white text-lg font-semibold hover:bg-gray-200 hover:text-black p-2 px-4 rounded-lg
                border-2 border-solid border-gray-400 hover:border-blue-500'
                download={true}>
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link> 

                <Link href='mailto:uchechukwu7814@gmail.com' target={"_blank"}
                className='ml-4 text-lg px-2 border-2 border-solid bg-gray-200 border-gray-400 hover:bg-blue hover:text-white hover:border-white font-bold capitalize text-black p-1 py-2 rounded-lg  hover:border-2'>
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
