import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { compose } from "recompose";
import { withTheme } from "emotion-theming";

import { todayUrl, yearUrl } from "../../utils/date";

import Icon from "../Icon";
import SignOut from "../SignOut";
import { withAuthentication } from "../session";

const Header = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 60px;
  display: grid;
  grid-template-areas: "... nav ...";
  grid-template-columns: 1fr minmax(240px, 720px) 1fr;
  align-items: center;
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

const Navbar = ({ authUser, theme }) => (
  <Header>
    <Nav>
      <Logo>Logo</Logo>
      <NavIcons>
        {authUser ? (
          <React.Fragment>
            <Link to={yearUrl()}>Year</Link>
            <Link to={todayUrl()}>Today</Link>
            <Link to={"/user"}>Account</Link>
            <Icon name="Book" />
            <SignOut />
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
