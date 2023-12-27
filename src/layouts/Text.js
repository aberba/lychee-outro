"use client";

import styled from "styled-components";

export default styled.p`
	margin: 0;

	${({ textAlign }) =>
		textAlign &&
		`
        text-align: ${textAlign};
    `};

	${({ size }) =>
		size === "small" &&
		`
        font-size: .9rem;
    `};

	${({ size }) =>
		size === "smaller" &&
		`
        font-size: .8rem;
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
