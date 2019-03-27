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

import { withAuthentication } from "./components/session";

class App extends Component {
  state = {
    authUser: JSON.parse(localStorage.getItem("authUser"))
  };

  render() {
    const { authUser } = this.state;
    return (
      <Router>
        <Navbar />
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

export default withAuthentication(App);
