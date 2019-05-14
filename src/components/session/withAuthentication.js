import React from "react"

import AuthUserContext from "./context"
import { withFirebase } from "../firebase"

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      if (typeof window !== "undefined") {
        this.state = {
          authUser: JSON.parse(localStorage.getItem("authUser")),
        }
      } else {
        this.state = { authUser: null }
      }
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser))
          this.setState({
            authUser: {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
            },
          })
        },
        () => {
          localStorage.removeItem("authUser")
          this.setState({ authUser: null })
        }
      )
    }

    componentWillUnmount() {
      this.listener()
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component authUser={this.state.authUser} {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
