import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import { format } from "date-fns"

import { FirebaseContext } from "../../firebase"

const LoginPage = ({ history }) => (
  <div>
    <h1>Login</h1>
    <FirebaseContext.Consumer>
      {firebase => <LoginForm history={history} firebase={firebase} />}
    </FirebaseContext.Consumer>
    <p>
      Don't have an account? <Link to={"/register"}>Sign Up</Link>
    </p>
  </div>
)

class LoginFormBase extends Component {
  constructor(props) {
    super(props)

    this.state = { email: "", password: "", error: null }
  }

  onSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ email: "", password: "", error: null })
        this.props.history.push(format(new Date(), "/"))
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { email, password, error } = this.state

    const isInvalid = password === "" || email === ""

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const LoginForm = withRouter(LoginFormBase)

export default LoginPage

export { LoginForm }
