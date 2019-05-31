import React from "react"

import AuthUserContext from "./context"
import { withFirebase } from "components/firebase"

// use context to provide all app components with information about
// the authUser if it's been put in localStorage
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      // protect browser API's like localStorage so Gatsby builds don't fail
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
          // accessing localStorage in componentDidMount is fine in Gatsby
          localStorage.setItem("authUser", JSON.stringify(authUser))
          if (authUser) {
            this.setState({
              authUser: {
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
              },
            })
          }
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
