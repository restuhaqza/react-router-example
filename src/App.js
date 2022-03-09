import logo from "./logo.svg";
import "./App.css";
import { Link, BrowserRouter } from "react-router-dom";

import Router from "./router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <nav>
            <Link className="link-item" to="/">Home</Link>
            <Link className="link-item" to="/about">About</Link>
            <Link className="link-item" to="/other">Other</Link>
          </nav>

          <Router></Router>
        </BrowserRouter>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
