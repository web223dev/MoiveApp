import React, { Component } from 'react';
import { Link } from '@reach/router';

class FormResults extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.results !== nextProps.results;
  }
  render() {
    const { results, className } = this.props;
    // const imgLink = 'https://image.tmdb.org/t/p/w200';
    return (
      <ul className={`nav flex-column ${className}`}>
        {
          results.map((result) =>
            <li className="nav-item" key={result.id}>
              <Link to={`/movie/${result.id}`}>
                {/* <img className="imgResponsive" src={result.poster_path == null ? 'http://via.placeholder.com/200x300' : `${imgLink}${result.poster_path}`} alt={`${result.title} poster`} key={result.id} /> */}
                <img className="imgResponsive" src='http://via.placeholder.com/200x300' alt={`${result.title} poster`} key={result.id} />
                <div className="movieDetail">
                  <p>{result.title}</p>
                  <p>{result.release_date}</p>
                </div>
              </Link>
            </li>
          )
        }
      </ul>
    );
  }
}

export default FormResults;