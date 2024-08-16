"use client";
import React from "react";
import FeedbackCard from "./FeedbackCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedback = [
  {
    id: "feedback-1",
    content:
      "A company with a welcoming culture, employees are friendly. Employees are highly invested and inspired to do their best work for the company. There are Transparency in the company when it comes key information and decision making.",
    name: "Laxmi Pandey",
    title: "Designer",
    img: "/Testimonials/Laxmi.jpg",
  },
  {
    id: "feedback-2",
    content:
      "They have really good offices and facilities. Everything is comfortable and modern.A company with good infrastructure ; best place to gain knowledge",
    name: "Sushma KS",
    title: "Assistant fashion designer",
    img: "/Testimonials/Sushma.jpeg",
  },
  {
    id: "feedback-3",
    content:
     " A supportive organizational culture encourages knowledge-sharing and collaboration among team members. Employees feel empowered to ask questions, seek advice, and contribute their expertise to collective goals.Great Learning Place!",
    name: "Abhishek Suman",
    title: "Software Developer",
    img: "/Testimonials/Suman.jpeg",
  },
  {
    id: "feedback-4",
    content:
      " The training sessions are great—they teach us new skills and help us improve. I appreciate that the managers listen to our ideas and make us feel valued. ",
    name: "Bhanu Priya",
    title: "Designer",
    img: "/Testimonials/BhanuP.jpg",
  },
  {
    id: "feedback-5",
    content:
      "I really enjoy working at our company because everyone is friendly and helpful. The teamwork here makes it easier to achieve our goals together. ",
    name: "Kruthika Gowda",
    title: "Designer",
    img: "/Testimonials/kruthika.jpg",
  },
  
];

const Testimonials = () => {
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
    <section id="clients" className={`sm:py-16 py-6 relative bg-white text-black `}>
      <div className="absolute z-0 w-60 h-60 -right-1/2 rounded-full blue__gradient bottom-40" />

      <div className="w-full flex flex-col sm:flex-row justify-between items-center relative z-1">
        <h2 className={`font-poppins font-semibold text-4xl text-black leading-tight w-full sm:justify-center`}>
        𝑾𝒉𝒂𝒕 𝒐𝒖𝒓 𝑬𝒎𝒑𝒍𝒐𝒚𝒆𝒆𝒔 𝒂𝒓𝒆 <br className="sm:block hidden" /> 𝒔𝒂𝒚𝒊𝒏𝒈 𝒂𝒃𝒐𝒖𝒕 𝒖𝒔
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`font-poppins font-normal text-black text-lg leading-normal max-w-md`}>
          𝑩𝒆𝒉𝒊𝒏𝒅 𝒕𝒉𝒆 𝑺𝒄𝒆𝒏𝒆𝒔: 𝑽𝒐𝒊𝒄𝒆𝒔 𝒐𝒇 𝑶𝒖𝒓 𝑻𝒆𝒂𝒎
          </p>
        </div>
      </div>

      <Slider {...settings} className="mt-6">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </Slider>
  
    </section>
  );
};

export default Testimonials;
