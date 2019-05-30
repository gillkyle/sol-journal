import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import { getDayOfYear } from "date-fns"

import { SIZES } from "styles/constants"
import { Button, P } from "components/elements"
import Footer from "components/Footer"
import { todayUrl } from "utils/date"

import Quotes from "data/quotes.json"

const WelcomeGrid = styled.div`
  text-align: center;
  margin-top: 60px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
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
    const todaysQuote = Quotes[getDayOfYear(new Date()) % Quotes.length]
    const { theme } = this.props
    return (
      <WelcomeGrid>
        <Helmet>
          <meta
            name="description"
            label="Connect with your soul through a simple, beautiful journaling experience from any device."
          />
        </Helmet>
        <div
          style={{
            fontFamily: "cursive",
            fontSize: 100,
            height: 60,
          }}
        >
          "
        </div>
        <Quote>{todaysQuote.quote}</Quote>
        <QuoteAuthor style={{ letterSpacing: 1.1, marginBottom: 30 }}>
          - {todaysQuote.author}
        </QuoteAuthor>
        <div>
          <P style={{ letterSpacing: 1.1, marginBottom: 30 }}>
            This your space for wandering thoughts and ideas. Write about
            whatever is on your mind.
          </P>
        </div>
        <div>
          <Link to={`/app${todayUrl()}`} style={{ textDecoration: "none" }}>
            <Button colors={theme.colors}>Write about today</Button>
          </Link>
        </div>
        <Footer />
      </WelcomeGrid>
    )
  }
}

export default withTheme(Welcome)
