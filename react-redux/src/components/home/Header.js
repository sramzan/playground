import React from 'react';
import {Link} from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  //className="nav-link"
  <header>
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <div className="collapse navbar-collapse">
          <ul className="">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/volumes">Volumes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/manage-volumes">Manage Volumes</Link></li>
          </ul>
      </div>
    </nav>
  </header>
);

export default Header;
