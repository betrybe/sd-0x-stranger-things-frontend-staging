import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {process.env.env === "development" && <h1>em desenvolvimento</h1>}
  <h1>{process.env.env}</h1>
      <StrangerThings />
    </div>
  );
}

export default App;
