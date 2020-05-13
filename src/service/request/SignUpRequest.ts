import { SignUpPayload } from 'interfaces/service/request/ISignUpRequest';
import { FetchResult } from 'apollo-link';
import apolloClient from 'frameworks/web/apollo';
import { REGISTER_USER_QUERY, RESEND_EMAIL } from 'service/query/SignUpQuery';

export default class SignUpRequest {
  static signUp(payload: SignUpPayload): Promise<FetchResult> {
    return apolloClient.mutate({
      mutation: REGISTER_USER_QUERY,
      variables: { body: payload },
      fetchPolicy: 'no-cache',
    });
  }

  static resendVerifyEmail(): Promise<FetchResult> {
    return apolloClient.query({ query: RESEND_EMAIL, fetchPolicy: 'no-cache' });
  }
}
