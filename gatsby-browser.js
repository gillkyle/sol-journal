import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import Firebase, { FirebaseContext } from "components/firebase"
import theme from "styles/theme"
import ThemeTogglerContext, { ThemeToggler } from "components/context/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <ThemeToggler>
        <ThemeTogglerContext.Consumer>
          {({ themeName }) => (
            <EmotionThemeProvider theme={theme[themeName]}>
              {element}
            </EmotionThemeProvider>
          )}
        </ThemeTogglerContext.Consumer>
      </ThemeToggler>
    </FirebaseContext.Provider>
  )
}
