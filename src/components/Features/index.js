// Features.jsx
import Link from 'next/link';
import React from 'react';

const uspCards = [
  {
    id: 1,
    title: 'Opportunities for Development',
    description:
      'You will have access to continuous learning opportunities, from training programs to leadership development initiatives.',
    link:"/UspPage"
    },
  {
    id: 2,
    title: 'Fun and Engaging Events',
    description:
      'From team-building activities to social events, we create opportunities for you to connect with colleagues and enjoy the journey together.',
   link:"/UspPage"
    },
  {
    id: 3,
    title: 'Unlimited Growth Potential',
    description:
      ' Chart your own career path with endless opportunities for advancement and development tailored to your aspirations.',
  link:"/UspPage"
    },
  {
    id: 4,
    title: 'Competitive Compensation',
    description:
      'Join us for a salary that reflects your skills and experience, ensuring you are rewarded competitively in the industry.',
   link:"/UspPage"
    },
  {
    id: 5,
    title: 'Performance-Based Bonuses',
    description:
      'Earn additional rewards through performance-based bonuses that recognize and celebrate your achievements.',
   link:"/UspPage"
    },
  {
    id: 6,
    title: 'Flexible Work Arrangements',
    description:
      'Enjoy flexibility with remote work options, flexible hours, and a supportive environment that values work-life balance.',
   link:"/UspPage"
    },
  {
    id: 7,
    title: 'Forward-Thinking Leadership',
    description:
      'Work under visionary leaders who inspire and empower you to innovate, take initiative, and achieve your full potential.',
   link:"/UspPage"
    },
  {
    id: 8,
    title: 'Collaborative Team Culture',
    description:
      ' Join a collaborative team environment where teamwork and mutual support are at the heart of everything we do.',
   link:"/UspPage"
    },
  // Add more cards as needed
];


const Features = () => {
  const UspCard = ({ title, description, link }) => (
    <div className=" h-[20em] w-[18em] rounded-[1.5em] bg-gradient-to-br from-[#fefce8] to-[#ffffff] text-black font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
      <div>
        <h1 className="text-[2em] font-medium text-[#500724]">{title}</h1>
        <p className="text-[0.85em]">{description}</p>
      </div>
      {link && (
        <Link href={link}>
          <div className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Learn More</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </Link>
      )}
    </div>
  );

  return (
    <>
    <div className='bg-[#ffe4e6] p-6 '>
      <div className='text-black flex justify-center w-300 h-300 text-4xl mb-2 '>𝑾𝒆 𝒂𝒓𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒊𝒏𝒈</div>
      <div className="flex bg-[#ffe4e6]  justify-center flex-wrap gap-6 mt-6 ">
        {uspCards.map((card) => (
          <UspCard key={card.id} title={card.title} description={card.description} link={card.link} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Features;