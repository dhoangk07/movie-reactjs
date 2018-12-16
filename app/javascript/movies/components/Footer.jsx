import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Footer = () => (
  <footer class="footer bg-dark footer-fixed">
    <div class="container">
    <a href='https://www.themoviedb.org' target="_blank"><img src={'../images/icon-movie.png'} className='footer-image' /></a>
    <a href='https://github.com/dhoangk07/movie-reactjs.git' target="_blank"><img src={'../images/download.png'}  className='footer-image'/></a>
    </div>
  </footer>
)
export default Footer

