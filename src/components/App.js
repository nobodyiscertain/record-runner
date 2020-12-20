import React from 'react';
import RecordPicker from './RecordPicker';
import Collection from './Collection';
import ListeningHistory from './ListeningHistory';
import NowPlaying from './NowPlaying';
import Settings from './Settings';

const App = () => {
  return (
    <div>
      <Collection />
      <RecordPicker />
      <ListeningHistory />
      <NowPlaying />
      <Settings />
    </div>
  );
}

export default App;
