import React from 'react';
import ActivityGrid from './components/ActivityGrid';
import TimeKeeper from './components/TimeKeeper';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TimeKeeper/>
      <ActivityGrid/>
      </header>
    </div>
  );
}

export default App;
