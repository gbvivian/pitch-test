import React from 'react';

import './App.css';

import { testSequence } from '../src/TestPlaylist.js';

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          testSequence.play();
        }}
      >
        Play sequence
      </button>
    </div>
  );
}

export default App;
