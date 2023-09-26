import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../pages/profile/dp.png';
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

      <main className='flex items-center text-black w-full'>
        <Layout className='pt-3 '>
          <div className='flex xx:flex-col sm:flex-row items-center  justify-between w-full'>
            <div className='sm:w-[40%] xx:w-full h-max rounded-2xl border-2 border-solid border-black bg-green p-2'>
              <Image src={profilePic} alt='img' className='w-[100%] sm:h-[450px] xx:h-[450px] rounded-2xl' />
            </div>

            <div className='sm:w-1/2 xx:w-full px-2 py-3 flex flex-col items-center self-center'>
              <AnimatedText text="Hello, I am Uche." className='sm:!text-4xl xx:text-3xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                As a Front-End Web developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects showcasing my abilities in web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href='/CV.docx' target={"_blank"}
                className='flex items-center bg-black text-white text-lg font-semibold hover:bg-white hover:text-black p-2 px-4 rounded-lg
                border-2 border-solid border-transparent hover:border-black'
                download={true}>
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link> 

                <Link href='mailto:uchechukwu7814@gmail.com' target={"_blank"}
                className='ml-4 text-lg font-semibold capitalize text-black  underline p-1 py-2 rounded-lg underline-offset-8 hover:border-2 hover:border-black hover:no-underline'>
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
