import React from 'react';
import background from './asserts/images/background.png'
import Page from "./components/Page/Page";
import Desktop from "./components/Desktop";

function App() {
  return (
    <div className="App">
      <Desktop>
        <img src={background} alt="some"/>
      </Desktop>
    </div>
  );
}

export default App;