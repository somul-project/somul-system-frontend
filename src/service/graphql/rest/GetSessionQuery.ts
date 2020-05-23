import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_CURRENT_SESSION_QUERY = gql`
  query getSession {
    result @rest(type: "GetSession", path: "auth/get_userInfo") {
      email
      name
      phonenumber
      verify_email
      statusCode
    }
  }
`;
