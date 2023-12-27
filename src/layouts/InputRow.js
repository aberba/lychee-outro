"use client";

import styled from "styled-components";

const InputRow = styled.div`
	display: flex;
	flex-direction: row;

	margin: 1rem 0;

	div:first-child {
		width: 30%;
		text-align: left;
	}

	div:last-child {
		// width: calc(100% - 30%);
		margin: 0 0 0 auto;

		textarea {
			min-width: 300px;
		}
	}
`;

export default InputRow;
