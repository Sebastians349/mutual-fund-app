// src/App.js

import React from 'react';
import Subscriptions from './components/Subscriptions';
import Redemptions from './components/Redemptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mutual Funds Management</h1>
      </header>
      <main>
        <Subscriptions />
        <Redemptions />
      </main>
    </div>
  );
}

export default App;
