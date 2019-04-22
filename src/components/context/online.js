import React from 'react'

export const OnlineContext = React.createContext({
  online: navigator.onLine,
});