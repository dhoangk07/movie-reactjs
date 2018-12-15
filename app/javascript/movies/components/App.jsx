import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import NowPlayingMovies from './NowPlayingMovies';

const App = (props) => (
  <Router>
    <div>
      <Navbar/>
      <Route exact path='/' component={NowPlayingMovies}/>
    </div>
  </Router>
)
export default App
