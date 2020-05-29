import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_SESSIONS = gql`
  query Sessions($admin_approved: String) {
    sessions(admin_approved: $admin_approved) {
      id
      user_email
      session_name
    }
  }
`;
