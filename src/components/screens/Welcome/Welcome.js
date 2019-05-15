import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { SIZES } from "../../../styles/constants"
import { Button, P } from "../../elements"
import { todayUrl } from "../../../utils/date"
import Logo from "../../Logo"

const WelcomeGrid = styled.div`
  margin-top: 30px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary};
  height: 100%;
`
const Footer = styled.footer`
  margin-top: 120px;
  padding: 30px 0px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
`
const FooterLink = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  margin: 10px;
  &:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`

class Welcome extends Component {
  render() {
    const { theme } = this.props
    return (
      <WelcomeGrid>
        <h1>Your Space for Wandering Thoughts and Ideas</h1>
        <P style={{ letterSpacing: 1.1, marginBottom: 30 }}>
          Journaling can improve your health and help you take inventory of your
          day. Sol Journal works offline and from any device. Use it as a place
          to record thoughts and events from the day.
        </P>
        <Link to={`/app${todayUrl()}`} style={{ textDecoration: "none" }}>
          <Button colors={theme.colors}>Write about today</Button>
        </Link>
        <Footer>
          <div>
            <Logo color={theme.colors.logo} />
          </div>
          <div>
            <FooterLink>View on GitHub</FooterLink>
            <FooterLink to="terms">Terms of Service</FooterLink>
            <FooterLink to="privacy">Privacy Policy</FooterLink>
          </div>
          <div>&copy; 2019</div>
        </Footer>
      </WelcomeGrid>
    )
  }
}

export default withTheme(Welcome)
