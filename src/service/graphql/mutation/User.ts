import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $name: String!, $phonenumber: String!) {
    updateUser(where: { email: $email }, changeValues: { name: $name, phonenumber: $phonenumber }) {
      statusCode
      errorMessage
    }
  }
`;
