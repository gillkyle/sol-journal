import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Day from "./components/screens/Day";
import Month from "./components/screens/Month";
import Year from "./components/screens/Year";
import User from "./components/screens/User";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
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
              Learn React
            </a>
          </header>
        </div>
        <Route path="/:year" component={Year} />
        <Route path="/:year/:month" component={Month} />
        <Route path="/:year/:month/:day" component={Day} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    );
  }
}

export default App;
