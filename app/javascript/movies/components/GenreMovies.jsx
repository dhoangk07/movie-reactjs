import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GenreList from './GenreList';

class GenreMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    }
  }

  fetchGenreMovies () {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=65863bf5229c0d57bcf2f3a29183ac0e',
    })
    .then(response => {
      this.setState({genres: response.data.genres})
    })
  }

  componentDidMount () {
    this.fetchGenreMovies();
  }

  render() {
    return (
      <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
        {this.state.genres.map(function(genre){
          return <GenreList data={genre} />
        })}
      </div>
    )
  }
}

export default GenreMovies 
