import React, { Component } from "react";
import { subDays, format, isToday } from "date-fns";

import Seek from "../../Seek";

class Month extends Component {
  render() {
    const {
      match: {
        params: { year, month }
      }
    } = this.props;
    const currentDay = new Date(year, month - 1);
    return (
      <div>
        <Seek
          title={format(currentDay, "YYYY MMM")}
          prev={format(subDays(currentDay, 1), "/YYYY/MM")}
          next={"asdf"}
          disableNext={isToday(new Date())}
        />
      </div>
    );
  }
}

export default Month;
