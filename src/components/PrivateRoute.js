import React from "react"
import { Redirect, Location } from "@reach/router"

// when a user isn't logged in, force a redirect
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Location>
      {({ location }) =>
        authed === true ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/login" from={location.pathname} />
        )
      }
    </Location>
  )
}

export default PrivateRoute
