import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { compose } from "recompose";
import { withTheme } from "emotion-theming";

import { todayUrl, yearUrl } from "../../utils/date";

import Icon from "../Icon";
import { withAuthentication } from "../session";

const Header = styled.div`
  background-color: ${props => props.theme.colors.headerBackground};
  height: 60px;
  display: grid;
  grid-template-areas: "... nav ...";
  grid-template-columns: 1fr minmax(240px, 720px) 1fr;
  grid-gap: 10px;
  align-items: center;
  border-width: 1px;
  border-color: ${props => props.theme.colors.quarternary};
  border-style: solid;
`;
const Nav = styled.div`
  grid-area: nav;
  max-width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;
const Logo = styled.div``;
const NavIcons = styled.div`
  display: flex;
  flex-direction: row;
  * + * {
    margin-left: 10px;
  }
`;

const Navbar = ({ authUser, theme, toggleTheme }) => (
  <Header>
    <Nav>
      <Logo>Logo</Logo>
      <NavIcons>
        <Icon
          onClick={() => toggleTheme()}
          name={theme.name === "Dark" ? "Sun" : "Moon"}
        />
        {authUser ? (
          <React.Fragment>
            <Link to={yearUrl()}>
              <Icon name="Calendar" />
            </Link>
            <Link to={todayUrl()}>
              <Icon name="Book" />
            </Link>
            <Link to={"/user"}>
              <Icon name="User" />
            </Link>
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
);

export default compose(
  withAuthentication,
  withTheme
)(Navbar);
