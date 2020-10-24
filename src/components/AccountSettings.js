import React from 'react';

const AccountSettings = ({ username, onUpdate, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label>Discogs Username</label><br />
      <input value={username} onChange={(e) => onUpdate(e.target.value)} />
      <input type="submit" value="Sync Records" />
    </form>
  );
}

export default AccountSettings;
