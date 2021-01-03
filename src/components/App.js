import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import RecordPicker from './RecordPicker';
import Navbar from './Navbar';
import ListeningHistory from './ListeningHistory';
import NowPlaying from './NowPlaying';
import Settings from './Settings';

const renderUser = (user) => {
  if (!user.discogsUsername) {
    return null;
  };

  return <h2>Hi {user.discogsUsername}!</h2>;
};

const App = (props) => {
  return (
    <Router>
      <Navbar />

      <div className="uk-container">
        <Switch>
          <Route path="/" exact>
            <NowPlaying />
          </Route>
          <Route path="/history">
            <ListeningHistory />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {})(App);
