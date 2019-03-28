import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

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
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  max-width: 720px;
  min-height: calc(100vh - 60px);
  background-color: ${props => props.theme.colors.bodyBackground};
`;

class App extends Component {
  state = {
    authUser: JSON.parse(localStorage.getItem("authUser")),
    selectedTheme: "LIGHT"
  };

  onChangeTheme = () => {
    const { selectedTheme } = this.state;
    const root = document.documentElement;
    const newTheme = selectedTheme === "LIGHT" ? "DARK" : "LIGHT";
    root.style.setProperty(
      "background-color",
      theme[newTheme].colors.bodyBackground
    );
    this.setState({ selectedTheme: newTheme });
  };

  render() {
    const { authUser, selectedTheme } = this.state;

    const currentTheme = theme[selectedTheme];
    return (
      <ThemeProvider theme={currentTheme}>
        <Router>
          <Navbar toggleTheme={this.onChangeTheme} />
          <RouteLayout>
            <Route path="/:year(\d+)" component={Year} exact />
            <Route
              path="/:year(\d+)/:month(0[1-9]|1[0-2]+)"
              component={Month}
              exact
            />
            <Route
              path="/:year(\d+)/:month(0[1-9]|1[0-2]+)/:day(\d+)"
              component={Day}
              exact
            />
            <Route path="/user" component={User} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
          </RouteLayout>
        </Router>
      </ThemeProvider>
    );
  }
}

export default withAuthentication(App);
