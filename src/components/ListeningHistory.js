import React from 'react';

const ListeningHistory = () => {
  return (
    <div>
      <h1>History</h1>
      <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="">
        <div className="uk-card-media-left uk-cover-container">
          <img src="https://placehold.it/500" alt="" uk-cover="" />
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">Weezer (Blue Album)</h3>
          <dl className="uk-article-meta uk-description-list uk-column-1-3">
            <dt>Artist</dt>
            <dd>
              <a href="#">
                Weezer
              </a>
            </dd>
            <dt>Release Date</dt>
            <dd>10 May 1994</dd>
            <dt>Length</dt>
            <dd>10 tracks, 41:25</dd>
          </dl>
          </div>
        </div>
      </div>
      <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="">
        <div className="uk-card-media-left uk-cover-container">
          <img src="https://placehold.it/500" alt="" uk-cover="" />
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">Weezer (Blue Album)</h3>
            <p>Weezer (commonly known as the Blue Album)
              is the eponymous debut studio album by American rock band Weezer,
              released on May 10, 1994 by DGC Records.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeningHistory;
