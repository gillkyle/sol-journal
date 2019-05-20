import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { SIZES } from "styles/constants"
import { Button, P } from "components/elements"
import Footer from "components/Footer"
import { todayUrl } from "utils/date"

const WelcomeGrid = styled.div`
  text-align: center;
  margin-top: 60px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary};
  height: 100%;
`

const Quote = styled.blockquote`
  margin-top: 30px;
  font-family: Montserrat;
  font-size: ${SIZES.medium};
  color: ${props => props.theme.colors.primary};
`
const QuoteAuthor = styled(P)`
  font-style: italic;
`

class Welcome extends Component {
  render() {
    const { theme } = this.props
    return (
      <WelcomeGrid>
        <h1>Hello</h1>
        <Quote>
          Sucking at something is the first step to being sort of good at
          something
        </Quote>
        <QuoteAuthor style={{ letterSpacing: 1.1, marginBottom: 30 }}>
          - Jake the Dog
        </QuoteAuthor>
        <P style={{ letterSpacing: 1.1, marginBottom: 30 }}>
          This your space for wandering thoughts and ideas. Write about whatever
          is on your mind.
        </P>
        <Link to={`/app${todayUrl()}`} style={{ textDecoration: "none" }}>
          <Button colors={theme.colors}>Write about today</Button>
        </Link>
        <Footer />
      </WelcomeGrid>
    )
  }
}

export default withTheme(Welcome)
