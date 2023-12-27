"use client";

import styled from "styled-components";

export default styled.select`
	display: block;
	padding: 0.52em 2rem 0.52em 1em;
	font-size: 1rem;
	width: 100%;
	outline: none;
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid #dddfe2;
	box-shadow: 0px 8px 30px 0px rgba(67, 67, 98, 0.04);

	// background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC");

	background-image: url("data:image/svg+xml,%3Csvg width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L5 5L-4.37114e-07 8.74228e-07L10 0Z' fill='%233B4154'/%3E%3C/svg%3E");

	background-repeat: no-repeat;
	background-position: right 8px center;
	background-size: 8px 10px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&:focus {
		outline: none;
		border: 1px solid #bec0d1;
		box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.15);
	}

	/* option {
		padding: 0 .7em 0 0;
	} */

	option {
		padding: 1em 0 0 1em;
	}
`;
