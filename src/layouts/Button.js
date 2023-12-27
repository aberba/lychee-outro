"use client";

import TOKENS from "@app/tokens";
import styled from "styled-components";

const Button = styled.button`
	margin: 0 ${TOKENS.spacing.s16} 0 0;
	padding: ${TOKENS.spacing.s8} ${TOKENS.spacing.s32};
	color: #ffffff;
	text-align: center;
	font-weight: 600;
	line-height: 1.6em;
	background-color: #2237ff;
	border: 1px solid #2237ff;
	border-radius: 6px;
	outline: none;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;
export default Button;
