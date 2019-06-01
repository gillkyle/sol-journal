import React, { Component } from "react"
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

import { SIZES } from "styles/constants"

import { AppLink as Link } from "components/elements"
import Seek from "components/Seek"

const DayCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`
const DayCard = styled.div`
  color: ${props =>
    props.disabled
      ? props.theme.colors.quarternary
      : props.theme.colors.secondary};
  border: 1px solid;
  border-color: ${props => props.theme.colors.quarternary};
  border-radius: 5px;
  text-align: center;
  user-select: none;
  &:hover {
    border-color: ${props => !props.disabled && props.theme.colors.tertiary};
  }
`
const DayCardBanner = styled.div`
  font-size: ${SIZES.tiny};
  position: relative;
  top: -0px;
  background-color: ${props => props.theme.colors.headerBackground};
  border-bottom: 1px solid;
  border-bottom-color: ${props => props.theme.colors.quarternary};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 5px 0px;
`
const DayCardContent = styled.div`
  padding: 20px 25px;
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

    let dayCards = []
    for (let i = 0; i < getDaysInMonth(currentDay); i++) {
      const isDisabled = dayIndexesToInclude <= i && isThisMonth(currentDay)
      if (isDisabled) {
        dayCards.push(
          <DayCard disabled={isDisabled} key={i}>
            <DayCardBanner>
              {format(new Date(year, month - 1, i + 1), "dddd")}
            </DayCardBanner>
            <DayCardContent>{i + 1}</DayCardContent>
          </DayCard>
        )
      } else {
        dayCards.push(
          <Link
            key={i}
            to={format(new Date(year, month - 1, i + 1), "/YYYY/MM/DD")}
            style={{ textDecoration: "none" }}
          >
            <DayCard key={i}>
              <DayCardBanner>
                {format(new Date(year, month - 1, i + 1), "dddd")}
              </DayCardBanner>
              <DayCardContent>{i + 1}</DayCardContent>
            </DayCard>
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
        <DayCardGrid>{dayCards}</DayCardGrid>
      </>
    )
  }
}

export default Month
