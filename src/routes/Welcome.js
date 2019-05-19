import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { Button, P } from "components/elements"
import Logo from "components/Logo"
import Footer from "components/Footer"
import { todayUrl } from "utils/date"

const WelcomeGrid = styled.div`
  margin-top: 30px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary};
  height: 100%;
`

class Welcome extends Component {
  render() {
    const { theme } = this.props
    return (
      <WelcomeGrid>
        <h1>Your Space for Wandering Thoughts and Ideas</h1>
        <P style={{ letterSpacing: 1.1, marginBottom: 30 }}>
          This your space for wandering thoughts and ideas. Write about whatever
          comes to mind.
        </P>
        <Link to={`/app${todayUrl()}`} style={{ textDecoration: "none" }}>
          <Button colors={theme.colors}>Write about today</Button>
        </Link>
        <Footer />
      </WelcomeGrid>
    )
  }
}

export default withTheme(Welcome)
