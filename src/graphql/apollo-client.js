import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import link from './http-link';

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
