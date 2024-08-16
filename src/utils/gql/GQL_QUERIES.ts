import { gql } from '@apollo/client';

export const JOBSINFO = gql`

 query MyQuery {
  querryofalljobs {
    id
    job_id
    job_title
    job_brief
    job_responsibility
    job_requirement
    job_salary
    job_location
    question1
    question2
    question3
    question4
    question5
  }
}

`;
export const SINGLEJOBRESULT = gql`
  query JobInfo($job_id: String!) {
    jobInfo(job_id: $job_id) {
      id
      job_id
      job_title
      job_brief
      job_responsibility
      job_requirement
      job_salary
      job_location
      question1
      question2
      question3
      question4
      question5
    }
  }
`;


export const MY_TICKER = gql `
query MyQuery {
  tickerInfo
}
`;