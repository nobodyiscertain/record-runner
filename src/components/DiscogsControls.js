import React from 'react';
import { connect } from 'react-redux';

const DiscogsControls = (props) => {
  const { username } = props;

  if (!username) {
    return null;
  }

  return (
    <div>
      Let's fetch that collection {username}!
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { username: user.discogsUsername };
};

export default connect(mapStateToProps, {})(DiscogsControls);
