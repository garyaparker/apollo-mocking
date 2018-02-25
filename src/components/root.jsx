import React from 'react';
import { ApolloProvider } from 'react-apollo';
import AppComponent from './app';
import client from '../graphql/apollo-client';

const RootComponent = () => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

export default RootComponent;
