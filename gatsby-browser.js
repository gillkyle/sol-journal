import React from "react"
import { ThemeProvider } from "emotion-theming"
import Firebase, { FirebaseContext } from "./src/components/firebase"
import theme from "./src/styles/theme"

export const wrapRootElement = ({ element }) => (
  <FirebaseContext.Provider value={new Firebase()}>
    <ThemeProvider theme={theme.LIGHT}>{element}</ThemeProvider>
  </FirebaseContext.Provider>
)
