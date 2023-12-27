"use client";

import styled from "styled-components";

export default styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.5em 1em;
  font-size: 1em;
  background: #ffffff;
  border: 1px solid #bec0d1;
  outline: none;
  border-radius: 8px;
  outline: none;

  &:invalid {
    outline: none;
  }

  &:focus {
    outline: none;
    border: 1px solid #2237ff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.15);
  }

  &::placeholder {
    color: #b8b8b8;
  }
`;
