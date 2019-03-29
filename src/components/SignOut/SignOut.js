import React from "react"
import { compose } from "recompose"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { withFirebase } from "../firebase"

const Button = styled.button`
  background-color: ${props => props.theme.colors.headerBackground};
  padding: 10px 50px;
  height: 40px;
  border-radius: 5px;
  border: 0px solid;
  border-color: ${props => props.theme.colors.quarternary};
  color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.hover};
  }
`

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
)

export default compose(
  withTheme,
  withFirebase
)(SignOutButton)
