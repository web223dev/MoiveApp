import React, { Component } from 'react';

class FormResults extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.results === nextProps.results) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { results } = this.props; console.log(results);
    return (
      <ul>
        {
          results.map((result) =>
            <li key={result.id}>{result.title}</li>
          )
        }
      </ul>
    );
  }
}

export default FormResults;