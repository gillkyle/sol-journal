import React, { Component } from "react";
import isToday from "date-fns/is_today";

import Seek from "../../Seek";

class Year extends Component {
  render() {
    const {
      match: {
        params: { year }
      }
    } = this.props;
    return (
      <div>
        <Seek
          title={year}
          prev={"Asdf"}
          next={"asdf"}
          disableNext={isToday(new Date())}
        />
      </div>
    );
  }
}

export default Year;
