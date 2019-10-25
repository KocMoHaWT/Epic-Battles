import React from 'react';
import Desktop from '../src/components/Desktop';
import background from './asserts/images/background.png';

function App() {
  return (
    <div className="App">
      <Desktop>
        <img src={background} alt="this back"/>
      </Desktop>
      <div className="mobileBro"></div>
    </div>
  );
}

export default App;
