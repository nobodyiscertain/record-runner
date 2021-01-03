import React from 'react';

const NowPlaying = () => {
  return (
    <div className="uk-child-width-1-2" uk-grid="">
      <div>
        <img data-src="https://placehold.it/500" width="100%" alt="" uk-img="" />
      </div>
      <div>
        <article className="uk-article uk-margin-large-bottom">
          <h1 className="uk-article-title">
            <a href="#" className="uk-link-heading">
              Weezer (Blue Album)
            </a>
          </h1>
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
          <p className="uk-text-lead">Weezer (commonly known as the Blue Album)
            is the eponymous debut studio album by American rock band Weezer,
            released on May 10, 1994 by DGC Records.</p>

          <ul uk-accordion="">
            <li>
              <a className="uk-accordion-title" href="#">Info</a>
              <div className="uk-accordion-content">
                <p>Weezer (commonly known as the Blue Album) is the eponymous debut studio
                  album by American rock band Weezer, released on May 10, 1994 by DGC
                  Records. The album came two years after the band's founding, after
                  they initially struggled as an alternative to grunge music, which
                  was prevalent in Los Angeles during the early 1990s. It was almost
                  entirely arranged and composed by frontman Rivers Cuomo, who also
                  anticipated to lead the band in self-producing the album. However, at the
                  behest of DGC, the band was required to include a producer, and
                  collectively opted for Cars frontman Ric Ocasek. Most of the recording
                  was conducted at Electric Lady Studios in New York City between August
                  and September 1993, a period that coincided with founding guitarist Jason
                  Cropper being fired and replaced by Brian Bell.</p>
                <p>Under Ocasek's direction, the band opted for a brighter sound, while bassist
                  Matt Sharp collaborated with Cuomo to ensure that the album
                  contained an overriding sonic concept of treating the guitars and
                  bass as isolated ten-string instruments, thus maximizing its
                  potential when united. Lyrically, Weezer focuses on outsiderdom and
                  social awkwardness, while also touching on melancholic themes of love,
                  romance, and familial issues.</p>
                <p>Weezer was supported by the singles "Undone – The Sweater Song", "Buddy
                  Holly", and "Say It Ain't So", which, alongside their respective music
                  videos, brought Weezer mainstream success. The album itself peaked at number
                  sixteen on the US Billboard 200, and was certified triple platinum by 1995.
                  It is also the band's best-selling album, having sold at least 3.3 million
                  copies in the U.S. and over fifteen million copies worldwide by 2009.</p>
              </div>
            </li>
            <li>
              <a href="#" className="uk-accordion-title">Tracklist</a>
              <div className="uk-accordion-content">
                <div className="uk-grid-small" uk-grid="">
                  <div className="uk-width-expand" uk-leader="">1. My Name Is Jonas</div>
                  <div>3:23</div>
                </div>
                <div className="uk-grid-small" uk-grid="">
                  <div className="uk-width-expand" uk-leader="">2. No One Else</div>
                  <div>3:14</div>
                </div>
                <div className="uk-grid-small" uk-grid="">
                  <div className="uk-width-expand" uk-leader="">3. The World Has Turned and Left Me Here</div>
                  <div>4:26</div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="uk-accordion-title">External Links</a>
              <div className="uk-accordion-content" uk-margin="">
                <a className="uk-button uk-button-text">Discogs</a>
                <a className="uk-button uk-button-text">LastFM</a>
                <a className="uk-button uk-button-text">AllMusic</a>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default NowPlaying;
