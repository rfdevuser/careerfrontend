"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import TickerWrapper from '../Assests/ticker';
import Link from 'next/link';
import { MY_TICKER } from '@/utils/gql/GQL_QUERIES';
import { useApolloClient, useQuery } from '@apollo/client'; // Import useApolloClient


const Hero = () => {
  const scrollToJobDisplay = () => {
    const jobDisplayElement = document.getElementById('job-display');
    if (jobDisplayElement) {
      jobDisplayElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with id "job-display" not found');
    }
  };
  return (
    <>
   <div>
        <div className="bg-hero  w-full h-full text-black max-h-550px bg-white transform  origin-top overflow-hidden z-0">
        <div className='flex justify-center bg-[#4a044e] text-white text-center'> 𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑹𝑨𝑲𝑯𝑰𝑺 𝑭𝑨𝑺𝑯𝑰𝑶𝑵𝑺, 𝑾𝒆𝒂𝒓 𝑫𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕, 𝑭𝒆𝒆𝒍 𝑺𝒑𝒆𝒄𝒊𝒂𝒍
        </div> 
      
      <div className=' bg-[#4a044e] z-0   '>
      <div className='relative z-10 flex flex-rows  justify-center items-center sm:flex-row sm:justify-center gap-5 '>
        <Link href="https://www.onati-global.com/"><Image
          alt='Onati Global'
          src="/logos/OGtrans.png"
          height={50}
          width={50}
          className='z-10  sm:mb-0 bg-white'
          loading='lazy'
        />
        </Link>
       <Link href="https://www.rebblebee.com/"> <Image
          alt='Rebblebee'
          src="/logos/RB_KIDS.png"
          height={50}
          width={50}
          className='z-10  sm:mb-0'
          loading='lazy'
        />
        </Link>
       <Link href="https://www.wetailor4u.com/"><Image
          alt='wetailor4u'
          src="/logos/wetailor4u.png"
          height={50}
          width={50}
          className='z-10  sm:mb-0'
          loading='lazy'
        />
        </Link> 
       <Link href="https://www.ogiftbangalore.com/"> <Image
          alt='ogift'
          src="/logos/OGIFT.jpg"
          height={50}
          width={50}
          className='z-10  sm:mb-0'
          loading='lazy'
        />
           </Link>
      </div>
   
      </div>
      <div className='flex justify-center flex-col'>
    <div className='-mt-16'> <TickerWrapper /></div> 
    <div className='' style={{ 
        backgroundImage: `url('/background/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className='absolute text-center w-30'> 
      </div></div>
      
      <div
  className='relative z-10 flex items-center justify-center'
  style={{
    backgroundImage: `url('/background/rakhisfashions11.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // Adjust the height to a percentage of the viewport height
    width: '100vw', // Ensure the width takes the full viewport width
    maxHeight: '700px', // Optional: set a max height to prevent it from growing too large
    zIndex: 0,
  }}
>


        <div className='flex flex-col '>
  <div className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl bg-clip-text text-transparent bg-gradient-to-t from-[#fcd34d] to-[#ffffff] -mt-20 text-center '> 𝑫𝒆𝒇𝒊𝒏𝒆 𝒀𝒐𝒖𝒓 𝑭𝒖𝒕𝒖𝒓𝒆</div> 
     <div className='bg-clip-text text-transparent bg-gradient-to-t from-[#fecaca] to-[#ffffff] text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl flex justify-center mt-3  text-center'>--𝙟𝙤𝙞𝙣 𝙪𝙨 𝙞𝙣 𝙩𝙝𝙚 𝙥𝙪𝙧𝙨𝙪𝙞𝙩 𝙤𝙛 𝙖𝙬𝙚𝙨𝙤𝙢𝙚 𝙖𝙙𝙫𝙚𝙣𝙩𝙪𝙧𝙚𝙨--</div> 
        </div>
        </div>   
        <button 
 onClick={scrollToJobDisplay} class="bg-[#a21caf] hover:bg-pink-700 text-white font-bold py-2 px-4 mt-2 rounded-full animate-pulse">
 See Job Opportunities
</button> 
    <Image
          src="/logos/rf.png"
          alt='logo'
          height={600}
          width={600}
          className='z-100 mt-0 shadow-xd mx-auto '
          style={{ opacity: 5 ,    zIndex: 10 }} 
          loading='lazy'
          
        />
    
        

 


      </div>
   
      </div>
      
      </div>
     
    </>
  );
}

export default Hero;
