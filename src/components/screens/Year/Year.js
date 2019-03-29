import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { addYears, subYears, format, isThisYear, getMonth } from "date-fns";
import { withTheme } from "emotion-theming";

import { months } from "../../../utils/date";
import Seek from "../../Seek";

const MonthCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;
const MonthCard = styled.div`
  color: ${props =>
    props.disabled
      ? props.theme.colors.quarternary
      : props.theme.colors.secondary};
  border: 1px solid;
  border-color: ${props => props.theme.colors.quarternary};
  padding: 40px;
  border-radius: 5px;
  text-align: center;
  user-select: none;
  &:hover {
    border-color: ${props => !props.disabled && props.theme.colors.tertiary};
  }
`;

class Year extends Component {
  render() {
    const {
      match: {
        params: { year }
      }
    } = this.props;
    const currentDate = new Date(year, 0, 1);

    // include all months unless it's this year
    let monthIndexesToInclude = 11;
    if (isThisYear(currentDate)) {
      monthIndexesToInclude = getMonth(new Date());
    }
    return (
      <div>
        <Seek
          title={year}
          prev={format(subYears(currentDate, 1), "/YYYY")}
          next={format(addYears(currentDate, 1), "/YYYY")}
          disableNext={year >= new Date().getFullYear()}
        />
        <MonthCardGrid>
          {months.long.map((month, index) => {
            const isDisabled = monthIndexesToInclude < index;
            return isDisabled ? (
              <MonthCard key={index} disabled={isDisabled}>
                {month}
              </MonthCard>
            ) : (
              <Link
                key={index}
                to={format(new Date(year, index), "/YYYY/MM")}
                style={{ textDecoration: "none" }}
              >
                <MonthCard>{month}</MonthCard>
              </Link>
            );
          })}
        </MonthCardGrid>
      </div>
    );
  }
}

export default withTheme(Year);
