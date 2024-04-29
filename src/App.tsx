import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle () {
    setIsOpen(open => !open)
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
          Learn Reactwdqw
        </a>
      </header>
    </div>
  );
}

export default App;
