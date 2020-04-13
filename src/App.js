import React from 'react';
import logo from './logo.svg';
import './App.css';
import LetterLinesComponent from './LetterLinesComponent'
import {useAnimatedScale, useDimension} from './hooks'

const word = "HELLO"
function App() {
  return (
    <div className="App">
        <LetterLinesComponent word = {word}/>
    </div>
  );
}

export default App;
