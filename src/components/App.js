import React, { Component } from "react"
import { Router } from "@reach/router"
import { compose } from "recompose"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { SIZES } from "styles/constants"

// import theme from "./styles/theme"
import Day from "routes/Day"
import Month from "routes/Month"
import Year from "routes/Year"
import User from "routes/User"
import Search from "routes/Search"
import Welcome from "routes/Welcome"

import Navbar from "components/Navbar"
import PrivateRoute from "components/PrivateRoute"
import { OnlineContext } from "components/context/online"
import { withAuthentication } from "components/session"
import { withFirebase } from "components/firebase"
import ThemeTogglerContext from "components/context/theme"

const FullscreenBgColor = styled.div`
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
`

class App extends Component {
  state = {
    selectedTheme: this.props.theme.name,
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

  render() {
    const { authUser, online } = this.state
    const { authUser: propAuthUser } = this.props
    const authed = !!propAuthUser || !!authUser

    return (
      <ThemeTogglerContext.Consumer>
        {({ toggle }) => (
          <OnlineContext.Provider value={online}>
            <FullscreenBgColor>
              <Navbar toggleTheme={toggle} />
              <RouteLayout>
                <Router style={{ height: "100%" }}>
                  <PrivateRoute
                    authed={authed}
                    authUser={propAuthUser}
                    path="/app/:year"
                    component={Year}
                    exact
                  />
                  <PrivateRoute
                    authed={authed}
                    authUser={propAuthUser}
                    path="/app/:year/:month"
                    component={Month}
                    exact
                  />
                  <PrivateRoute
                    authed={authed}
                    authUser={propAuthUser}
                    emailVerificationUnnecessary={false}
                    path="/app/:year/:month/:day"
                    component={Day}
                    exact
                  />
                  <PrivateRoute
                    authed={authed}
                    authUser={propAuthUser}
                    emailVerificationUnnecessary={false}
                    path="/app/search"
                    component={Search}
                    exact
                  />
                  <PrivateRoute
                    authed={authed}
                    authUser={propAuthUser}
                    path="/app/user"
                    component={User}
                    exact
                  />
                  <Welcome authed={authed} path="/app" exact />
                </Router>
              </RouteLayout>
            </FullscreenBgColor>
          </OnlineContext.Provider>
        )}
      </ThemeTogglerContext.Consumer>
    )
  }
}

export default compose(
  withAuthentication,
  withFirebase,
  withTheme
)(App)
