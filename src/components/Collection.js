import React, { useEffect } from 'react';

const Collection = (props) => {
  const { discogsUsername } = props;

  useEffect(() => {
    if (discogsUsername) {
      console.log('gonna fetch');
    }
  }, [discogsUsername])

  const renderCollection = () => {
    if (!discogsUsername) {
      return <p>Please configure your Discogs settings.</p>
    }

    return (
      <div>
        COLLECTION!
      </div>
    );
  };


  return (
    <div>
      <h2>Collection</h2>
      {renderCollection()}
    </div>
  );
}

export default Collection;
