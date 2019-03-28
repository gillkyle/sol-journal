import React from "react";
import styled from "@emotion/styled";

import { SIZES } from "../../styles/constants";

const SeekHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SeekH1 = styled.h1`
  display: block;
  font-size: ${SIZES.normal};
`;
const SeekArrows = styled.div``;
const SeekHr = styled.hr`
  margin: 0;
`;

const Seek = ({ title = "", prev = "", next = "" }) => (
  <React.Fragment>
    <SeekHeader>
      <SeekH1>{title}</SeekH1>
      <SeekArrows>asdf</SeekArrows>
    </SeekHeader>
    <SeekHr />
  </React.Fragment>
);

export default Seek;
