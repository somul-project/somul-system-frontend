import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { RestLink } from 'apollo-link-rest';
import { ApolloLink } from 'apollo-link';
import { SERVER_URL } from 'utils/constants';

const cache = new InMemoryCache();
const graphqlLink = createHttpLink({ uri: `${SERVER_URL}/graphql` });
const restLink = new RestLink({
  uri: `${SERVER_URL}/`,
  headers: { 'Content-Type': 'application/json' },
  // @ts-ignore
  responseTransformer: async (response) => {
    // @ts-ignore
    // eslint-disable-next-line no-return-await
    return await response.json();
  },
  credentials: 'include',
});

const apolloClient = new ApolloClient({
  // @ts-ignore ApolloClient Typescript 정의 파일에 문제가 있어서 무조건 오류가 납니다..
  link: ApolloLink.from([restLink, graphqlLink]),
  cache,
});

export const initStorage = async () => {
  await persistCache({
    cache,
    // @ts-ignore
    storage: window.localStorage,
    key: 'somul-api-cache',
  });
};

export default apolloClient;
