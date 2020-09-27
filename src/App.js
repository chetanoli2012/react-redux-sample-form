import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import logo from './logo.svg';
import HomePage from './pages/home/home.page';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            React Forms with Redux
          </div>
        </header>
        <div className="App-body">
          <HomePage />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
