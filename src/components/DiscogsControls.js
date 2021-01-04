import React from 'react';
import { connect } from 'react-redux';
import { getUserCollection } from '../apis/discogs';

const DiscogsControls = (props) => {
  const { username } = props;

  const syncCollection = (e) => {
    e.preventDefault();

    getUserCollection(username)
      .then(res => console.log(res))
      .catch(res => console.log(res))
  };

  if (!username) {
    return null;
  }

  return (
    <div>
      <a href="#" onClick={syncCollection}>Sync</a>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { username: user.discogsUsername };
};

export default connect(mapStateToProps, {})(DiscogsControls);
