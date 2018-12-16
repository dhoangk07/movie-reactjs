import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">TheMovieDB</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link"><Link to='/'>Latest</Link> <span className="sr-only">(current)</span></a>
        </li>

        <li className="nav-item ">
          <a className="nav-link"><Link to='/genres'>Genres</Link></a>
        </li>

        <li className="nav-item ">
          <a className="nav-link" ><Link to='search'>Search</Link></a>
        </li>
      </ul>
    </div>
  </nav>
)
export default Navbar