import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

const convertSecondsToDuration = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = _.padStart(totalSeconds - minutes * 60, 2, '0');

  return `${minutes}:${seconds}`;
}

const NowPlaying = ({ currentRecord }) => {

  if (!currentRecord) {
    return <p>Please configure Discogs in your settings.</p>;
  };

  const { basic_information: record } = currentRecord;
  const artists = record.artists.map(artist => artist.name).join(', ');
  const { lastfm } = currentRecord;
  const albumLength = () => {
    if (!lastfm.album) return 'N/A';
    const { album } = lastfm;
    const trackCount = album.tracks.track.length;
    const tracksLength = _.sum(album.tracks.track.map(t => parseInt(t.duration)));

    return `${trackCount} tracks, ${convertSecondsToDuration(tracksLength)}`;
  };

  const coverUrl = () => {
    if (!lastfm.album) return 'https://placehold.it/500';
    return _.find(lastfm.album.image, i => i.size === 'mega')['#text'];
  };

  const renderTracklist = () => {
    if (!lastfm.album) return 'N/A';

    return lastfm.album.tracks.track.map((track, i) => {
      return (
        <div className="uk-grid-small" uk-grid="">
          <div className="uk-width-expand" uk-leader="">
            {i+1 + '. ' + track.name}
          </div>
          <div>{convertSecondsToDuration(track.duration)}</div>
        </div>
      );
    });
  };

  const renderSummary = () => {
    const summary = _.get(lastfm, 'album.wiki.summary');
    if (!summary) return null;
    return <p className="uk-text-lead" dangerouslySetInnerHTML={{ __html: summary }}></p>;
  }

  const renderInfo = () => {
    const info = _.get(lastfm, 'album.wiki.content');
    if (!info) return null;

    return (
      <li>
        <a className="uk-accordion-title" href="#">Info</a>
        <div className="uk-accordion-content" dangerouslySetInnerHTML={{ __html: info }}>
        </div>
      </li>
    );
  };

  return (
    <div className="uk-child-width-1-2@s" uk-grid="">
      <div>
        <img data-src={coverUrl()} width="100%" alt="" uk-img="" />
      </div>
      <div>
        <article className="uk-article uk-margin-large-bottom">
          <h1 className="uk-article-title">
            <a href={lastfm.album && lastfm.album.url} className="uk-link-heading" target="_blank">
              {currentRecord.basic_information.title}
            </a>
          </h1>
          <dl className="uk-article-meta uk-description-list uk-column-1-2">
            <dt>Artist</dt>
            <dd>
              {artists}
            </dd>
            <dt>Length</dt>
            <dd>{albumLength()}</dd>
          </dl>

          {renderSummary()}

          <ul uk-accordion="">
            {renderInfo()}
            <li>
              <a href="#" className="uk-accordion-title">Tracklist</a>
              <div className="uk-accordion-content">
                {renderTracklist()}
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentRecord: state.current
  };
};

export default connect(mapStateToProps)(NowPlaying);
