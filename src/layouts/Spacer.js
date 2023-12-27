"use client";

import styled from "styled-components";

const Spacer = styled.div`
	${({ width = "5px" }) => `
        width: ${width};
    `}

	${({ height = "auto" }) => `
        height: ${height};
    `}
`;

export default Spacer;
