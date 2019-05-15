import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

export default ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          transition: 0.2s all ease-in-out;
        }
        h1 {
          font-family: "Montserrat", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
    {children}
  </>
)
