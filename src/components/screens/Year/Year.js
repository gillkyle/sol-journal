import React, { Component } from "react";
import { addYears, subYears, format } from "date-fns";

import Seek from "../../Seek";

class Year extends Component {
  render() {
    const {
      match: {
        params: { year }
      }
    } = this.props;
    const currentDate = new Date(year, 0, 1);
    console.log(currentDate.getFullYear());
    return (
      <div>
        <Seek
          title={year}
          prev={format(subYears(currentDate, 1), "/YYYY")}
          next={format(addYears(currentDate, 1), "/YYYY")}
          disableNext={year >= new Date().getFullYear()}
        />
      </div>
    );
  }
}

export default Year;
