import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="uk-navbar-container uk-margin-medium-bottom" uk-navbar="">
      <div className="uk-navbar-left">
        <Link to="/" className="uk-navbar-item uk-logo">
          Record Runner
        </Link>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: album"></span>
              Pick
            </Link>
          </li>
          <li>
            <Link to="/history">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: list"></span>
              History
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: settings"></span>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
