import React from "react";
import logo from "./logo.svg";
import "./App.scss";

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
          href="http://localhost:5000/auth/google/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Authenticate with Google
        </a>
        <a
          className="App-link"
          href="/auth/google/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Authenticate with Google Proxy
        </a>
      </header>
    </div>
  );
}

export default App;
