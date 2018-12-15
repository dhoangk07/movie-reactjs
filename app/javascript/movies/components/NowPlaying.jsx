import React from 'react';

class NowPlaying extends React.Component {
  render () {
    return(
      <div class='col-4 px-0'>
        <div class="card-group">
          <div class="card image-movie mx-0 my-0">
            <img className="card-img-top image" src={`https://image.tmdb.org/t/p/w500${this.props.data.backdrop_path}`} alt={`${this.props.data.id}`}/>
              <div class="middle">
                <div class="text">{this.props.data.original_title}</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NowPlaying
