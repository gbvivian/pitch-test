import React from 'react';
import pianoA from '../src/assets/sounds/piano-a_A_major.wav';
import './App.css';

import { Howl } from 'howler';

function App() {
  var noteA = new Howl({
    src: [pianoA],
  });

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
