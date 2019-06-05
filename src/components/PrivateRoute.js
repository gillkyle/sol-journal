import React from "react"
import { Redirect, Location } from "@reach/router"
import ResendNotice from "components/ResendNotice"
// when a user isn't logged in, force a redirect
const PrivateRoute = ({
  component: Component,
  authed,
  authUser,
  emailVerificationUnnecessary = true,
  ...rest
}) => {
  return (
    <Location>
      {({ location }) =>
        authed === true ? (
          emailVerificationUnnecessary || authUser.emailVerified ? (
            <Component {...rest} />
          ) : (
            <ResendNotice />
          )
        ) : (
          <Redirect to="/login" from={location.pathname} />
        )
      }
    </Location>
  )
}

export default PrivateRoute
