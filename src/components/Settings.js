import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';

const Settings = (props) => {
  const [discogsUsername, setDiscogsUsername] = useState(props.user.discogsUsername);
  const [lastfmUsername, setLastfmUsername] = useState(props.user.lastfmUsername);

  const submitForm = (e) => {
    e.preventDefault();
    props.updateUser({ discogsUsername, lastfmUsername });
  };

  return (
    <div>
      <h3>Settings</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="discogs">Discogs Username</label><br />
          <input
            type="text"
            value={discogsUsername}
            onChange={(e) => setDiscogsUsername(e.target.value)}
            id="discogs"
          />
        </div>
        <div>
          <label htmlFor="lastfm">Last.FM Username</label><br />
          <input
            type="text"
            value={lastfmUsername}
            onChange={(e) => setLastfmUsername(e.target.value)}
            id="lastfm"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps, { updateUser })(Settings);
