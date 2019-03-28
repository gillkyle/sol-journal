import React, { Component } from "react";
import { addDays, subDays, format, isAfter, startOfYesterday } from "date-fns";

import Seek from "../../Seek";

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
      <div>
        <Seek
          title={format(currentDay, "YYYY MMM DD")}
          prev={format(subDays(currentDay, 1), "/YYYY/MM/DD")}
          next={format(addDays(currentDay, 1), "/YYYY/MM/DD")}
          disableNext={isAfter(currentDay, startOfYesterday())}
        />
      </div>
    );
  }
}

export default Day;
