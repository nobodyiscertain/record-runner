import React, { useState } from 'react';
import axios from 'axios';
import CurrentlyPlaying from './CurrentlyPlaying';
import Controls from './Controls';
import AccountSettings from './AccountSettings';

const App = () => {
  const [username, setUsername] = useState('');
  const [collection, setCollection] = useState([]);
  const [currentRecord, setCurrentRecord] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://api.discogs.com/users/${username}/collection/folders/0/releases`, {
      params: {
        per_page: 100,
      }
    })
      .then(({ data }) => {
        setCollection(data.releases);

        return { data };
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const onFindRecordClick = (e) => {
    const newRecord = collection[Math.floor(Math.random() * collection.length)]
    setCurrentRecord(newRecord);
  };

  return (
    <div>
      <p>Collection: {collection.length} Records</p>
      {currentRecord && (<CurrentlyPlaying currentRecord={currentRecord} />)}
      <Controls
        onFindRecordClick={onFindRecordClick}
      />
      <AccountSettings
        username={username}
        onUpdate={setUsername}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
}

export default App;
