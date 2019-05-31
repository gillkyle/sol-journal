import React from "react"
import { compose } from "recompose"
import { withTheme } from "emotion-theming"

import { Button } from "components/elements"

import { withFirebase } from "components/firebase"

const SignOutButton = ({ firebase, theme }) => (
  <Button
    fontSize="small"
    colors={theme.colors}
    type="button"
    onClick={firebase.doSignOut}
  >
    Sign Out
  </Button>
)

export default compose(
  withTheme,
  withFirebase
)(SignOutButton)
