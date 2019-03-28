import React from "react";
import styled from "@emotion/styled";
import { Book, Calendar, Circle, User } from "react-feather";

const IconBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  border-radius: 12px;
  padding: 5px;
  transition: 0.1s all ease-in-out;
  &:hover {
    background-color: yellow;
  }
`;

const Icon = ({ name }) => (
  <IconBase>
    {name === "Book" && <Book />}
    {name === "Calendar" && <Calendar />}
    {name === "Circle" && <Circle />}
    {name === "User" && <User />}
  </IconBase>
);

export default Icon;
