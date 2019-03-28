import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

import "./App.css";
import theme from "./styles/theme";
import Navbar from "./components/Navbar";
import Day from "./components/screens/Day";
import Month from "./components/screens/Month";
import Year from "./components/screens/Year";
import User from "./components/screens/User";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";

import { withAuthentication } from "./components/session";

const RouteLayout = styled.div`
  margin: 0 auto;
  max-width: 720px;
`;

class App extends Component {
  state = {
    authUser: JSON.parse(localStorage.getItem("authUser")),
    selectedTheme: "LIGHT"
  };

  render() {
    const { authUser, selectedTheme } = this.state;

    const currentTheme = theme[selectedTheme];
    return (
      <ThemeProvider theme={currentTheme}>
        <Router>
          <Navbar />
          <RouteLayout>
            <Route path="/:year(\d+)" component={Year} />
            <Route path="/:year(\d+)/:month(\d+)" component={Month} />
            <Route path="/:year(\d+)/:month(\d+)/:day(\d+)" component={Day} />
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </RouteLayout>
        </Router>
      </ThemeProvider>
    );
  }
}

export default withAuthentication(App);
