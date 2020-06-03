import Playlist from '../src/Playlist.js';

import pianoA from '../src/assets/sounds/piano-a_A_major.wav';
import pianoB from '../src/assets/sounds/piano-b_B_major.wav';
import pianoC from '../src/assets/sounds/piano-c_C_major.wav';
import pianoD from '../src/assets/sounds/piano-d_D_major.wav';

const songs = [pianoA, pianoB, pianoC, pianoD];
export const testSequence = new Playlist(songs);
