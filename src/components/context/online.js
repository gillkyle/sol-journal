import React from "react"

export const OnlineContext = React.createContext({
  online: typeof window !== "undefined" && navigator && navigator.onLine,
})
