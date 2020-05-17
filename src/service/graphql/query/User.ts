import gql from 'graphql-tag';

export const GET_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      email
      name
      phonenumber
      createdAt
      updateAt
    }
  }
`;

export const GET_USERS = gql`
  query Users($email: String, $name: String, $phonenumber: String) {
    users(email: $email, name: $name, phonenumber: $phonenumber) {
      email
    }
  }
`;
