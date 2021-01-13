import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

const ListeningHistory = ({ listeningHistory }) => {
  const renderList = () => {
    return _.reverse(listeningHistory.slice()).map((record, i) => {
      return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="" key={`${record.id}-${i}`}>
          <div className="uk-card-media-left uk-cover-container">
            <img src={!record.lastfm.error && record.lastfm.album.image.find(r => r.size === "mega")['#text']} alt="" uk-cover="" />
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{record.basic_information.title}</h3>
              <dl className="uk-article-meta uk-description-list">
                <dt>Artist</dt>
                <dd>
                  {record.basic_information.artists.map(artist => artist.name).join(', ')}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>History</h1>
      {renderList()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    listeningHistory: state.listeningHistory
  };
};


export default connect(mapStateToProps)(ListeningHistory);
