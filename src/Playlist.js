import { Howl } from 'howler';

export default class Playlist {
  songs = [];
  currentSongIndex = 0;
  setCurrentlyPlaying;

  constructor(listOfSongs, setCurrentlyPlaying) {
    this.setCurrentlyPlaying = setCurrentlyPlaying;
    for (var song of listOfSongs) {
      this.songs.push(
        new Howl({
          html5: true,
          preload: false,
          src: [song],
        })
      );
    }
  }

  get currentSong() {
    return this.songs[this.currentSongIndex];
  }

  playAllSongs(cb) {
    this.currentSong.once('end', () => {
      if (this.currentSongIndex + 1 >= this.songs.length) {
        this.currentSong.stop();
      } else {
        this.currentSongIndex++;
        this.playAllSongs(cb);
      }
    });
    cb(this.currentSongIndex);
    this.play();
  }

  play() {
    this.setCurrentlyPlaying = this.currentSongIndex;
    this.currentSong.play();
    console.log('currently playing', this.currentSongIndex);
  }

  pause() {
    this.currentSong.pause();
  }

  next() {
    this.currentSong.stop();

    if (this.currentSongIndex + 1 >= this.songs.length) {
      this.currentSongIndex = 0;
      this.play();
      console.log('next clicked: currently playing', this.currentSongIndex);
    } else {
      this.currentSongIndex++;
      this.play();
    }
  }
}
