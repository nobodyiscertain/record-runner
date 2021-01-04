import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import DiscogsControls from './DiscogsControls';

const Settings = (props) => {
  const [discogsUsername, setDiscogsUsername] = useState(props.user.discogsUsername);
  const [lastfmUsername, setLastfmUsername] = useState(props.user.lastfmUsername);

  const submitForm = (e) => {
    e.preventDefault();
    props.updateUser({ discogsUsername, lastfmUsername });
  };

  return (
    <div>
      <h1>Settings</h1>
      <form className="uk-form-horizontal uk-margin-large" onSubmit={submitForm}>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="discogs-username">Discogs</label>
          <div className="uk-form-controls">
            <input
              className="uk-input uk-input-success"
              id="discogs-username"
              type="text"
              placeholder="Discogs Username"
              value={discogsUsername}
              onChange={(e) => setDiscogsUsername(e.target.value)}
            />
            <DiscogsControls />
          </div>
        </div>
        <button
          className="uk-button uk-button-primary uk-align-right"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps, { updateUser })(Settings);
