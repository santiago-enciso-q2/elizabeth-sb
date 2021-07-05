
import React from "react";
import styled from "styled-components";
import { typeScale } from "../styles/TextStyles";
import IllustrationSignUp from "../../static/images/illustrations/makeup-artist.svg";
import { CloseIcon } from "../../static/images/icons/close";
import { PrimaryButton } from "../buttons/Buttons";
import { useSpring, animated, config } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0px 5px 16px 1px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.formElementBackground};

  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        config: config.slow,
    });

    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <img
                    src={IllustrationSignUp}
                    alt="Sign up for an account"
                    aria-hidden="true"
                />
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Sign up today to get access to cool things!</SignUpText>
                <PrimaryButton>Sign Up!</PrimaryButton>
                <CloseModalButton aria-label="Close modal">
                    <CloseIcon />
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>
    );
};
