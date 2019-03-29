import React from "react"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import { Link } from "react-router-dom"

import { SIZES } from "../../styles/constants"
import Icon from "../Icon"

const SeekHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${props => props.theme.colors.quarternary};
`
const SeekH1 = styled.h1`
  display: block;
  font-size: ${SIZES.normal};
  color: ${props => props.theme.colors.secondary};
`
const SeekArrows = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`

const Seek = ({ title = "", prev = "", next = "", disableNext, theme }) => (
  <SeekHeader>
    <SeekH1>{title}</SeekH1>
    <SeekArrows>
      <Link to={prev}>
        <Icon name="ChevronLeft" />
      </Link>
      {disableNext ? (
        <Icon
          disabled={disableNext}
          name="ChevronRight"
          style={{
            color: disableNext ? theme.colors.hover : theme.colors.secondary,
          }}
        />
      ) : (
        <Link to={next}>
          <Icon
            disabled={disableNext}
            name="ChevronRight"
            style={{
              color: disableNext ? theme.colors.hover : theme.colors.secondary,
            }}
          />
        </Link>
      )}
    </SeekArrows>
  </SeekHeader>
)

export default withTheme(Seek)
