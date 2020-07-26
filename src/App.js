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
  const testNotes = ['A', 'C', 'D', 'B'];
  let [currentStage, setCurrentStage] = useState(0);
  let [isPlaying, setIsPlaying] = useState(false);
  let [isTestMode, setIsTestMode] = useState(true);
  let [currentChoice, setCurrentChoice] = useState(null);
  let [currentSongIndex, setCurrentSongIndex] = useState(0);
  let [currentTestIndex, setCurrentTestIndex] = useState(0);
  let [userAnswers, setUserAnswer] = useState([]);

  const updateCurrentSongIndex = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    // <div className="App">
    <div>
      {notes.map((note, index) => (
        <span key={note}>
          <button
            className={index === currentSongIndex ? 'info' : ''}
            onClick={() => {
              // userAnswers.push(note);
              setUserAnswer(userAnswers);
              console.log('you chose', note);
            }}
          >
            {note}
          </button>
        </span>
      ))}
      <div>
        <button
          onClick={() => {
            setIsPlaying(true);
            testSequence.playAllSongs(updateCurrentSongIndex);
            setIsPlaying(false);
          }}
        >
          Play test sequence
        </button>
      </div>
      {isTestMode && (
        <button
          onClick={() => {
            userAnswers.push(userAnswers[userAnswers.length - 1]);
            setCurrentTestIndex(currentTestIndex + 1);
            console.log('currently playing', currentTestIndex);

            // testSequence.play(currentTestIndex);
            testSequence.next();
            setCurrentChoice(null);
            console.log('next question');
            // console.log('currently playing', currentTestIndex);
          }}
        >
          Confirm
        </button>
      )}
    </div>
  );
}

export default App;
