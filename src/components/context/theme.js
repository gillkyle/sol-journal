import React from "react"
import { Helmet } from "react-helmet"
import theme from "styles/theme"

// create an app-wide context for the theme being used as
// well as a function to toggle it back and forth
const ThemeTogglerContext = React.createContext({
  themeName: "LIGHT",
  toggle: () => {},
})

class ThemeToggler extends React.Component {
  state = {
    themeName:
      new Date().getHours() >= 7 && new Date().getHours() <= 21
        ? "LIGHT"
        : "DARK",
  }

  toggle = () => {
    const { themeName } = this.state
    const body = document.body
    let newTheme
    newTheme = themeName === "LIGHT" ? "DARK" : "LIGHT"
    body.style.setProperty(
      "background-color",
      theme[newTheme].colors.bodyBackground
    )

    this.setState({ themeName: newTheme })
  }

  render() {
    const { children } = this.props
    const { themeName } = this.state
    return (
      <ThemeTogglerContext.Provider
        value={{
          themeName,
          toggle: this.toggle,
        }}
      >
        <Helmet>
          <meta
            name="theme-color"
            content={theme[themeName].colors.bodyBackground}
          />
        </Helmet>
        {children}
      </ThemeTogglerContext.Provider>
    )
  }
}

export default ThemeTogglerContext

export { ThemeToggler }
