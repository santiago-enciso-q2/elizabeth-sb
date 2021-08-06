import React from 'react';
import PackageInfo from './../../package.json';
import bg from "../static/images/illustrations/Elizabeth-ds-graphic.png"
import styled from "styled-components";
import {H1, H2, colors} from "./styles";

export const Welcome = () => {
    return (
        <WelcomeWrapper>
            <H1>Elizabeth Design System</H1>
            <H2>{`React v${PackageInfo.version}`}</H2>
        </WelcomeWrapper>
    );
};

const WelcomeWrapper = styled.div`
  color: ${colors.neutral100};
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
`
