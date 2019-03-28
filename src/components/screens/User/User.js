import React from "react";
import fire from "../../firebase/fire.js";

import SignOut from "../../SignOut";

class User extends React.Component {
  state = {
    name: ""
  };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addUser = e => {
    e.preventDefault();
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      name: this.state.name
    });
    this.setState({ name: "" });
  };

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
    );
  }
}

export default User;
