import React, { useState } from 'react';

import { Howl } from 'howler';
import pianoA from '../src/assets/sounds/piano-a_A_major.wav';
import pianoB from '../src/assets/sounds/piano-b_B_major.wav';
import pianoC from '../src/assets/sounds/piano-c_C_major.wav';
import pianoD from '../src/assets/sounds/piano-d_D_major.wav';

import './App.css';

import { testSequence } from '../src/TestPlaylist.js';

function createHowl(song) {
  return new Howl({
    src: [song],
  });
}

const noteA = createHowl(pianoA);
const noteB = createHowl(pianoB);
const noteC = createHowl(pianoC);
const noteD = createHowl(pianoD);

function TestNote(testName, note) {
  return (
    <div className="App">
      <button
        onClick={() => {
          testSequence.play();
        }}
      >
        {testName}
      </button>
    </div>
  );
}
let testSounds = { A: noteA, B: noteB, C: noteC, D: noteD };

let test = ['B', 'C', 'D', 'A'];

var car = { type: 'Fiat', model: '500', color: 'white' };

function App() {
  const notes = ['A', 'B', 'C', 'D'];
  let [currentStage, setCurrentStage] = useState(0);
  let [isPlaying, setIsPlaying] = useState(false);
  let [currentChoice, setCurrentChoice] = useState(null);
  let [currentTestIndex, setCurrentTestIndex] = useState(0);
  let [userAnswers, setUserAnswer] = useState([]);

  return (
    <div className="App">
      {/* <button
        onClick={() => {
          testSounds[test[currentTestIndex]].play();
        }}
      >
        Play sequence
      </button> */}
      <button
        onClick={() => {
          setIsPlaying(true);
          testSequence.play();
          setIsPlaying(false);
        }}
      >
        Play test sequence
      </button>
      {/* uncomment this code back, and remove the code above */}
      {/* {currentStage === 0 && (
        <button
          onClick={() => {
            setIsPlaying(true);
            testSequence.play();
            setIsPlaying(false);
          }}
        >
          Test me
        </button>
      )} */}
      {/* disabled={ */}
      <br />
      {notes.map((note) => (
        <button
          onClick={() => {
            userAnswers.push(note);
            setUserAnswer(userAnswers);
            setCurrentTestIndex(currentTestIndex + 1);
            // fix this bug!!! ^
          }}
        >
          {note}
        </button>
      ))}
    </div>
  );
}

export default App;
