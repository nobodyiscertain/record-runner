import _ from 'lodash';

class CurrentRecord {
  constructor(state) {
    this.currentRecord = state.current;
  }

  get artist() {
    return this._audiodb.strArtistStripped;
  }

  get coverUrl() {
    return this._audiodb.strAlbumThumb;
  }

  get description() {
    return 'get description';
  }

  get duration() {
    return '45:15';
  }

  get summary() {
    return 'find me a summary';
  }

  get title() {
    return this._discogs.title;
  }

  get trackList() {
    return [
      {
        name: 'Track 1',
        duration: "4:01"
      },
      {
        name: 'Track 2',
        duration: "4:01"
      }
    ];
  }

  get _audiodb() {
    return _.get(this.currentRecord, 'audiodb.album.0');
  }

  get _discogs() {
    return this.currentRecord.basic_information;
  }

  get _lastfm() {
    return this.currentRecord.lastfm;
  }

  _convertSecondsToDuration(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = _.padStart(totalSeconds - minutes * 60, 2, '0');

    return `${minutes}:${seconds}`;
  }
}

export default CurrentRecord;
