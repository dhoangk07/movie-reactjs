import React from 'react';

class NowPlaying extends React.Component {
  render () {
    return(
      <div className='col-4 px-0'>
        <div className="card-group">
          <div className="card image-movie mx-0 my-0">
            <img className="card-img-top image" src={`https://image.tmdb.org/t/p/w500${this.props.data.backdrop_path}`} alt={`${this.props.data.id}`}/>
              <div className="middle">
                <div className="text">{this.props.data.original_title}</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NowPlaying
