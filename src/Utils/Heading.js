import Styled from "styled-components";

export const Heading1 = Styled.h1`
    font-weight: 400;
    color: #5f5f5f;
`;

export const Heading3 = Styled.h3`
    font-weight: ${props => (props.bold && "400") || "100"};
    color: #0c0d5acf;
`;
