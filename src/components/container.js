import React from "react"
import styled from "@emotion/styled"

import { SIZES } from "../styles/constants"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  max-width: ${SIZES.maxWidth};
  min-height: calc(100vh - 60px);
  background-color: ${props => props.theme.colors.bodyBackground};
`

export default Container
