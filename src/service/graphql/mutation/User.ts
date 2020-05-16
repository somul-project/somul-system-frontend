import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const UPDATE_USER = gql`
  mutation updateUser($email: String!) {
    updateUser(email: $email) {
      error
      result
    }
  }
`;
