import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {process.env.NODE_ENV === "dev" && <h1>em desenvolvimento</h1>}
      <StrangerThings />
    </div>
  );
}

export default App;
