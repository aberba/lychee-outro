"use client";
import styled from "styled-components";

export default styled.input`
	width: 100%;
	padding: 6px 12px;
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

	&[type="date"],
	&[type="time"] {
		padding: 0.58em 1em;
		width: 100%;
	}

	&::placeholder {
		color: #b8b8b8;
	}
`;
