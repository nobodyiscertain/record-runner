import React from 'react';

const Navbar = () => {
  return (
    <nav className="uk-navbar-container uk-margin-medium-bottom" uk-navbar="">
      <div className="uk-navbar-left">
        <a href="#" className="uk-navbar-item uk-logo">Record Runner</a>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <a href="#">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: album"></span>
              Pick
            </a>
          </li>
          <li>
            <a href="#">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: list"></span>
              History
            </a>
          </li>
          <li>
            <a href="#">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: settings"></span>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
