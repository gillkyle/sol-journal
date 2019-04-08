import React from "react"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { SIZES } from "../../styles/constants"
import Icon from "../Icon"
import { H1 } from "../elements"
import { StyledLink as Link } from "../elements"

const SeekHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${props => props.theme.colors.quarternary};
  margin-top: 15px;
`
const SeekArrows = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`

const Seek = ({ title = "", prev = "", next = "", disableNext, theme }) => (
  <SeekHeader>
    <H1 color={theme.colors.secondary}>{title}</H1>
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
