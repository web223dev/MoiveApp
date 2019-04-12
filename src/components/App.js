import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import NewMovie from './NewMovie';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <NewMovie />
      </React.Fragment>
    );
  }
}

export default App;