import React, { Component } from 'react';
import AppWrapper from './AppWrapper';
import Header from './Header';
import Form from './Form';
import NewMovie from './NewMovie';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <AppWrapper className="container">
        <Header />
        <Form />
        <NewMovie />
      </AppWrapper>
    );
  }
}

export default App;