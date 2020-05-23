import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      email
      name
      phonenumber
      createdAt
      updateAt
      #      librarys {
      #        id
      #      }
      #      volunteers {
      #        id
      #      }
      sessions {
        id
        session_name
        introduce
        document
        admin_approved
        createdAt
      }
    }
  }
`;
