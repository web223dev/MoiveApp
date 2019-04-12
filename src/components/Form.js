import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <form>
        <input type="text" id="searchInput" className="searchBar" placeholder="Search For Movie" required />
      </form>
    );
  }
}

export default Form;