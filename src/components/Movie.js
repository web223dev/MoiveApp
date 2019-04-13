import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import MovieDetail from './MovieDetail';

class Movie extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <MovieDetail />
      </React.Fragment>
    );
  }
}

export default Movie;