import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { Button } from "../../elements"
import { todayUrl } from "../../../utils/date"

const StartGrid = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  max-width: 350px;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondary};
  height: 100%;
`

class Start extends Component {
  render() {
    const { theme } = this.props
    return (
      <StartGrid>
        <div style={{ margin: 10 }}>
          Use your journal as a place to record thoughts and events from the
          day.
        </div>
        <div style={{ margin: 10 }}>
          Your journal works offline and from any device. You can add it to your
          homescreen for faster access and write from a mobile device or type up
          your entries from your computer.
        </div>
        <Link to={todayUrl()} style={{ textDecoration: "none" }}>
          <Button colors={theme.colors}>Write Today</Button>
        </Link>
      </StartGrid>
    )
  }
}

export default withTheme(Start)
