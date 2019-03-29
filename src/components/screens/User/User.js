import React from "react"
import styled from "@emotion/styled"
import { compose } from "recompose"
import { withFirebase } from "../../firebase"
import { withAuthentication } from "../../session"

import { SIZES } from "../../../styles/constants"

import SignOut from "../../SignOut"

const ProfileGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 20px;
`
const ProfileSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`
const ProfileSectionHeader = styled.h2`
  font-size: ${SIZES.normal};
  color: ${props => props.theme.colors.tertiary};
`
const ProfileSectionText = styled.span`
  font-size: ${SIZES.normal};
  color: ${props => props.theme.colors.secondary};
`

class User extends React.Component {
  state = {
    name: "",
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addUser = e => {
    e.preventDefault()
    const { firebase } = this.props

    firebase.db
      .collection("users")
      .doc()
      .add({
        name: this.state.name,
      })
    this.setState({ name: "" })
  }

  render() {
    const { authUser } = this.props
    return (
      <ProfileGrid>
        <ProfileSection>
          <ProfileSectionHeader>
            User: <ProfileSectionText>{authUser.email}</ProfileSectionText>
          </ProfileSectionHeader>
          <SignOut />
        </ProfileSection>
        {/* <ProfileSection>Export Entries</ProfileSection> */}
      </ProfileGrid>
    )
  }
}

export default compose(
  withFirebase,
  withAuthentication
)(User)
