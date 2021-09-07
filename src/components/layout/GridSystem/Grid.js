import styled from "styled-components";
import { themes } from "../../styles"

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: max-content;
    gap: ${(props) => (props.gapDefault ? props.gapDefault : "1rem 1rem")};
    margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

    @media ${themes.breakpoints.m} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        gap: ${(props) => (props.gapMedium ? props.gapMedium : "1rem 1rem")};
        margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
    }

    @media ${themes.breakpoints.s} {
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
        gap: ${(props) => (props.gapSmall ? props.gapSmall : "1rem 1rem")};
        margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
    }
`
export default Grid;