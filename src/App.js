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
  margin: 0 auto;
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
    console.log(root);
    const newTheme = selectedTheme === "LIGHT" ? "DARK" : "LIGHT";
    root.style.setProperty(
      "background-color",
      theme[newTheme].colors.bodyBackground
    );
    this.setState(prevState => ({
      selectedTheme: newTheme
    }));
  };

  render() {
    const { authUser, selectedTheme } = this.state;

    const currentTheme = theme[selectedTheme];
    return (
      <ThemeProvider theme={currentTheme}>
        <Router>
          <Navbar toggleTheme={this.onChangeTheme} />
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
