import Link from 'next/link';
import React from 'react'

const jobCard = ({title , id , brief}) => {  const briefPreview = brief.split(' ').slice(0, 10).join(' ');
  return (
    <div>
<div
  className="w-96 h-64 duration-500 group overflow-hidden relative rounded-2xl bg-white text-black p-4 flex flex-col justify-evenly border-2 border-[#500724]"
>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-[#fdf2f8] right-1 -bottom-24"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-[#fff1f2] right-12 bottom-12"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-[#fdf4ff] right-1 -top-12"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-[#faf5ff] rounded-full group-hover:-translate-x-12"
  ></div>
  <div className="z-10 flex flex-col justify-evenly w-full h-full">
    <span className="text-2xl font-bold flex mx-auto">{title}</span>
    <span className="text-md font-bold">{id}</span>
    <p>
    {briefPreview}...
    </p>
    <Link href={`/JDpage?id=${id}`} as={`/JDpage/${id}`}>
    <button
      className="hover:bg-[#fce7f3] bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3 border-2 border-black"
    >
     Apply
    </button>
    </Link>
  </div>
</div>

    </div>
  )
}

export default jobCard;
