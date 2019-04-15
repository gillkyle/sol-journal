import React from "react"
import styled from "@emotion/styled"
import {
  ArrowRightCircle,
  ArrowRight,
  Book,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  Edit2,
  LogIn,
  Moon,
  Search,
  Sun,
  User,
} from "react-feather"
import { withTheme } from "emotion-theming"

const IconBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 12px;
  padding: 5px;
  transition: 0.1s all ease-in-out;
  color: ${props => props.theme.colors.secondary};
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.bodyBackground},
      0 0 0 5px ${props => props.theme.colors.hover};
  }
  &:hover {
    background-color: ${props => !props.disabled && props.theme.colors.hover};
    cursor: pointer;
  }
`

const Icon = ({ name, tabindex, label, labelRight, ...rest }) => (
  <IconBase tabIndex={tabindex} {...rest}>
    {label && !labelRight && (
      <span style={{ margin: "3px -3px 3px 3px", fontWeight: 700 }}>
        {label}
      </span>
    )}
    {name === "ArrowRightCircle" && <ArrowRightCircle />}
    {name === "ArrowRight" && <ArrowRight />}
    {name === "Book" && <Book />}
    {name === "Calendar" && <Calendar />}
    {name === "ChevronLeft" && <ChevronLeft />}
    {name === "ChevronRight" && <ChevronRight />}
    {name === "Circle" && <Circle />}
    {name === "Clock" && <Clock />}
    {name === "Edit2" && <Edit2 />}
    {name === "LogIn" && <LogIn />}
    {name === "Moon" && <Moon />}
    {name === "Search" && <Search />}
    {name === "Sun" && <Sun />}
    {name === "User" && <User />}
    {label && labelRight && (
      <span
        style={{
          margin: "3px -3px 3px 3px",
          fontWeight: 700,
        }}
      >
        {label}
      </span>
    )}
  </IconBase>
)

export default withTheme(Icon)
