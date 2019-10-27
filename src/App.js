import React from 'react';
import Desktop from '../src/components/Desktop';
import background from './asserts/images/background.png';
import Page from './components/Page/Page';

function App() {
  return (
    <div className="App">
      <Desktop width={2742} height={1617}>
        <img className="dragable-cursor" src={background} alt="this back"/>
        <Page className="card-page"/>
      </Desktop>
      <div className="mobileBro"></div>
    </div>
  );
}

export default App;
