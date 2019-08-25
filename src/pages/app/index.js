import React from 'react';
import logo from '@/logo.svg';
import './App.css';
import './App.less';
const classPrefix = 'app'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`${classPrefix}-red`}>Learn React</p>
        </a>
      </header>
    </div>
  );
}

export default App;
