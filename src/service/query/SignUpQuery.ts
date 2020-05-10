import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const REGISTER_USER_QUERY = gql`
  mutation addUser($body: SignUpPayload!) {
    result(input: {}, body: $body)
      @rest(type: "RegisterUserResult", path: "auth/register", method: "POST", bodyKey: "body") {
      statusCode
      errorMessage
    }
  }
`;
