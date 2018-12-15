import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MoviesNav = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">TheMovieDB</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><Link to='/'>Latest</Link> <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
)
export default MoviesNav