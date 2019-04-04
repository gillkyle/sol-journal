import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { compose } from "recompose"
import styled from "@emotion/styled"
import { ThemeProvider } from "emotion-theming"

import { SIZES } from "./styles/constants"

import theme from "./styles/theme"
import Navbar from "./components/Navbar"
import Day from "./components/screens/Day"
import Month from "./components/screens/Month"
import Year from "./components/screens/Year"
import User from "./components/screens/User"
import Login from "./components/screens/Login"
import Register from "./components/screens/Register"
import PrivateRoute from "./components/PrivateRoute"

import { withAuthentication } from "./components/session"
import { withFirebase } from "./components/firebase"

const RouteLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  max-width: ${SIZES.maxWidth};
  min-height: calc(100vh - 60px);
  background-color: ${props => props.theme.colors.bodyBackground};
`

class App extends Component {
  state = {
    authUser: JSON.parse(localStorage.getItem("authUser")),
    selectedTheme:
      new Date().getHours() >= 7 && new Date().getHours() <= 21
        ? "LIGHT"
        : "DARK",
  }

  onChangeTheme = () => {
    const { selectedTheme } = this.state
    const root = document.documentElement
    const newTheme = selectedTheme === "LIGHT" ? "DARK" : "LIGHT"
    root.style.setProperty(
      "background-color",
      theme[newTheme].colors.bodyBackground
    )
    this.setState({ selectedTheme: newTheme })
  }

  saveUserSettings = newTheme => {
    const { authUser, firebase } = this.props
    firebase.db
      .collection("users")
      .doc(authUser.uid)
      .update({
        theme: newTheme,
      })
      .then(function() {
        console.log("Updated theme settings")
      })
  }

  render() {
    const { selectedTheme, authUser } = this.state
    const { authUser: propAuthUser } = this.props
    const authed = !!propAuthUser || !!authUser

    const currentTheme = theme[selectedTheme]
    return (
      <ThemeProvider theme={currentTheme}>
        <Router>
          <Navbar toggleTheme={this.onChangeTheme} />
          <RouteLayout>
            <PrivateRoute
              authed={authed}
              path="/:year(\d+)"
              component={Year}
              exact
            />
            <PrivateRoute
              authed={authed}
              path="/:year(\d+)/:month(0[1-9]|1[0-2]+)"
              component={Month}
              exact
            />
            <PrivateRoute
              authed={authed}
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
    )
  }
}

export default compose(
  withAuthentication,
  withFirebase
)(App)
