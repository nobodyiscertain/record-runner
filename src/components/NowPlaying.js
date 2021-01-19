import React from 'react';
import { connect } from 'react-redux';
import Album from '../models/Album';

const NowPlaying = ({ currentRecord }) => {

  if (!currentRecord.present) {
    return <p>Please configure Discogs in your settings.</p>;
  };

  const renderSummary = () => {
    if (!currentRecord.summary) return null;
    return <p className="uk-text-lead" dangerouslySetInnerHTML={{ __html: currentRecord.summary }}></p>;
  }

  const renderInfo = () => {
    if (!currentRecord.description) return null;

    return (
      <li>
        <a className="uk-accordion-title" href="#">Info</a>
        <div className="uk-accordion-content" dangerouslySetInnerHTML={{ __html: currentRecord.description }}>
        </div>
      </li>
    );
  };

  const renderLinks = () => {
    if (currentRecord.links.length === 0) return null;

    return (
      <li>
        <a className="uk-accordion-title" href="#">Links</a>
        <div className="uk-accordion-content">
          <ul className="uk-list">
            {currentRecord.links.map(link => {
              return (
                <li key={link.url}>
                  <a href={link.url} target="_blank">{link.title}</a><br />
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    );
  }

  const renderTracklist = () => {
    if (!currentRecord.trackList) return 'N/A';

    return currentRecord.trackList.map((track, i) => {
      return (
        <div className="uk-grid-small" uk-grid="" key={track.name}>
          <div className="uk-width-expand" uk-leader="">
            {++i + '. ' + track.name}
          </div>
          <div>{track.duration}</div>
        </div>
      );
    });
  };

  const renderTracks = () => {
    if (!currentRecord.tracks) return null;

    return (
      <li>
        <a href="#" className="uk-accordion-title">Tracklist</a>
        <div className="uk-accordion-content">
          {renderTracklist()}
        </div>
      </li>
    );
  }

  return (
    <div className="uk-child-width-1-2@s" uk-grid="">
      <div>
        <img data-src={currentRecord.coverUrl} width="100%" alt="" uk-img="" />
      </div>
      <div>
        <article className="uk-article uk-margin-large-bottom">
          <h1 className="uk-article-title">
            {currentRecord.title}
          </h1>
          <dl className="uk-article-meta uk-description-list uk-column-1-3">
            <dt>Artist</dt>
            <dd>{currentRecord.artist}</dd>
            <dt>Release Date</dt>
            <dd>{currentRecord.releaseDate}</dd>
            <dt>Length</dt>
            <dd>{currentRecord.trackCount} tracks, {currentRecord.duration}</dd>
          </dl>

          {renderSummary()}

          <ul uk-accordion="">
            {renderInfo()}
            {renderTracks()}
            {renderLinks()}
          </ul>
        </article>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentRecord: new Album(state.current)
  };
};

export default connect(mapStateToProps)(NowPlaying);
