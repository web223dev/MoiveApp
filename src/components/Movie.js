import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import MovieDetail from './MovieDetail';

class Movie extends Component {
  render() {
    const { id } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Form />
        <MovieDetail id={id} />
      </React.Fragment>
    );
  }
}

export default Movie;