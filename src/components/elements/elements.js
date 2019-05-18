import React from "react"
import { withTheme } from "emotion-theming"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { SIZES } from "styles/constants"

export const H1 = styled.h1`
  display: block;
  font-size: ${SIZES.small};
  color: ${props => props.color};
`

export const Input = styled.input`
  color: ${props => props.colors.primary};
  background-color: ${props => props.colors.headerBackground};
  border: none;
  border-radius: 5px;
  max-height: 40px;
  outline: none;
  padding: 15px;
  font-size: ${SIZES.normal};
  &:focus {
    box-shadow: 0 0 0 3px ${props => props.colors.bodyBackground},
      0 0 0 5px ${props => props.colors.hover};
  }
  &::placeholder {
    color: ${props => props.colors.tertiary};
  }
  &:valid {
    border-color: ${props => props.colors.valid} !important;
  }
`

export const Button = styled.button`
  display: inline;
  background-color: ${props => props.colors.primary};
  padding: 12px 50px;
  min-height: 45px;
  border-radius: 5px;
  border: 0px solid;
  border-color: ${props => props.colors.quarternary};
  color: ${props => props.colors.quarternary};
  font-size: ${props => SIZES[props.fontSize || "normal"]};
  font-weight: 700;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.colors.secondary};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${props => props.colors.bodyBackground},
      0 0 0 5px ${props => props.colors.secondary};
  }
`

export const P = styled.p`
  color: ${props => props.theme.colors.secondary};
`

export const AppLink = props => <Link {...props} to={"/app" + props.to} />

export const StyledLink = withTheme(styled(AppLink)`
  text-decoration: none;
  border-radius: 12px;
  outline: none;
  color: ${props => props.theme.colors.primary};
  &:focus {
    box-shadow: 0 0 0 3px ${props => props.theme.colors.bodyBackground},
      0 0 0 5px ${props => props.theme.colors.hover};
  }
`)
