import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path='/' />
        <Movie path='/movie/:id' />
      </Router>
    );
  }
}

export default App;