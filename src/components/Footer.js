import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import Logo from "components/Logo"

const FooterBlock = styled.footer`
  margin-top: 120px;
  padding: 30px 0px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
`
const linkStyles = css`
  cursor: pointer;
  text-decoration: none;
  margin: 10px;
`
const FooterLink = styled(Link)`
  ${linkStyles}
  color: ${props => props.theme.colors.secondary};
  &:hover {
    color: ${props => props.theme.colors.tertiary};
  }
  `
const FooterAnchor = styled.a`
  ${linkStyles}
  color: ${props => props.theme.colors.secondary};
  &:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`

const Footer = ({ theme }) => (
  <FooterBlock>
    <div>
      <Logo color={theme.colors.secondary} />
    </div>
    <div>
      <FooterAnchor
        href="https://github.com/gillkyle/sol-journal"
        rel="target noopener"
        target="_blank"
      >
        View on GitHub
      </FooterAnchor>
      <FooterLink to="terms">Terms of Service</FooterLink>
      <FooterLink to="privacy">Privacy Policy</FooterLink>
    </div>
    <div>&copy; 2019</div>
  </FooterBlock>
)

export default withTheme(Footer)
