"use client";
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Card1 = ({ title, description ,index}) => {
  let bgColorClass = index % 2 === 0 ? 'bg-pink-200' : 'bg-pink-200';
    return (
      <div className={`rounded-lg p-6 w-full shadow-md  ${bgColorClass}`}>
        <h2 className="text-lg text-black font-bold mb-2">{title}</h2>
        <p className="text-sm text-black">{description}</p>
      </div>
   
    );
  };
  const Card2 = ({ title, description, color }) => {
    // Dynamically generate background color class based on color prop
    let bgColorClass;
    switch (color) {
      case 'orange':
        bgColorClass = 'bg-orange-800';
        break;
      case 'purple':
        bgColorClass = 'bg-purple-800';
        break;
        case 'red':
        bgColorClass = 'bg-red-800';
        break;
        case 'green':
          bgColorClass = 'bg-green-800';
          break;
          case 'blue':
            bgColorClass = 'bg-blue-800';
            break;
      // Add more cases for other colors if needed
      default:
        bgColorClass = 'bg-gray-200'; // Default to gray if color is not recognized
    }
  
    return (
      <div className="flex flex-row items-center justify-center shadow-md">
        <div className={`border-2 border-black w-80 h-80 rounded-xl p-2 -mx-2 ${bgColorClass}`}>
          <div className='flex justify-center font-bold text-3xl text-[#facc15]'>{title}</div>
          <div className='flex flex-wrap text-center overflow-hidden mt-4 text-2xl text-white'>{description}</div>
        </div>
      </div>
    );
  };
  const cardData2 = [
    { title: "Integrity", description: "We provide an environment where honesty and ethical behavior are paramount in every interaction, building trust and credibility with our stakeholders.", color: "orange" },
    { title: "Innovation", description: "We encourage creativity and forward-thinking among our team to continuously improve and pioneer solutions that redefine our industry.", color: "purple" },
    { title: "Teamwork", description: "We value collaboration, cooperation, and mutual respect within our team, knowing that together, we achieve more and support each other's success.", color: "red" },
    { title: "Quality", description: "We are committed to excellence in everything we do, ensuring that our products, services, and processes consistently meet the highest standards.", color: "green" },
    { title: "Sustainability", description: "We integrate environmental and social responsibility into our business practices, striving for positive impacts that benefit our communities and the planet.", color: "blue" }
  ];
  
  
 const cardData = [
    { title: "Opportunities for Growth and Learning", description: "Unlock your potential with our comprehensive development programs. From personalized coaching to industry-leading training sessions, we empower you to grow both personally and professionally." },
    { title: "Innovative Work Environment9", description:  "Join a dynamic team where creativity and innovation thrive. Our collaborative workspace encourages fresh ideas and bold solutions, fostering an environment where every voice is heard." },
    { title: "Flexible Work-Life Balance", description: "Enjoy flexibility with remote work options and flexible schedules. We prioritize work-life balance, ensuring you have the freedom to manage your professional responsibilities while nurturing personal commitments."},
    { title: "Competitive Compensation and Benefits", description: "Be rewarded fairly for your skills and expertise. Our competitive salary packages and comprehensive benefits ensure you’re recognized and valued in the industry."
 },
 { title: "Diverse and Inclusive Culture", description: "Celebrate diversity in a supportive and inclusive workplace. We embrace different perspectives, fostering a culture where every individual is respected and has equal opportunities to succeed."

 },
 { title: "Social Impact and Sustainability", description:"Make a meaningful difference with our commitment to social responsibility and sustainability. Join us in initiatives that positively impact communities and the environment, creating a better world for future generations."
 },
  ];
const UspPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className='bg-white'>
      <div className='bg-white text-black min-h-screen flex flex-col md:flex-row'>
        {/* Image section */}
        <div className='md:w-1/3'>
          <div className='relative mt-8 mx-4'>
            <Image 
              alt='ImageLoading'
              src='/idea/bulbidea.jpg'
              layout='responsive'
              width={300}
              height={300}
            />
          </div>
        </div>
        
        {/* Title section */}
        <div className='md:w-2/3 md:pl-8 md:mx-3 flex justify-center items-center text-center'>
          <div className='mt-5 md:mt-10 text-3xl m-6 p-6'>
            𝑰𝒈𝒏𝒊𝒕𝒆 𝒀𝒐𝒖𝒓 𝑷𝒐𝒕𝒆𝒏𝒕𝒊𝒂𝒍: 𝑾𝒉𝒆𝒓𝒆 𝑷𝒂𝒔𝒔𝒊𝒐𝒏 𝑳𝒆𝒂𝒅𝒔 𝒕𝒐 𝑺𝒖𝒄𝒄𝒆𝒔𝒔
            <div className='mt-5 md:mt-10 text-lg'>Arrays of Work We Have Done</div>
            <div className='flex flex-wrap justify-center mt-4'>
              <span className='border-2 border-[#be185d] rounded-lg text-lg p-2 m-2 bg-[#be185d] shadow-xl text-[#fef08a]'>Collections and Designs</span>
              <span className='border-2 border-[#be185d] rounded-lg text-lg p-2 m-2 bg-[#be185d] shadow-xl text-[#fef08a]'>Fashion Shows and Events</span>
              <span className='border-2 border-[#be185d] rounded-lg text-lg p-2 m-2 bg-[#be185d] shadow-xl text-[#fef08a]'>Innovations and Technology</span>
              <span className='border-2 border-[#be185d] rounded-lg text-lg p-2 m-2 bg-[#be185d] shadow-xl text-[#fef08a]'>Social and Environmental Impact</span>
              <span className='border-2 border-[#be185d] rounded-lg text-lg p-2 m-2 bg-[#be185d] shadow-xl text-[#fef08a]'>Educational Initiatives</span>
              <span className='border-2 border-[#be185d] rounded-lg text-lg p-2 m-2 bg-[#be185d] shadow-xl text-[#fef08a]'>Global Reach and Retail Presence</span>
              <span className='border-2 border-[#be185d] rounded-lg text-lg p-2 m-2 bg-[#be185d] shadow-xl text-[#fef08a]'>Client Projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center text-2xl mt-2 mb-2 text-[#831843]'><h1>
      𝑨𝒃𝒐𝒖𝒕 𝑼𝒔
</h1></div>
<div className='mt-2 mb-2 items-center text-black '>We are an exceptional and fully equipped Garments Designing, Develop & Manufacturing house situated in Bangalore, the Silicon Valley of India. Started in 2009 as an atelier, we have grown by leaps and bounds over the years and successfully morphed from a niche bespoke design and development studio to an end to end production supply chain, catering to a wide range of manufacturing needs with a very flexible delivery model and bespoke product development services. Over the years, we have arduously re-engineered every step of our work flow to ably match the dynamism of the ever growing and dynamic needs of the fashion market. Rakhis Fashions has expanded its capacity, developed a skilled workforce and introduced integrated technologies, to remain globally up-to-date. Over a decade in the Fashion and Apparel industry, Rakhis Fashions now has it’s successful brands, OnatiGlobal, Rebblebee and Wetailor4u and expanded it’s reach in all channels , from online to D2C and B2B.

We can comprehend the ever changing nature of the fashion world and to stay one step ahead of other garment manufactures, we have recognized the strategic nature of our design and development focus and have successfully established a cutting edge Research, Design and Development team. Our sampling departments is ably supported by the R&D team. The team is relentlessly researching new trends in colors, designs and manufacturing technology. There is a strong focus on “Continuous Improvement”. We are committed to listening to the market and continuously feeding those learnings into our process thereby improving the efficiency and throughput, resulting in better and predictable delivery.
</div>

<div className='flex flex-col lg:flex-row sm:flex-col md:flex-col'>
  <div className='mt-2 mb-2 p-2 items-center lg:w-1/2 sm:w-full md:w-full mx-2 bg-[#f5d0fe] text-2xl text-[#500724] rounded-3xl'>
  <div className='flex justify-center text-2xl mt-2 mb-2 text-[#831843]'>
  <h1>𝑾𝒐𝒓𝒌 𝑷𝒍𝒂𝒄𝒆 𝑬𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕</h1>
</div>
    As a responsible apparel producer, we provide employees a work environment high above the law-required level. We have installed and have updated lighting, ventilation and ergonomics of our unit using latest technologies. The goal is to exceed requirements of local legislation and reach the global standards, and thereby support clients’ reputation and sourcing principles. Clearly demarcated emergency routes & exits, smoke & fire detectors, consciously designed working lay-outs ensure a safe workplace for workers. As per statutory requirements, instructions and warning signs are posted in highly visible places, inside the unit. Besides being safe, our workplace offers a congenial & supporting environment for all: managerial staffs and workers work in mutual cooperation and respect. We consciously put effort to empower woman not only by just recruiting more women in workforce, but also by undertaking some assertive programs to train & promote women in the higher levels
  </div>
  <div className='flex justify-center items-center lg:w-1/2 sm:w-full md:w-full'>
    <img src='/lifeatrf/workculture.jpg' alt='loading' className='h-auto w-full rounded-3xl' />
  </div>
</div>



<div className='flex flex-col lg:flex-row sm:flex-col md:flex-col'>
<div className='flex justify-center items-center lg:w-1/2 sm:w-full md:w-full'>
    <img src='/lifeatrf/safty.jpg' alt='loading' className='h-auto w-full rounded-3xl' />
  </div>
  <div className='mt-2 mb-2 p-2 items-center lg:w-1/2 sm:w-full md:w-full mx-2 bg-[#fbcfe8] text-2xl text-[#500724] rounded-3xl'>
  <div className='flex justify-center text-2xl mt-8 mb-2 text-[#831843]'>
  <h1>𝑺𝒂𝒇𝒆𝒕𝒚 & 𝑰𝒏𝒕𝒆𝒈𝒓𝒊𝒕𝒚 </h1>
</div>
  We strictly adhere to ethical business-practice. Compliance as a continuous process, and exceeds local legislations. Our Compliance Management Team monitors and reviews the various activities performed throughout the organization. For the safety of our workers, we have improved workplace conditions; set up noticeable warning signs in the local language; enforced the usage of safety equipment; and built awareness among the workforce. The work-place has clearly demarcated emergency exits and equipment. Besides paying a healthy living wage - much higher than the legal minimum - we support our workers by setting up welfare facilities. By providing safe drinking water; and hygienic lavatories, we ensure that workers are comfortable with the workplace. We also provide transportation to our workers where applicable.
  </div>
  
</div>

<div className='flex justify-center text-3xl mt-4  text-[#831843] bg-[#fecdd3] p-6 '>
  <h1>𝑶𝒖𝒓 𝑽𝒂𝒍𝒖𝒆𝒔</h1>
</div>
<Slider {...settings} className=" bg-[#fecdd3] p-8">
        {cardData2.map((data, index) => (
          <div key={index} className="slick-slide">
            <Card2 {...data} />
          </div>
        ))}
      </Slider>
<div className=' text-2xl mt-6  mx-4 text-[#831843] '><h1>
𝑶𝒕𝒉𝒆𝒓 𝑩𝒆𝒏𝒊𝒇𝒊𝒕𝒔
</h1></div>
      <div className="grid gap-0 lg:flex lg:flex-wrap">
                  {cardData?.map((data, index) => (
                    <Card1 key={index} {...data} index={index} />
                  ))}
                </div>
             

    </section>
  );
};

export default UspPage;
