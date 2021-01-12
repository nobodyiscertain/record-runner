import React, { useState } from 'react';
import { connect } from 'react-redux';
import { syncCollection } from '../actions';

const DiscogsControls = (props) => {
  const { username, syncCollection } = props;
  const [working, setWorking] = useState(false);

  const onSyncClick = (e) => {
    e.preventDefault();
    if (working) return;

    setWorking(true);
    syncCollection().then(() => setWorking(false));
  };

  if (!username) {
    return null;
  }

  return (
    <div>
      {working ? 'Working - ' : ''}
      <a href="#" onClick={onSyncClick}>Sync</a>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { username: user.discogsUsername };
};

export default connect(mapStateToProps, { syncCollection })(DiscogsControls);
