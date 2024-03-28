import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = `Error: "${message}`
  }
}

function App() {
  function handleClick(message: any) {
    throw new ValidationError(message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleClick('som error ')}>Error</button>
      </header>
    </div>
  );
}

export default Sentry.withProfiler(App);
