import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

import { SIZES } from "../../styles/constants";
import Icon from "../Icon";

const SeekHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${props => props.theme.colors.quarternary};
`;
const SeekH1 = styled.h1`
  display: block;
  font-size: ${SIZES.normal};
  color: ${props => props.theme.colors.secondary};
`;
const SeekArrows = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;

const Seek = ({ title = "", prev = "", next = "" }) => (
  <SeekHeader>
    <SeekH1>{title}</SeekH1>
    <SeekArrows>
      <Icon name="ChevronLeft" />
      <Icon name="ChevronRight" />
    </SeekArrows>
  </SeekHeader>
);

export default withTheme(Seek);
