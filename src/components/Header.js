import React, { Component } from 'react';
import { Link } from '@reach/router';
import Logo from 'assets/images/logo.png';
import AppWrapper from './AppWrapper';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <AppWrapper className="container main-menu">
          <div className="row">
            <div id="logo">
              <Link to="/"><img src={Logo} alt="logo" />WMovies</Link>
            </div>
          </div>
        </AppWrapper>
      </header>
    );
  }
}

export default Header;