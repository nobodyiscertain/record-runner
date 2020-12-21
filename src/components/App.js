import React from 'react';
import { connect } from 'react-redux';

import RecordPicker from './RecordPicker';
import Collection from './Collection';
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
    <div>
      {renderUser(props.user)}
      <Collection />
      <RecordPicker />
      <ListeningHistory />
      <NowPlaying />
      <Settings />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {})(App);
