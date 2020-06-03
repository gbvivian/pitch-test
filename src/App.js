import React from 'react';
import pianoA from '../src/assets/sounds/piano-a_A_major.wav';
import pianoB from '../src/assets/sounds/piano-a_A_major.wav';
import pianoC from '../src/assets/sounds/piano-a_A_major.wav';
import pianoD from '../src/assets/sounds/piano-a_A_major.wav';

import './App.css';

import { Howl } from 'howler';

function createHowl(song) {
  return new Howl({
    src: [song],
  });
}

function App() {
  const noteA = createHowl(pianoA);

  return (
    <div className="App">
      <button
        onClick={() => {
          noteA.play();
        }}
      >
        A
      </button>
    </div>
  );
}

export default App;
