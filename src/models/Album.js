import _ from 'lodash';

class Album {
  constructor(data) {
    this.data = data;
  }

  get artist() {
    return _.get(this._audiodb, 'strArtistStripped') ||
      _.get(this._lastfm, 'artist') ||
      this._discogs.artists.map(a => a.name).join(', ');
  }

  get coverUrl() {
    if (this._audiodb) {
      return this._audiodb.strAlbumThumb;
    }

    if (this._lastfm) {
      return this._lastfm.image.find(i => i.size === 'mega')['#text'];
    }

    return 'https://placehold.it/500'
  }

  get description() {
    return _.get(this._lastfm, 'wiki.content') ||
      _.get(this._audiodb, 'strDescriptionEN');
  }

  get duration() {
    if (!this.tracks) return 'N/A';

    const durationSeconds = this.tracks.reduce((total, track) => {
      return total + parseInt(track.duration);
    }, 0);

    return this._convertSecondsToDuration(durationSeconds);
  }

  get links() {
    let links = [];

    if (_.get(this._lastfm, 'url')) {
      links.push({
        title: 'LastFM',
        url: this._lastfm.url
      })
    }

    if (_.get(this._audiodb, 'strWikipediaID')) {
      links.push({
        title: 'Wikipedia',
        url: `https://en.wikipedia.org/wiki/${this._audiodb.strWikipediaID}`
      })
    }

    if (_.get(this._audiodb, 'strDiscogsID')) {
      links.push({
        title: 'Discogs',
        url: `https://www.discogs.com/master/${this._audiodb.strDiscogsID}`
      })
    }

    if (_.get(this._audiodb, 'strAllMusicID')) {
      links.push({
        title: 'All Music',
        url: `https://www.allmusic.com/album/${this._audiodb.strAllMusicID}`
      })
    }

    return links;
  }

  get present() {
    if (this.data) {
      return true;
    } else {
      return false;
    }
  }

  get releaseDate() {
    return _.get(this._audiodb, 'intYearReleased') ||
      _.get(this._discogs, 'year');
  }

  get summary() {
    return _.get(this._lastfm, 'wiki.summary');
  }

  get title() {
    return this._discogs.title;
  }

  get trackCount() {
    if (!this.tracks) return;
    return this.tracks.length;
  }

  get tracks() {
    return _.get(this._lastfm, 'tracks.track');
  }

  get trackList() {
    if (!this.tracks) return;

    return this.tracks.map(track => {
      return {
        name: track.name,
        duration: this._convertSecondsToDuration(track.duration)
      }
    });
  }

  get _audiodb() {
    return _.get(this.data, 'audiodb.album.0');
  }

  get _discogs() {
    return this.data.basic_information;
  }

  get _lastfm() {
    if (this.data.lastfm.error) return null;
    return this.data.lastfm.album;
  }

  _convertSecondsToDuration(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = _.padStart(totalSeconds - minutes * 60, 2, '0');

    return `${minutes}:${seconds}`;
  }
}

export default Album;
