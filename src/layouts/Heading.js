"use client";

import styled from "styled-components";

export default styled.h1`
  margin: 0;
  font-weight: bold;
  line-height: 1.22;

  color: #191c26;

  font-weight: 600;
  line-height: 22px;

  ${({ textAlign }) =>
    textAlign &&
    `
        text-align: ${textAlign};
    `};

  ${({ color }) =>
    color &&
    `
        color: ${color};
    `};

  ${({ noMargin }) =>
    noMargin &&
    `
        margin: 0;
    `};
`;
