import React from "react"

// when navigator is available outside of the build phase, provide it through Context
export const OnlineContext = React.createContext({
  online: typeof window !== "undefined" && navigator && navigator.onLine,
})
