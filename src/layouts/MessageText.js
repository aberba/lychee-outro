"use client";

import styled, { css } from "styled-components";

const MessageText = styled.p`
  font-size: 0.8em;

  ${({ textAlign }) =>
    textAlign &&
    `
        text-align: ${textAlign};
    `}

  ${({ variant }) =>
    variant === "error" &&
    css`
      color: #dc143c;
    `}

    ${({ variant }) =>
    variant === "notice" &&
    css`
      color: #616161;
    `}

    ${({ variant }) =>
    variant === "success" &&
    css`
      color: #24bc86;
    `}

    ${({ variant }) =>
    variant === "hint" &&
    css`
      color: #6f03a0;
    `}
`;

export default MessageText;
