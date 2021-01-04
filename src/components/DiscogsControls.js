import React from 'react';
import { connect } from 'react-redux';
import { syncCollection } from '../actions';

const DiscogsControls = (props) => {
  const { username, syncCollection } = props;

  const onSyncClick = (e) => {
    e.preventDefault();
    syncCollection();
  };

  if (!username) {
    return null;
  }

  return (
    <div>
      <a href="#" onClick={onSyncClick}>Sync</a>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { username: user.discogsUsername };
};

export default connect(mapStateToProps, { syncCollection })(DiscogsControls);
