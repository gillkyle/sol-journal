import React, { Component } from "react"
import { AppLink as Link } from "components/elements"
import styled from "@emotion/styled"
import {
  isAfter,
  isThisYear,
  isThisMonth,
  format,
  addMonths,
  subMonths,
  getDaysInMonth,
  startOfMonth,
} from "date-fns"

import Seek from "../../Seek"

const YearCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`
const YearCard = styled.div`
  color: ${props =>
    props.disabled
      ? props.theme.colors.quarternary
      : props.theme.colors.secondary};
  border: 1px solid;
  border-color: ${props => props.theme.colors.quarternary};
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  user-select: none;
  &:hover {
    border-color: ${props => !props.disabled && props.theme.colors.tertiary};
  }
`

class Month extends Component {
  render() {
    const { year, month } = this.props
    const currentDay = new Date(year, month - 1)

    // include all months unless it's this year
    let dayIndexesToInclude = 31
    if (isThisYear(currentDay)) {
      dayIndexesToInclude = new Date().getDate()
    }

    let yearCards = []
    for (let i = 0; i < getDaysInMonth(currentDay); i++) {
      const isDisabled = dayIndexesToInclude <= i && isThisMonth(currentDay)
      if (isDisabled) {
        yearCards.push(
          <YearCard disabled={isDisabled} key={i}>
            {i + 1}
          </YearCard>
        )
      } else {
        yearCards.push(
          <Link
            key={i}
            to={format(new Date(year, month - 1, i + 1), "/YYYY/MM/DD")}
            style={{ textDecoration: "none" }}
          >
            <YearCard key={i}>{i + 1}</YearCard>
          </Link>
        )
      }
    }

    return (
      <>
        <Seek
          title={format(currentDay, "YYYY MMM")}
          prev={format(subMonths(currentDay, 1), "/YYYY/MM")}
          next={format(addMonths(currentDay, 1), "/YYYY/MM")}
          disableNext={isAfter(
            currentDay,
            startOfMonth(subMonths(new Date(), 1))
          )}
        />
        <YearCardGrid>{yearCards}</YearCardGrid>
      </>
    )
  }
}

export default Month
