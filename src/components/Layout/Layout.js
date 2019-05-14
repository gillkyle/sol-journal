import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

export default ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        }
      `}
    />
    {children}
  </>
)
