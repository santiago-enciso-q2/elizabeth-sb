import styled from "styled-components";
import { themes } from "../../styles"

const Row = styled.div`
    grid-column-start: ${(props) => (props.sd ? props.sd : "1")};
    grid-column-end: span ${(props) => (props.ed ? props.ed : "12")};

    @media ${themes.breakpoints.m} {
        grid-column-start: ${(props) => (props.sm ? props.sm : "1")};
        grid-column-end: span ${(props) => (props.em ? props.em : "6")};
    }

    @media ${themes.breakpoints.s} {
        grid-column-start: ${(props) => (props.ss ? props.ss : "1")};
        grid-column-end: span ${(props) => (props.es ? props.es : "6")};
    }
`;

export default Row;