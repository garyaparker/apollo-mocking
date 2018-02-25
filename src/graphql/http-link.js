import { HttpLink } from 'apollo-link-http';

export default new HttpLink({
  uri: 'https://swapi.graph.cool'
});
