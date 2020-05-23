import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const CREATE_SESSION = gql`
  mutation createSession(
    $user_email: String!
    $session_name: String
    $session_time: String
    $introduce: String
    $document: String
  ) {
    createSession(
      user_email: $user_email
      session_name: $session_name
      session_time: $session_time
      introduce: $introduce
      document: $document
    ) {
      statusCode
      errorMessage
    }
  }
`;
