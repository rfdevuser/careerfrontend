import { gql } from "@apollo/client";


  export const ADD_CANDIDATE_RESPONSE_MUTATION = gql`
  mutation AddCandidate(
    $answer1: String!,
    $answer2: String!,
    $answer3: String!,
    $answer4: String!,
    $answer5: String!,
    $city: String!,
    $contact: String!,
    $email: String!,
    $gender: String!,
    $job_id: String!,
    $name: String!,
    $passing_year: String!,
    $qualification: String!,
    $resume: String!,
    $student: String!,
    $year_of_experience: String!,
    $working_professional: String!,
  ) {
     addCandidateResponse(
    input: {answer1: $answer1, answer2: $answer2, answer3: $answer3, answer4: $answer4, answer5: $answer5, city: $city, clientMutationId: "test", contact: $contact, email: $email, gender: $gender, job_id: $job_id, passing_year: $passing_year, name: $name, qualification: $qualification, resume: $resume, student: $student, working_professional: $working_professional, year_of_experience: $year_of_experience}
  ) {
  
    testoutput
  }
}`