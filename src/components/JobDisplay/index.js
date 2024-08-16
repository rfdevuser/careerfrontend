"use client"
import React from 'react';
import JobCard from '../Assests/jobCard'; // Assuming jobCard is a component and should be imported as JobCard
import { useQuery } from '@apollo/client';
import { JOBSINFO } from '@/utils/gql/GQL_QUERIES';
import { Watch } from 'react-loader-spinner';

const JobDisplay = () => {
 
    const { loading, error, data } = useQuery(JOBSINFO);
  
    if (loading) {
      // Show loader or shimmer effect while data is being fetched
      return (
        <div id="job-display" className="container mx-auto p-4 flex justify-center">
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
  
    console.log(data); 
  return (
    <>
    <div id="job-display"  className='bg-white text-black text-3xl flex items-center justify-center '>𝑱𝒐𝒊𝒏 𝒐𝒖𝒕 𝑻𝒆𝒂𝒎</div>
    <div className='bg-white text-black gap-4 flex justify-center flex-wrap pt-6'>
    {data && data.querryofalljobs.map((job, index) => (
  <JobCard key={job.id} title={job.job_title} id={job.job_id} brief={job.job_brief} />
))}

      {/* <JobCard title={"sde"} id={"sde001"} location={"delhi"}/> */}
 
    </div>
    </>
  );
}

export default JobDisplay;
