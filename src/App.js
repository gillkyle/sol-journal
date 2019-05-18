import React, { Component } from "react"
import { Router } from "@reach/router"
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
import Search from "./components/screens/Search"
import Welcome from "./components/screens/Welcome"
import PrivateRoute from "./components/PrivateRoute"

import { OnlineContext } from "./components/context/online"
import { withAuthentication } from "./components/session"
import { withFirebase } from "./components/firebase"

const FullscreenLayout = styled.div`
  background-color: ${props => props.theme.colors.bodyBackground};
`
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
    selectedTheme:
      new Date().getHours() >= 7 && new Date().getHours() <= 21
        ? "LIGHT"
        : "DARK",
  }

  componentDidMount() {
    window.addEventListener("online", () => {
      this.setState({ online: true })
    })

    window.addEventListener("offline", () => {
      this.setState({ online: false })
    })

    this.setState({
      authUser: JSON.parse(localStorage.getItem("authUser")),
      online: navigator.onLine,
    })
  }

  onChangeTheme = () => {
    const { selectedTheme } = this.state
    const body = document.body
    const newTheme = selectedTheme === "LIGHT" ? "DARK" : "LIGHT"
    body.style.setProperty(
      "background-color",
      theme[newTheme].colors.bodyBackground
    )
    this.setState({ selectedTheme: newTheme })
  }

  render() {
    const { selectedTheme, authUser, online } = this.state
    const { authUser: propAuthUser } = this.props
    const authed = !!propAuthUser || !!authUser

    const currentTheme = theme[selectedTheme]
    return (
      <ThemeProvider theme={currentTheme}>
        <OnlineContext.Provider value={online}>
          <FullscreenLayout>
            <Navbar toggleTheme={this.onChangeTheme} />
            <RouteLayout>
              <Router style={{ flex: 1 }}>
                <PrivateRoute
                  authed={authed}
                  path="/app/:year"
                  component={Year}
                  exact
                />
                <PrivateRoute
                  authed={authed}
                  path="/app/:year/:month"
                  component={Month}
                  exact
                />
                <PrivateRoute
                  authed={authed}
                  path="/app/:year/:month/:day"
                  component={Day}
                  exact
                />
                <PrivateRoute
                  authed={authed}
                  path="/app/search"
                  component={Search}
                  exact
                />
                <PrivateRoute
                  authed={authed}
                  path="/app/user"
                  component={User}
                  exact
                />
                <Welcome authed={authed} path="/app" exact />
              </Router>
            </RouteLayout>
          </FullscreenLayout>
        </OnlineContext.Provider>
      </ThemeProvider>
    )
  }
}

export default compose(
  withAuthentication,
  withFirebase
)(App)
