import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import { SimpleNavbar } from "../Navbar"

export default ({ children }) => (
  <>
    <Helmet title="Sol Journal" />
    <Global
      styles={css`
        * {
          transition: 0.2s border-color ease-in-out, 0.2s fill ease-in-out,
            0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out,
            0.2s color ease-in-out;
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
