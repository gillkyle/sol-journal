import React, { Component } from "react";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import { addDays, subDays, format, isAfter, startOfYesterday } from "date-fns";

import { SIZES } from "../../../styles/constants";

import Seek from "../../Seek";

const JournalHeading = styled.h2`
  font-weight: 700;
  font-size: ${SIZES.tiny};
  color: ${props => props.theme.colors.secondary};
  margin-top: ${SIZES.medium};
`;
const JournalEntryArea = styled.textarea`
  flex-grow: 1;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  line-height: 1.5;
  letter-spacing: 0.5px;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  font-size: ${SIZES.small};
  &::placeholder {
    color: ${props => props.theme.colors.tertiary};
  }
`;

class Day extends Component {
  render() {
    const {
      match: {
        params: { year, month, day }
      }
    } = this.props;
    const currentDay = new Date(year, month - 1, day);
    console.log(currentDay);
    if (!currentDay) return;

    return (
      <>
        <Seek
          title={format(currentDay, "YYYY MMM DD")}
          prev={format(subDays(currentDay, 1), "/YYYY/MM/DD")}
          next={format(addDays(currentDay, 1), "/YYYY/MM/DD")}
          disableNext={isAfter(currentDay, startOfYesterday())}
        />
        <JournalHeading>WHAT'S HAPPENED TODAY?</JournalHeading>
        <JournalEntryArea placeholder="Start writing..." />
      </>
    );
  }
}

export default withTheme(Day);
