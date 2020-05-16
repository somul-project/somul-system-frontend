import { SignInPayload } from 'interfaces/service/request/ISignInRequest';
import { FetchResult } from 'apollo-link';
import apolloClient from 'frameworks/web/apollo';
import { LOGIN_QUERY } from 'service/graphql/rest/SignInQuery';

export default class SignInRequest {
  static login(payload: SignInPayload): Promise<FetchResult> {
    return apolloClient.mutate({
      mutation: LOGIN_QUERY,
      variables: { body: payload },
      fetchPolicy: 'no-cache',
    });
  }
}
