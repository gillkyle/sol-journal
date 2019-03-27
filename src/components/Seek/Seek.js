import React from "react";
import styled from "@emotion/styled";

import { SIZES } from "../../styles/constants";

const SeekHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${SIZES.normal};
`;
const SeekH1 = styled.h1`
  display: block;
  font-size: ${SIZES.normal};
`;
const SeekArrows = styled.div``;

const Seek = ({ title = "", prev = "", next = "" }) => (
  <React.Fragment>
    <SeekHeader>
      <SeekH1>{title}</SeekH1>
      <SeekArrows>asdf</SeekArrows>
    </SeekHeader>
    <hr />
  </React.Fragment>
);

export default Seek;
