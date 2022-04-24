import React from 'react'

import Main from './Main'
import Navigation  from './Navigation'

import '../stylesheets/App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
          <Navigation />
          <Main />
        </div>
    </div>
  );
}

export default App;
