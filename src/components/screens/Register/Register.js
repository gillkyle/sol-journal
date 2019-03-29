import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { FirebaseContext } from "../../firebase";

const RegisterPage = ({ history }) => (
  <div>
    <h1>Register</h1>
    <FirebaseContext.Consumer>
      {firebase => <RegisterForm history={history} firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null
    };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { firebase } = this.props

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(result => {
        this.setState({
          username: "",
          email: "",
          passwordOne: "",
          passwordTwo: "",
          error: null
        });
        const { user } = result
        console.log(user)
        firebase.db.collection("users").doc(user.uid).set({
          email: user.email,
          theme: "LIGHT"
        })
        this.props.history.push("/home");
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(RegisterPage);

export { RegisterForm };
