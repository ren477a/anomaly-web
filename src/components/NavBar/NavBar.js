import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="dashboard.html">
            <strong>Surveillance Hub</strong>
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/login">
            Dave Martinez
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;