import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NowPlaying from './NowPlaying';

class NowPlayingMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latest: []
    }
  }

  fetchNowPlayingMovies () {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=65863bf5229c0d57bcf2f3a29183ac0e',
    })
    .then(response =>{
      this.setState({ latest: response.data.results  })
    })
  }

  componentDidMount () {
    this.fetchNowPlayingMovies();
  }

  render () {
    return (
      <div class='container'>
        <div class='row'>
            { this.state.latest.map(function(movie){
              return <NowPlaying data={movie}/>
            })}
        </div>
      </div>
    )
  }
}

export default NowPlayingMovies

