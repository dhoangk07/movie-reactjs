import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import NowPlayingMovies from './NowPlayingMovies';
import GenreMovies from './GenreMovies';
import SpecificGenres from './SpecificGenres';

const App = (props) => (
  <Router>
    <div>
      <Navbar/>
      <Route exact path='/' component={NowPlayingMovies}/>
      <Route path='/genres' component={GenreMovies}/>
      <Route
        path="/genres/:id"
        render={props => <SpecificGenres {...props} key={props.match.params.id} />}
      />
    </div>
  </Router>
)
export default App
