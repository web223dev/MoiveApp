import React, { Component } from 'react';
import axios from 'axios';
import AppWrapper from './AppWrapper';
import Cast from './Cast';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      movieCast: []
    }
  }

  componentDidMount() {
    const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    const { id } = this.props;
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }
        const movie = response.data;
        const movieCast = movie.credits.cast; 
        this.setState({ 
          movie,  
          movieCast
        })
      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      })
  }
  render() {    
    const { movie, movieCast } = this.state;
    const posterImg = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
    return (
      <AppWrapper className="moviePage module">
        <div className="row">
          <div className="col-md-4">
            <img src={movie.poster_path === null ? 'http://via.placeholder.com/300x450' : posterImg} alt={movie.title} />
            {/* <img src='http://via.placeholder.com/300x450' alt={movie.title} /> */}
          </div>
          <div className="col-md-8">
            <div className="movieDetail">
              <h2>{movie.title}</h2>
              <ul className="nav flex-column">
                <li className="nav-item">{movie.overview}</li>
                <li>Rating: {movie.vote_average}</li>
                <li>Vote Count: {movie.vote_count}</li>
                <li>Release Date: {movie.release_date}</li>
                <li>Genres: </li>
              </ul>
            </div>
          </div>
        </div>
        <Cast casts={movieCast}/>
      </AppWrapper>
    );
  }
}

export default MovieDetail;