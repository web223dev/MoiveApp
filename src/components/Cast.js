import React, { Component } from 'react';
import AppWrapper from './AppWrapper';

class Cast extends Component {
  render() {
    const imgLink = 'https://image.tmdb.org/t/p/w300';    
    return (
      <AppWrapper className="module">
        <h3>Cast</h3>
        <div className="row">
          {this.props.casts.slice(0, 6).map((cast) =>
            <figure className="figure col-md-2" key={cast.id}>
              <img src={cast.profile_path === null ? 'http://via.placeholder.com/300x450' : imgLink+cast.profile_path} className="figure-img img-fluid rounded" alt={cast.character} />
              <figcaption className="figure-caption">{cast.name}</figcaption>
            </figure>
          )}
        </div>
      </AppWrapper>
    );
  }
}

export default Cast;