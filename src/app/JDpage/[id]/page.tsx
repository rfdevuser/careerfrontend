"use client"
import { useQuery } from "@apollo/client";
import { SINGLEJOBRESULT } from "@/utils/gql/GQL_QUERIES";

import Link from "next/link";
import { Watch } from "react-loader-spinner";
import { useEffect, useState } from "react";

// Spinner component for loading indicator
// const Spinner = () => (
//   <div className="flex justify-center items-center h-screen">
//     <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
//   </div>
// );


const JobDetails = ({ params }: { params: { id: string } }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const { loading, error, data } = useQuery(SINGLEJOBRESULT, {
    variables: { job_id: params.id },
  });

  if (loading) {
    // Show loader or shimmer effect while data is being fetched
    return (
      <div className="container mx-auto p-4 flex justify-center">
        <Watch
  visible={true}
  height="80"
  width="80"
  radius="48"
  color="#500724"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  const { jobInfo } = data;

  // Function to convert lines starting with ` to bullet points
  const convertToBulletPoints = (inputString: string) => {
    // Split input into sentences based on periods
    let sentences = inputString.split('.');
  
    // Filter out any empty strings or strings with only spaces
    sentences = sentences.filter(sentence => sentence.trim() !== '');
  
    // Map each sentence to a paragraph element with a bullet symbol
    const paragraphs = sentences.map((sentence, index) => (
      <p key={index}>
        <span className="bullet">&#8226;</span> {sentence.trim()}
      </p>
    ));
  
    return paragraphs;
  };
  
  
  const handleCheckBox = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isChecked) {
      e.preventDefault(); // Prevent default link behavior if checkbox is not checked
      alert("Please check the box to agree to the terms and conditions."); // Show alert message
    } else {
      setShowError(false); // Hide the error message if checkbox is checked
    }
  };
  

  return (
    <section className="bg-white text-black relative">
      <div className="">
        <div className="    bg-white">
          <div className="border-4 border-black bg-[#500724] text-white">
            <div className="flex justify-center flex-wrap text-3xl mt-10 mb-10">
              {jobInfo.job_title}
            </div>

            <div className="flex justify-center text-2xl mt-5  mb-10">
              JOB-ID: {jobInfo.job_id}
            </div>
            <div className="mx-10">Location : {jobInfo.job_location}</div>
          </div>
 
          <div className="flex flex-col  mt-20 p-2 m-2">
            <div className="mx-2 bg-transparent text-[#500724] text-xl  rounded-md  p-1">
              JOB BRIEF
            </div>
            <div className="mt-5">{jobInfo.job_brief}</div>

            <div className="mx-2 bg-transparent text-[#500724] text-xl  rounded-md p-1 mt-10">
              JOB RESPONSIBILITY
            </div>
            <div className="mt-5">
              {convertToBulletPoints(jobInfo.job_responsibility)}
            </div>

            <div className="mx-2 bg-transparent text-[#500724] text-xl  rounded-md  p-1 mt-10">
              JOB REQUIREMENT
            </div>
            <div className="mt-5">
              {convertToBulletPoints(jobInfo.job_requirement)}
            </div>

            <div className="mx-2 bg-transparent text-[#500724] text-xl  rounded-md  p-1 mt-10">
              SALARY
            </div>
            <div className="mt-5">{jobInfo.job_salary}</div>
          </div>


          <div className="flex items-center mx-10 mt-5">
            <input
              type="checkbox"
              id="terms-checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mr-2"
              required
            />
            <label htmlFor="terms-checkbox" className="text-gray-700">
            By checking this box, you confirm that you have read and agree to the terms and conditions, and that you have noted any questions(if present) in the job description you may need to answer on the next page
            </label>
          </div>
          {showError && (
            <div className="text-red-500 text-center mt-2">
              Please check the box to agree to the terms and conditions.
            </div>
          )}
          <div className="flex justify-center">
            <Link
              href={`/ApplyForm?id=${jobInfo.job_id}`}
              as={`/ApplyForm/${jobInfo.job_id}`}
            >
              <button className="flex items-center bg-pink-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md mt-10 hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"   disabled={!isChecked} onClick={handleCheckBox}>
                Apply Now
                <svg
                  className="w-5 h-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-auto lg:order-last md:order-first sm:order-first mt-5"></div>
      </div>
    </section>
  );
};

export default JobDetails;
