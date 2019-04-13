import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AppWrapper from './AppWrapper';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }
        const movies = response.data.results;
        this.setState({ movies });
      })
      .catch(error => {
        console.log('Fetch error :(', error);
      })
  }

  render() {
    const { movies } = this.state;
    return (
      <section className="module">
        <AppWrapper>
          <h2>New Movies</h2>
          <div className="row newMovie">
            {
              movies.map((movie) =>
                // <img className="imgResponsive" src={movie.poster_path ===null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movies.title} poster`} key={movie.id} />
                <div className="col-md-3 col-sm-6" key={movie.id}>
                  <Link to={`/movie/${movie.id}`} className="movieLink">
                    <img className="imgResponsive" src='http://via.placeholder.com/300x450' alt={`${movie.title} poster`} />
                    <div className="movieInfo">
                      <p>{movie.title}</p>
                      <p>{movie.release_date}</p>
                    </div>
                  </Link>
                </div>
              )
            }
          </div>
        </AppWrapper>
      </section>
    );
  }
}

export default NewMovie;