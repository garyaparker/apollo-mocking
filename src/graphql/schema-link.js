import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema';
import films from './mock-data/sw-films';
import typeDefs from './schema.graphql';

const schema = makeExecutableSchema({ typeDefs });

const mocks = {
  Query: () => ({
    allFilms: () => films,
  }),
};

addMockFunctionsToSchema({
  mocks,
  schema,
});

export default new SchemaLink({ schema });
