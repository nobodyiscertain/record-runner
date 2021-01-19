import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import CurrentRecord from '../selectors/currentRecord';

const NowPlaying = ({ currentRecord }) => {

  if (!currentRecord) {
    return <p>Please configure Discogs in your settings.</p>;
  };

  const renderTracklist = () => {
    if (!currentRecord.trackList) return 'N/A';

    return currentRecord.trackList.map((track, i) => {
      return (
        <div className="uk-grid-small" uk-grid="">
          <div className="uk-width-expand" uk-leader="">
            {i+1 + '. ' + track.name}
          </div>
          <div>{track.duration}</div>
        </div>
      );
    });
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

  return (
    <div className="uk-child-width-1-2@s" uk-grid="">
      <div>
        <img data-src={currentRecord.coverUrl} width="100%" alt="" uk-img="" />
      </div>
      <div>
        <article className="uk-article uk-margin-large-bottom">
          <h1 className="uk-article-title">
            <a href="" className="uk-link-heading" target="_blank">
              {currentRecord.title}
            </a>
          </h1>
          <dl className="uk-article-meta uk-description-list uk-column-1-2">
            <dt>Artist</dt>
            <dd>
              {currentRecord.artist}
            </dd>
            <dt>Length</dt>
            <dd>{currentRecord.duration}</dd>
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
    currentRecord: new CurrentRecord(state)
  };
};

export default connect(mapStateToProps)(NowPlaying);
