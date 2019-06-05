import React from "react"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import { compose } from "recompose"

import { withFirebase } from "components/firebase"
import { Button } from "components/elements"
import Logo from "components/Logo"

const NoticeBlock = styled.footer`
  margin-top: 30px;
  padding: 30px 0px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
`

const ResendNotice = ({ theme, firebase }) => (
  <NoticeBlock>
    <div>
      <Logo color={theme.colors.secondary} />
    </div>
    <div>
      Looks like you haven't verified your email, please verify before using the
      app
    </div>
    <div style={{ marginTop: 15 }}>
      <Button
        colors={theme.colors}
        onClick={() => {
          firebase.resendVerification()
        }}
        fontSize="small"
      >
        Resend Verification?
      </Button>
    </div>
  </NoticeBlock>
)

export default compose(
  withFirebase,
  withTheme
)(ResendNotice)
