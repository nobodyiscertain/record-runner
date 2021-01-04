import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import DiscogsControls from './DiscogsControls';
import { getUserProfile } from '../apis/discogs';

const Settings = (props) => {
  const [discogsUsername, setDiscogsUsername] = useState(props.user.discogsUsername);
  const [lastfmUsername, setLastfmUsername] = useState(props.user.lastfmUsername);
  const [formValid, setFormValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();

    props.updateUser({
      discogsUsername,
      lastfmUsername
    });
  };

  const onDiscogsInputBlur = () => {
    if (!discogsUsername) return;

    getUserProfile(discogsUsername)
      .then(() => {
        setFormValid(true);
        setErrorMsg(null);
      })
      .catch(() => {
        setFormValid(false);
        setErrorMsg('Discogs user not found. Please check your spelling and try again.');
      });
  };

  const inputClasses = () => {
    let classes = ['uk-input'];

    if (errorMsg) {
      classes.push('uk-form-danger');
    }

    if (formValid && discogsUsername) {
      classes.push('uk-form-success');
    }

    return classes.join(' ');
  };

  const renderErrorMsg = () => {
    if (!errorMsg) return;

    return <p>{errorMsg}</p>;
  };

  return (
    <div>
      <h1>Settings</h1>
      <form className="uk-form-horizontal uk-margin-large" onSubmit={submitForm}>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="discogs-username">Discogs</label>
          <div className="uk-form-controls">
            <input
              className={inputClasses()}
              id="discogs-username"
              type="text"
              placeholder="Discogs Username"
              value={discogsUsername}
              onChange={(e) => setDiscogsUsername(e.target.value)}
              onBlur={onDiscogsInputBlur}
            />
            {renderErrorMsg()}
            <DiscogsControls />
          </div>
        </div>
        <button
          className="uk-button uk-button-primary uk-align-right"
          disabled={!formValid}
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
