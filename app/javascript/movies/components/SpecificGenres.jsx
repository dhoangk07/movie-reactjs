import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DisplayGenre from './DisplayGenre'

class SpecificGenres extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      specificGenres: [],
      genreId: props.match.params.id
    }
  }

  fetchSpecificGenres() {
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=65863bf5229c0d57bcf2f3a29183ac0e&with_genres=${this.state.genreId}`,
    })
    .then(response =>{
      this.setState({specificGenres: response.data.results});
    })
  }

  componentDidMount() {
    this.fetchSpecificGenres();
  }

  render() {
    return (
      <div className='container pt-3'>
        <div className='row'>
          { this.state.specificGenres.map(function(specificGenre){
            return <div><DisplayGenre data={specificGenre} /></div>
          })}
        </div>
      </div>
    )
  }
}

export default SpecificGenres