import React from "react"
import { ThemeProvider } from "emotion-theming"
import Firebase, { FirebaseContext } from "./src/components/firebase"
import theme from "./src/styles/theme"

const selectedTheme =
  new Date().getHours() >= 7 && new Date().getHours() <= 21 ? "LIGHT" : "DARK"

export const wrapRootElement = ({ element }) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <ThemeProvider theme={theme[selectedTheme]}>{element}</ThemeProvider>
    </FirebaseContext.Provider>
  )
}
