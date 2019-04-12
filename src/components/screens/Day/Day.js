import React, { Component } from "react"
import styled from "@emotion/styled"
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core"
import { compose } from "recompose"
import { withRouter } from "react-router-dom"
import { withTheme } from "emotion-theming"
import { withFirebase } from "../../firebase"
import { withAuthentication } from "../../session"
import { addDays, subDays, format, isAfter, startOfYesterday } from "date-fns"
import { BeatLoader } from "react-spinners"

import { SIZES } from "../../../styles/constants"

import Seek from "../../Seek"

const JournalHeading = styled.h2`
  font-weight: 700;
  font-size: ${SIZES.tiny};
  color: ${props => props.theme.colors.secondary};
  margin-top: ${SIZES.medium};
`
const JournalEntryArea = styled.textarea`
  font-family: sans-serif;
  flex-grow: 0.8;
  color: ${props => props.theme.colors.primary};
  caret-color: ${props => props.theme.colors.secondary};
  background-color: transparent;
  line-height: 1.5;
  letter-spacing: 0.5px;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  font-size: ${SIZES.small};
  border-radius: 1px;
  margin-top: ${SIZES.tiny};
  padding-top: 0px;
  padding-bottom: 0px;
  &::placeholder {
    color: ${props => props.theme.colors.tertiary};
  }
  &::selection {
    background: ${props => props.theme.colors.hover};
  }
  &:focus {
    box-shadow: 0 0 0 8px ${props => props.theme.colors.bodyBackground},
      0 0 0 10px ${props => props.theme.colors.hover};
  }
`
const fadeKeyFrames = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const LoadingSpinner = styled(BeatLoader)`
  opacity: 0;
`

const AUTOSAVE_DELAY = 2000

class Day extends Component {
  state = {
    text: "",
    loading: true,
  }
  timeout = 0
  retrievedFromServer = false

  componentDidMount() {
    const {
      history,
      match: {
        params: { year, month, day },
      },
    } = this.props
    history.listen((location, action) => {
      const [, year, month, day] = location.pathname.split("/")
      this.onRouteChanged(year, month, day)
    })
    this.getDocRef(year, month, day, false)
  }

  onRouteChanged = (year, month, day) => {
    this.setState({ loading: true })
    this.getDocRef(year, month, day, false)
  }

  getDocRef = (year, month, day, cacheFirst) => {
    const { firebase, authUser } = this.props
    const getOptions = {
      source: cacheFirst ? "cache" : "default",
    }
    const docRef = firebase.db
      .collection("entries")
      .doc(`${year}${month}${day}-${authUser.uid}`)
    this.getData(docRef, getOptions)
  }

  getData = (docRef, options) => {
    docRef
      .get(options)
      .then(doc => {
        if (doc.data()) {
          this.setState({ text: doc.data().text, loading: false })
        } else {
          this.setState({ text: "", loading: false })
        }
      })
      .catch(err => {
        console.warn("entry not found in cache")
        // for cache first, server second fetching, dangerous with potential overwriting of data
        // docRef.get().then(doc => {
        //   if (doc.data()) {
        //     this.setState({ text: doc.data().text, loading: false });
        //   } else {
        //     this.setState({ text: "", loading: false });
        //   }
        // });
      })
  }

  onChangeText = e => {
    if (this.timeout) clearTimeout(this.timeout)
    const text = e.target.value

    this.setState({ text })
    this.timeout = setTimeout(() => {
      this.saveText(text)
    }, AUTOSAVE_DELAY)
  }

  saveText = text => {
    const {
      match: {
        params: { year, month, day },
      },
      firebase,
      authUser,
    } = this.props
    firebase.db
      .collection("entries")
      .doc(`${year}${month}${day}-${authUser.uid}`)
      .set(
        {
          text,
          day: Number(day),
          year: Number(year),
          month: Number(month),
          userId: authUser.uid,
        },
        {
          merge: true,
        }
      )
  }

  render() {
    const {
      match: {
        params: { year, month, day },
      },
      theme,
    } = this.props
    const { text, loading } = this.state
    const currentDay = new Date(year, month - 1, day)
    if (!currentDay) return

    return (
      <>
        <Seek
          title={format(currentDay, "YYYY MMM DD")}
          prev={format(subDays(currentDay, 1), "/YYYY/MM/DD")}
          next={format(addDays(currentDay, 1), "/YYYY/MM/DD")}
          disableNext={isAfter(currentDay, startOfYesterday())}
        />
        <JournalHeading>RECORD THOUGHTS ABOUT YOUR DAY</JournalHeading>
        {loading ? (
          <div style={{ marginTop: 10 }}>
            <LoadingSpinner
              color={theme.colors.quarternary}
              size={10}
              margin="4px"
              css={css`
                animation: ${fadeKeyFrames} 1s ease-in;
              `}
            />
          </div>
        ) : (
          <JournalEntryArea
            placeholder="Start writing..."
            onChange={e => this.onChangeText(e)}
            value={text}
            css={css`
              animation: ${fadeKeyFrames} 0.2s ease-in;
            `}
          />
        )}
      </>
    )
  }
}

export default compose(
  withFirebase,
  withTheme,
  withAuthentication,
  withRouter
)(Day)
