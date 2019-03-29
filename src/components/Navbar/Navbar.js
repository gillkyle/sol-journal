import React from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { compose } from "recompose"
import { withTheme } from "emotion-theming"

import { SIZES } from "../../styles/constants"
import { todayUrl, yearUrl } from "../../utils/date"

import Logo from "../Logo"
import Icon from "../Icon"
import { withAuthentication } from "../session"

const Header = styled.div`
  background-color: ${props => props.theme.colors.headerBackground};
  height: 60px;
  display: grid;
  grid-template-areas: "... nav ...";
  grid-template-columns: 1fr minmax(240px, ${SIZES.maxWidth}) 1fr;
  grid-gap: 10px;
  align-items: center;
  border-width: 1px;
  border-color: ${props => props.theme.colors.quarternary};
  border-style: solid;
`
const Nav = styled.div`
  grid-area: nav;
  max-width: ${SIZES.maxWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`
const LogoSection = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
`
const LogoText = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
`
const NavIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  * + * {
    margin-left: 10px;
  }
`

const Navbar = ({ authUser, theme, toggleTheme }) => (
  <Header>
    <Nav>
      <LogoSection>
        <Logo color={theme.colors.logo} />
        <LogoText color={theme.colors.primary}>SOL</LogoText>{" "}
        <LogoText color={theme.colors.secondary}>JOURNAL</LogoText>
      </LogoSection>
      <NavIcons>
        {authUser ? (
          <React.Fragment>
            <Link to={todayUrl()}>
              <Icon name="Edit2" />
            </Link>
            <Link to={yearUrl()}>
              <Icon name="Calendar" />
            </Link>
            <Link to={"/user"}>
              <Icon name="User" />
            </Link>
            <Icon
              tabindex={0}
              onClick={() => toggleTheme()}
              onKeyPress={() => toggleTheme()}
              name={theme.name === "Dark" ? "Sun" : "Moon"}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to={"/"}>Landing</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </React.Fragment>
        )}
      </NavIcons>
    </Nav>
  </Header>
)

export default compose(
  withAuthentication,
  withTheme
)(Navbar)
