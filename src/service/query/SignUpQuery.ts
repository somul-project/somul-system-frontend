import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const REGISTER_USER_QUERY = gql`
  mutation addUser($input: newUser!) {
    addUser(input: $newUser) @rest(type: "registerUser", paths: "/auth/register", method: "POST") {
      email
      password
      phonenumber
      name
    }
  }
`;
