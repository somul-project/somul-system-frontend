import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const LOGIN_QUERY = gql`
  mutation addUser($body: LoginPayload!) {
    result(input: {}, body: $body)
      @rest(type: "Login", path: "auth/login", method: "POST", bodyKey: "body") {
      statusCode
      errorMessage
    }
  }
`;
