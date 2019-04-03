import React from "react"
import { compose } from "recompose"
import { withTheme } from "emotion-theming"

import { Button } from "../elements"

import { withFirebase } from "../firebase"

const SignOutButton = ({ firebase, theme }) => (
  <Button colors={theme.colors} type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
)

export default compose(
  withTheme,
  withFirebase
)(SignOutButton)
