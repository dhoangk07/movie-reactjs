import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MoviesNav from './MoviesNav';

const App = (props) => (
  <Router>
    <MoviesNav/>
  </Router>
)
export default App