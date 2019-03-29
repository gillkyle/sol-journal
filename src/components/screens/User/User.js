import React from "react"
import { withFirebase } from "../../firebase"

import SignOut from "../../SignOut"

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
    return (
      <React.Fragment>
        <SignOut />
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.updateInput}
            value={this.state.name}
          />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default withFirebase(User)
