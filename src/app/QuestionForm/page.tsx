"use client"
import { useMutation, useQuery } from '@apollo/client';
import { SINGLEJOBRESULT } from "@/utils/gql/GQL_QUERIES";
import { ADD_CANDIDATE_RESPONSE_MUTATION } from "@/utils/gql/GQL_MUTATION";
import { useSearchParams } from "next/navigation";
import  { Suspense, useState } from "react";
import { Watch } from 'react-loader-spinner';
import next from 'next';
import QuestionPage from '@/components/QuestionPage';
// import Loader from 'react-loader-spinner';
interface FormData {
  
  jobID: string;
  name: string;
  email: string;
  contactNumber: string;
  currentCity: string;
  highestQualification: string;
  gender: string;
  isStudent: string;
  isWorkingProfessional: string;
  passingYear: string;
  relevantExperience: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  resume: string;
  consent: boolean;
}

const QuestionForm = ({ params }: { params: { id: string } }) => {
 return (
    <Suspense>
      <QuestionPage params={params}/>
    </Suspense>
  );
 
};

export default QuestionForm;
