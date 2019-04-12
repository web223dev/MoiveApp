import React, { Component } from 'react';
import AppWrapper from './AppWrapper';
import axios from 'axios';
import FormResults from './FormResults';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      results: [] 
    }    
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  handleKeyUp(){
    const val = this.state.input;
    const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`)
    .then(response => {
      if (response.status !== 200) {
        console.log('Error: ' + response.status);
        return;
      }
      const results = response.data.results;
      this.setState({ results });
    })
    .catch(error => {
      console.log('Fetch error :(', error);
    })
  }   

  render() {
    const { handleChange, handleKeyUp } = this;
    const { results } = this.state;
    return (
      <AppWrapper>        
        <input type="text" id="searchInput" className="searchBar" onChange={handleChange} onKeyUp={handleKeyUp} placeholder="Search For Movie" required />
        <FormResults results={results} />
      </AppWrapper>
    );
  }
}

export default Form;