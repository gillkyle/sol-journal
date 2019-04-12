import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import styled from "@emotion/styled"
import { compose } from "recompose"
import { withTheme } from "emotion-theming"

import { Input, Button, P } from "../../elements"
import { SIZES } from "../../../styles/constants"
import { StyledLink as Link } from "../../elements"

import { FirebaseContext } from "../../firebase"

const RegisterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`
const RegisterLayout = styled.div`
  max-width: ${SIZES.smallWidth};
  width: 100%;
  align-self: center;
  margin-top: 20px;
`

const RegisterPage = ({ history, theme }) => (
  <RegisterLayout>
    <FirebaseContext.Consumer>
      {firebase => <RegisterForm history={history} firebase={firebase} />}
    </FirebaseContext.Consumer>
    <P colors={theme.colors} style={{ fontStyle: "italic" }}>
      Already have an account? <Link to={"/login"}>Login</Link>
    </P>
  </RegisterLayout>
)

class RegisterFormBase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null,
    }
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state
    const { firebase } = this.props

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(result => {
        this.setState({
          username: "",
          email: "",
          passwordOne: "",
          passwordTwo: "",
          error: null,
        })
        const { user } = result
        console.log(user)
        firebase.db
          .collection("users")
          .doc(user.uid)
          .set({
            email: user.email,
            theme: "LIGHT",
          })
        this.props.history.push("/")
      })
      .catch(error => {
        this.setState({ error })
      })

    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state
    const { theme } = this.props
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === ""

    return (
      <form onSubmit={this.onSubmit}>
        <RegisterGrid>
          <Input
            colors={theme.colors}
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <Input
            colors={theme.colors}
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <Input
            colors={theme.colors}
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <Input
            colors={theme.colors}
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <Button colors={theme.colors} disabled={isInvalid} type="submit">
            Register
          </Button>
        </RegisterGrid>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const RegisterForm = compose(
  withTheme,
  withRouter
)(RegisterFormBase)

export default withTheme(RegisterPage)

export { RegisterForm }
