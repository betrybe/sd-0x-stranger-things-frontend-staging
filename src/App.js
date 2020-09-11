import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {process.env.NODE_ENV === "development" && <h1>em desenvolvimento</h1>}
  <h1>{process.env.NODE_ENV}</h1>
      <StrangerThings />
    </div>
  );
}

export default App;
