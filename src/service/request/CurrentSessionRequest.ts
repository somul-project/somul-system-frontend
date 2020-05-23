import { FetchResult } from 'apollo-link';
import apolloClient from 'frameworks/web/apollo';
import { GET_CURRENT_SESSION_QUERY } from 'service/graphql/rest/GetSessionQuery';
import { LOGOUT_QUERY } from 'service/graphql/rest/SignOutQuery';

export default class CurrentSessionRequest {
  static getSession(): Promise<FetchResult> {
    return apolloClient.query({ query: GET_CURRENT_SESSION_QUERY, fetchPolicy: 'no-cache' });
  }

  static logout(): Promise<FetchResult> {
    return apolloClient.query({ query: LOGOUT_QUERY, fetchPolicy: 'no-cache' });
  }
}
