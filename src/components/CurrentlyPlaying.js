import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentlyPlaying = ({ currentRecord }) => {
  const [albumCoverUrl, setAlbumCoverUrl] = useState(null);
  const [recordInfo, setRecordInfo] = useState(null);
  const { basic_information: record } = currentRecord;
  const artists = record.artists.map((artist) => artist.name).join(',');

  useEffect(() => {
    axios.get('http://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'album.getInfo',
        artist: record.artists[0].name,
        album: record.title,
        username: 'nobodyiscertain',
        format: 'json'
      }
    })
    .then(({ data }) => {
      console.log(data);
      const albumCoverURL = data.album.image.find(i => i.size === "mega")['#text'];
      setAlbumCoverUrl(albumCoverURL);
    })
    .catch(() => setRecordInfo(null));

    return () => setAlbumCoverUrl(null);
  }, [currentRecord]);

  return (
    <div className="currently-playing">
      {albumCoverUrl && <img src={albumCoverUrl} />}
      <h1>Currently Playing:</h1>
      <h2>{artists} - {record.title}</h2>
    </div>
  );
}

export default CurrentlyPlaying;
