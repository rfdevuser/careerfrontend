"use client"
import { SINGLEJOBRESULT } from '@/utils/gql/GQL_QUERIES';
import { useQuery } from '@apollo/client';

import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import { Watch } from 'react-loader-spinner';


const ApplyForm = ({ params }: { params: { id: string } }) => {
  const { loading, error, data } = useQuery(SINGLEJOBRESULT, {
    variables: { job_id: params.id },
  });

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    currentCity: '',
    highestQualification: '',
    gender: '',
    isStudent: false,
    isWorkingProfessional: false,
    passingYear: '',
    relevantExperience: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState('Next');

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
        passingYear: '',
        relevantExperience: '',
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setButtonText('Please wait...');

    // Validation logic
    if (
      formData.name &&
      formData.email &&
      formData.contactNumber &&
      formData.currentCity &&
      formData.highestQualification &&
      formData.gender &&
      ((formData.isStudent && formData.passingYear) ||
        (formData.isWorkingProfessional && formData.relevantExperience))
    ) {
      // Prepare data to pass to QuestionForm
      const queryParams = {
        jobid: params.id,
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        currentCity: formData.currentCity,
        highestQualification: formData.highestQualification,
        gender: formData.gender,
        isStudent: formData.isStudent.toString(), // Convert boolean to string
        isWorkingProfessional: formData.isWorkingProfessional.toString(), // Convert boolean to string
        passingYear: formData.passingYear,
        relevantExperience: formData.relevantExperience.toString(),
      };

      const queryString = Object.entries(queryParams)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

      // Navigate to the next page
      try {
        await router.push(`/QuestionForm?${queryString}`);
        // Optionally reset form data after successful submission
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          currentCity: '',
          highestQualification: '',
          gender: '',
          isStudent: false,
          isWorkingProfessional: false,
          passingYear: '',
          relevantExperience: '',
        });
      } catch (error) {
        console.error('Error navigating to QuestionForm:', error);
      }
    } else {
      alert('Please fill out all required fields.');
    }

    setIsSubmitting(false);
    setButtonText('Next');
  };


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

  return (
    <section
    className="bg-[#fce7f3] text-black relative "
  
  >
    <div className="border-4 border-black bg-[#500724] text-white">
            <div className="flex justify-center flex-wrap text-3xl mt-10 mb-10">
              {data.jobInfo.job_title}
            </div>

            <div className="flex justify-center text-2xl mt-5  mb-10">
              JOB-ID: {data.jobInfo.job_id}
            </div>
            <div className="mx-10">Location : {data.jobInfo.job_location}</div>
            <h2 className="text-2xl font-bold text-center mb-4 ">Apply now</h2>
          </div>
    <div className="max-w-full mx-auto p-4 bg-white shadow-md rounded-md mt-6 mb-6">
    
      <form onSubmit={handleSubmit} className='shadow-xl border-2 border-black p-2 rounded-xl'>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1  flex justify-center text-xl">
         <b>  Name </b> <span className="text-red-500">*</span>
          </label>
          <input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder='Enter your Full Name'
  required
  className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
/>

        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1  flex justify-center mt-6 mb-6 text-xl">
           <b> Email </b><span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Your Email'
            required
            className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block font-medium mb-1  flex justify-center mt-6 mb-6 text-xl">
            <b>Contact Number </b><span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            placeholder='Enter Your Contact Number'
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-1/2 px-3 py-2 border  border-gray-400 rounded-md mx-auto block"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="currentCity" className="block font-medium mb-1   flex justify-center mt-6 mb-6 text-xl">
            <b>Current City </b><span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="currentCity"
            name="currentCity"
            placeholder='Enter your current city'
            value={formData.currentCity}
            onChange={handleChange}
            required
            className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="highestQualification" className="block font-medium mb-1  flex justify-center mt-6 mb-6 text-xl">
            <b>Highest Qualification</b> <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="highestQualification"
            name="highestQualification"
            placeholder='Enter your Highest Qualification'
            value={formData.highestQualification}
            onChange={handleChange}
            required
            className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block font-medium mb-1  flex justify-center mt-6 mb-6 text-xl">
           <b> Gender </b><span className="text-red-500">*</span>
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1  flex justify-center mt-6 text-xl" >
           <b> Are You a Student or Working Professional?</b>{' '}
            <span className="text-red-500">*</span>
          </label>
          <div className=' flex justify-center mt-6'>
            <label className="inline-flex items-center ">
              <input
                type="radio"
                name="isStudent"
                checked={formData.isStudent}
                onChange={handleChange}
                className="mr-2  mx-auto block "
              />
            <b>  Student</b>
            </label>
            <label className="inline-flex items-center ml-4  flex justify-center">
              <input
                type="radio"
                name="isWorkingProfessional"
                checked={formData.isWorkingProfessional}
                onChange={handleChange}
                className="mr-2"
              />
            <b> Working Professional</b> 
            </label>
          </div>
        </div>
        {formData.isStudent && (
          <div className="mb-4">
            <label htmlFor="passingYear" className="block font-medium mb-1  flex justify-center mt-6 mb-6 text-xl">
            <b>Passing Year</b>   <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="passingYear"
              name="passingYear"
              placeholder='Passing Year'
              value={formData.passingYear}
              onChange={handleChange}
              required={formData.isStudent}
              className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
            />
          </div>
        )}
        {formData.isWorkingProfessional && (
          <div className="mb-4">
            <label htmlFor="relevantExperience" className="block font-medium mb-1  flex justify-center mt-6 mb-6 text-xl">
             <b> Years of Relevant Experience </b><span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="relevantExperience"
              name="relevantExperience"
              placeholder='How many number of experience you have'
              value={formData.relevantExperience}
              onChange={handleChange}
              required={formData.isWorkingProfessional}
              className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
            />
          </div>
        )}
        <div className="mt-6 flex justify-center">
        {/* <Link href={`/QuestionForm?id=${ params.id }`} as={`/QuestionForm/${params.id } `}> */}
        <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center bg-pink-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md mt-10 hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            >
              {buttonText}
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
              {/* </Link> */}
        </div>
      </form>
    </div>
    </section>
  );
};

export default ApplyForm;
