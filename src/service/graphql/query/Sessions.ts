import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_SESSIONS = gql`
  query Sessions {
    sessions {
      id
      user_email
      session_name
      document
      introduce
      session_explainer
      user {
        name
      }
    }
  }
`;
