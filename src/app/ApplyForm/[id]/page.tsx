"use client";
import { SINGLEJOBRESULT } from '@/utils/gql/GQL_QUERIES';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
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

  const [errorW, setErrorW] = useState('');
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
      if (name === 'relevantExperience') {
        // Allow only numbers
        if (!/^\d*$/.test(value)) {
          setErrorW('Please enter a valid number.');
          return;
        }
        
        // Restrict to 8 years for specific job IDs
        if (['RF-GA0824', 'RF-MD0824'].includes(params.id) && value !== '' && parseInt(value, 10) > 8) {
          alert('Please note that this position requires less than 8 years of experience.');
          return;
        }

        setErrorW('');
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setButtonText('Please wait...');

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
      const queryParams = {
        jobid: params.id,
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        currentCity: formData.currentCity,
        highestQualification: formData.highestQualification,
        gender: formData.gender,
        isStudent: formData.isStudent.toString(),
        isWorkingProfessional: formData.isWorkingProfessional.toString(),
        passingYear: formData.passingYear,
        relevantExperience: formData.relevantExperience.toString(),
      };

      const queryString = Object.entries(queryParams)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

      try {
        await router.push(`/QuestionForm?${queryString}`);
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
    <section className="bg-[#fce7f3] text-black relative">
      <div className="border-4 border-black bg-[#500724] text-white">
        <div className="flex justify-center flex-wrap text-3xl mt-10 mb-10">
          {data.jobInfo.job_title}
        </div>
        <div className="flex justify-center text-2xl mt-5 mb-10">
          JOB-ID: {data.jobInfo.job_id}
        </div>
        <div className="mx-10">Location : {data.jobInfo.job_location}</div>
        <h2 className="text-2xl font-bold text-center mb-4">Apply now</h2>
      </div>
      <div className="max-w-full mx-auto p-4 bg-white shadow-md rounded-md mt-6 mb-6">
        <form onSubmit={handleSubmit} className='shadow-xl border-2 border-black p-2 rounded-xl'>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1 flex justify-center text-xl">
              <b>Name</b> <span className="text-red-500">*</span>
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
            <label htmlFor="email" className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
              <b>Email</b><span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Your Email'
              required
              className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
              <b>Contact Number</b><span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder='Enter Your Contact Number'
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="currentCity" className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
              <b>Current City</b><span className="text-red-500">*</span>
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
            <label htmlFor="highestQualification" className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
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
            <label htmlFor="gender" className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
              <b>Gender</b><span className="text-red-500">*</span>
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
            <label className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
              <b>Are you a student?</b>
              <input
                type="checkbox"
                id="isStudent"
                name="isStudent"
                checked={formData.isStudent}
                onChange={handleChange}
                className="ml-2"
              />
            </label>
            {formData.isStudent && (
              <div className="mb-4">
                <label htmlFor="passingYear" className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
                  <b>Year of Passing</b><span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="passingYear"
                  name="passingYear"
                  placeholder='Enter your Year of Passing'
                  value={formData.passingYear}
                  onChange={handleChange}
                  required={formData.isStudent}
                  className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
                />
              </div>
            )}
            <label className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
              <b>Are you a working professional?</b>
              <input
                type="checkbox"
                id="isWorkingProfessional"
                name="isWorkingProfessional"
                checked={formData.isWorkingProfessional}
                onChange={handleChange}
                className="ml-2"
              />
            </label>
            {formData.isWorkingProfessional && (
              <div className="mb-4">
                <label htmlFor="relevantExperience" className="block font-medium mb-1 flex justify-center mt-6 mb-6 text-xl">
                  <b>Years of Relevant Experience</b><span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="relevantExperience"
                  name="relevantExperience"
                  placeholder='How many years of experience do you have?'
                  value={formData.relevantExperience}
                  onChange={handleChange}
                  required={formData.isWorkingProfessional}
                  className="w-1/2 px-3 py-2 border border-gray-400 rounded-md mx-auto block"
                />
                {error && (
                  <div className="text-red-500 mt-2">
                    {error}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#500724] text-white py-2 px-4 rounded-md"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyForm;
