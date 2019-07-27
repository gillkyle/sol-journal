import React, { Component } from "react"
import { navigate, Link } from "gatsby"
import styled from "@emotion/styled"
import { compose } from "recompose"
import { format } from "date-fns"
import { withTheme } from "emotion-theming"

import { SimpleNavbar } from "components/Navbar"
import { Input, Button, P } from "components/elements"
import Layout from "components/Layout"
import { FirebaseContext } from "components/firebase"
import { SIZES } from "styles/constants"

const LoginGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`
const LoginLayout = styled.div`
  max-width: ${SIZES.smallWidth};
  width: 100%;
  margin: 20px auto;
`

const LoginPage = ({ theme }) => (
  <Layout>
    <SimpleNavbar />
    <LoginLayout>
      <FirebaseContext.Consumer>
        {firebase => <LoginForm firebase={firebase} />}
      </FirebaseContext.Consumer>
      <P colors={theme.colors} style={{ fontStyle: "italic" }}>
        Don't have an account?{" "}
        <Link style={{ color: theme.colors.primary }} to={"/register"}>
          Sign Up
        </Link>
      <br />
      Or{" "}
        <Link style={{ color: theme.colors.primary }} to={"/resetpassword"}>
          Reset Password
        </Link>
      </P>
    </LoginLayout>
  </Layout>
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
        navigate(`app/${format(new Date(), "/")}`)
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
    const { theme } = this.props

    const isInvalid = password === "" || email === ""

    return (
      <form onSubmit={this.onSubmit}>
        <LoginGrid>
          <Input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            colors={theme.colors}
          />
          <Input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            colors={theme.colors}
          />
          <Button colors={theme.colors} disabled={isInvalid} type="submit">
            Login
          </Button>
        </LoginGrid>
        {error && <P colors={theme.colors}>{error.message}</P>}
      </form>
    )
  }
}

const LoginForm = compose(withTheme)(LoginFormBase)

export default withTheme(LoginPage)

export { LoginForm }
