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
          onend: () => {
            if (this.currentSongIndex + 1 >= this.songs.length) {
              this.currentSong.stop();
            } else {
              this.currentSongIndex++;
              this.play();
            }
          },
        })
      );
    }
  }

  get currentSong() {
    return this.songs[this.currentSongIndex];
  }

  play() {
    this.setCurrentlyPlaying = this.currentSongIndex;
    this.currentSong.play();
  }

  pause() {
    this.currentSong.pause();
  }

  next() {
    this.currentSong.stop();

    if (this.currentSongIndex + 1 >= this.songs.length) {
      this.currentSongIndex = 0;
      this.play();
    } else {
      this.currentSongIndex++;
      this.play();
    }
  }
}
