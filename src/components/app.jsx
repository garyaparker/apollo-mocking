import React from 'react';
import { graphql } from 'react-apollo';
import FilmsQuery from '../graphql/queries/sw-films.graphql';

const mapFilms = (film) => <li key={film.id}>{film.title}</li>;

const AppComponent = ({ data: { allFilms } }) => (
  allFilms ?
    <ul>
      {allFilms.map(mapFilms)}
    </ul> :
    <div>Loading...</div>
);

export default graphql(FilmsQuery)(AppComponent);
