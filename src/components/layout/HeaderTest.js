import React from "react";
import styled from "styled-components"
import {themes} from "../styles"

import Grid from "./Grid"
import FullWidthSection from "./FullWidthSection"
import MaxWidthSection from "./MaxWidthSection"
import Row from "./Row";

const Header = styled(FullWidthSection)`
    padding: 4rem 1.5rem;
    background-color: lightcoral;
`

export default function HeaderTest() {
    return (
        <Grid>
            <Header></Header>
        </Grid>
    )
}