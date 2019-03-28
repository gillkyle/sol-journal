import React from "react";
import styled from "@emotion/styled";
import {
  Book,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Circle,
  Moon,
  User
} from "react-feather";
import { withTheme } from "emotion-theming";

const IconBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  border-radius: 12px;
  padding: 5px;
  transition: 0.1s all ease-in-out;
  color: ${props => props.theme.colors.secondary};
  &:hover {
    background-color: ${props => props.theme.colors.hover};
    cursor: pointer;
  }
`;

const Icon = ({ name, ...rest }) => (
  <IconBase {...rest}>
    {name === "Book" && <Book />}
    {name === "Calendar" && <Calendar />}
    {name === "ChevronLeft" && <ChevronLeft />}
    {name === "ChevronRight" && <ChevronRight />}
    {name === "Circle" && <Circle />}
    {name === "Moon" && <Moon />}
    {name === "User" && <User />}
  </IconBase>
);

export default withTheme(Icon);
