import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
  return (
    <nav className="uk-navbar-container uk-margin-medium-bottom" uk-navbar="">
      <div className="uk-navbar-left">
        <Link to="/" className="uk-navbar-item uk-logo">
          Record Runner
        </Link>
      </div>

      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button className="uk-button uk-button-primary" disabled={props.needsDiscogsSetup}>Pick</button>
        </div>
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: play-circle"></span>
              Now Playing
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

const mapStateToProps = (state) => {
  const { collection } = state;

  return {
    needsDiscogsSetup: collection.length === 0
  }
};

export default connect(mapStateToProps)(Navbar);
