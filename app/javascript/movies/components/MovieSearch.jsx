import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DisplaySearch from './DisplaySearch';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: []
    }
  }

  fetchMovieSeach(query) {
    axios({
      method: 'get',
      url: `http://api.themoviedb.org/3/search/movie?api_key=65863bf5229c0d57bcf2f3a29183ac0e&query=${query}`,
    })
    .then(response =>{
      this.setState({ results: response.data.results})
    })
  }

  updateSearch(event) {
    this.fetchMovieSeach(event.target.value);
  }

  render () {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" onChange={this.updateSearch.bind(this)} type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
        </form>
        <div className='container pt-3'>
          <div className='row'>
            { this.state.results.map(function(movie){
              return <div><DisplaySearch data={movie}/></div>
            })}
              
          </div>
        </div>
      </div>
    )
  }
}

export default MovieSearch