import React from "react";
import fire from "../../../fire.js";

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
    );
  }
}

export default User;
