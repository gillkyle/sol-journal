import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { Button, P } from "../../elements"
import { todayUrl } from "../../../utils/date"

const Title = styled.h1``
const StartGrid = styled.div`
  margin-top: 30px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary};
  height: 100%;
`

class Start extends Component {
  render() {
    const { theme } = this.props
    return (
      <StartGrid>
        <Title>Record what's on your mind, from anywhere</Title>
        <P style={{ letterSpacing: 1.1, marginBottom: 30 }}>
          Journaling can improve your health and help you take inventory of your
          day. Sol Journal works offline and from any device. Use it as a place
          to record thoughts and events from the day.
        </P>
        <Link to={todayUrl()} style={{ textDecoration: "none" }}>
          <Button colors={theme.colors}>Write about today</Button>
        </Link>
      </StartGrid>
    )
  }
}

export default withTheme(Start)
