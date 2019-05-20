import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { SIZES } from "styles/constants"
import { Button, P } from "components/elements"
import Icon from "components/Icon"
import Footer from "components/Footer"
import { todayUrl } from "utils/date"

const StartGrid = styled.div`
  margin-top: 30px;
  text-align: center;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary};
  height: 100%;
`
const FeatureGrid = styled.div`
  display: grid;
  text-align: left;
  grid-template-rows: 1fr;
  grid-gap: 30px;
`
const FeatureRow = styled.div`
  display: grid;
  grid-template-columns: 120px 3fr;
`
const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`
const FeatureTitle = styled.div`
  font-size: ${SIZES["normal"]};
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
`
const FeatureDescription = styled.div`
  color: ${props => props.theme.colors.secondary};
`

const features = [
  {
    icon: "Monitor",
    title: "Cross Platform",
    desc:
      "Write from any internet connected device, with pages optimized for all screen sizes",
  },
  {
    icon: "Package",
    title: "Install as an App",
    desc:
      "Add to your home screen on iPhone or Adroid to use it like you would an app",
  },
  {
    icon: "CloudOff",
    title: "Offline Capable",
    desc:
      "Record thoughts as they come to you, whether you have internet or not, your entries are saved when you get a connection",
  },
  {
    icon: "Search",
    title: "Full Text Search",
    desc:
      "Search through your entries by text to quickly find past entries and recall what you've written",
  },
  {
    icon: "Download",
    title: "Export",
    desc:
      "Download all of your journal entries at any time for back-up or safe keeping ",
  },
]

class Start extends Component {
  render() {
    const { theme } = this.props
    return (
      <StartGrid>
        <h1>Record what's on your mind, from anywhere</h1>
        <P style={{ letterSpacing: 1.1, marginBottom: 30 }}>
          Journaling can improve your health and help you take inventory of your
          day. Sol Journal works offline and from any device. Use it as a place
          to record thoughts and events from the day.
        </P>
        <Link to={`/app${todayUrl()}`} style={{ textDecoration: "none" }}>
          <Button colors={theme.colors}>Start Writing</Button>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 30,
            maxHeight: 350,
          }}
        >
          <StaticQuery
            query={graphql`
              query {
                landingGraphicLight: file(
                  relativePath: { eq: "landing-graphic-light.png" }
                ) {
                  childImageSharp {
                    fluid(maxWidth: 320) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                landingGraphicDark: file(
                  relativePath: { eq: "landing-graphic-dark.png" }
                ) {
                  childImageSharp {
                    fluid(maxWidth: 320) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => {
              return theme.name === "LIGHT" ? (
                <Img
                  style={{
                    maxWidth: 320,
                    width: "100%",
                    maxHeight: 350,
                    height: "100%",
                  }}
                  fluid={data.landingGraphicLight.childImageSharp.fluid}
                />
              ) : (
                <Img
                  style={{
                    maxWidth: 320,
                    width: "100%",
                    maxHeight: 350,
                    height: "100%",
                  }}
                  fluid={data.landingGraphicDark.childImageSharp.fluid}
                />
              )
            }}
          />
        </div>
        <div
          style={{
            margin: "60px 0px",
            borderTop: `1px solid ${theme.colors.quarternary}`,
          }}
        />
        <h2>Features</h2>
        <P style={{ letterSpacing: 1.1, marginBottom: 30 }}>
          Lightweight with the functionalities you need for journaling, and none
          of the things you don't:
        </P>
        <FeatureGrid>
          {features.map(feature => (
            <FeatureRow>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon disabled name={feature.icon} size={60} />
              </div>
              <FeatureText>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.desc}</FeatureDescription>
              </FeatureText>
            </FeatureRow>
          ))}
        </FeatureGrid>
        <Footer />
      </StartGrid>
    )
  }
}

export default withTheme(Start)
