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

export const onServiceWorkerUpdateFound = () => {
  const showNotification = () => {
    Notification.requestPermission(result => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification("Update", {
            body: "New content is available!",
            icon: "../images/sol-journal-logo.png",
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: "request",
            actions: [
              // you can customize these actions as you like
              {
                action: alert("update!"), // you should define this
                title: "update",
              },
              {
                action: alert("ignore"), // you should define this
                title: "ignore",
              },
            ],
          })
        })
      }
    })
  }

  showNotification()
}

export const onServiceWorkerInstalled = () => {
  const showNotification = () => {
    Notification.requestPermission(result => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification("Installed", {
            body: "New content is available!",
            icon: "../images/sol-journal-logo.png",
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: "request",
            actions: [
              // you can customize these actions as you like
              {
                action: alert("update!"), // you should define this
                title: "update",
              },
              {
                action: alert("ignore"), // you should define this
                title: "ignore",
              },
            ],
          })
        })
      }
    })
  }

  showNotification()
}
