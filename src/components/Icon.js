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
  CloudOff,
  Download,
  Edit2,
  LogIn,
  Monitor,
  Moon,
  Package,
  Search,
  Smartphone,
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
    cursor: ${props => !props.disabled && "pointer"};
  }
`

const Icon = ({ name, tabindex, label, labelRight, size, ...rest }) => (
  <IconBase tabIndex={tabindex} {...rest}>
    {label && !labelRight && (
      <span style={{ margin: "3px -3px 3px 3px", fontWeight: 700 }}>
        {label}
      </span>
    )}
    {name === "ArrowRightCircle" && <ArrowRightCircle size={size} />}
    {name === "ArrowRight" && <ArrowRight size={size} />}
    {name === "Book" && <Book size={size} />}
    {name === "Calendar" && <Calendar size={size} />}
    {name === "ChevronLeft" && <ChevronLeft size={size} />}
    {name === "ChevronRight" && <ChevronRight size={size} />}
    {name === "Circle" && <Circle size={size} />}
    {name === "Clock" && <Clock size={size} />}
    {name === "CloudOff" && <CloudOff size={size} />}
    {name === "Download" && <Download size={size} />}
    {name === "Edit2" && <Edit2 size={size} />}
    {name === "LogIn" && <LogIn size={size} />}
    {name === "Monitor" && <Monitor size={size} />}
    {name === "Moon" && <Moon size={size} />}
    {name === "Package" && <Package size={size} />}
    {name === "Search" && <Search size={size} />}
    {name === "Smartphone" && <Smartphone size={size} />}
    {name === "Sun" && <Sun size={size} />}
    {name === "User" && <User size={size} />}
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
