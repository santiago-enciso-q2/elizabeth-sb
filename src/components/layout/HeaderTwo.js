import React from "react";
import styled from "styled-components"

import Grid from "./Grid"
import FullWidthSection from "./FullWidthSection"
import MaxWidthSection from "./MaxWidthSection"
import Row from "./Row";

const Header = styled(FullWidthSection)`
  padding: 4rem 1.5rem;
  background-color: lightcoral;
`
const Nav = styled(Row)`
  a {
    margin-right: 1rem;
  }
`

const Content = styled(MaxWidthSection)`
  padding: 10rem 5rem;
  background-color: lightblue;
`

export default function HeaderTwo() {
    return (
        <Grid>
            <Header as="header">
                <Nav as="nav" sd={2} ed={12} sm={2} em={6} ss={2} se={6}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                </Nav>
            </Header>
            <Content as="main">
                <Row>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam assumenda ducimus, fugit laudantium mollitia neque quidem. Aliquid ea eaque fuga fugiat fugit itaque iure, laudantium natus nisi sint tempora?</p>
                </Row>
            </Content>
        </Grid>
    )
}