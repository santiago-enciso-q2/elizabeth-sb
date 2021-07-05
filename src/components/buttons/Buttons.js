import React from "react";
import styled from "styled-components";
import { typeScale, primaryFont } from "../styles";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: auto 8px ;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,

  error: ({ theme }) => `
    background: none;
    color: ${theme.status.errorColorText};
    &:hover, &:focus {
      background-color: ${theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.errorColorActive};
    }
  `,
  warning: ({ theme }) => `
    background: none;
    color: ${theme.status.warningColorText};
    &:hover, &:focus {
      background-color: ${theme.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    
    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  success: ({ theme }) => `
    background: none;
    color: ${theme.status.successColorText};
    &:hover, &:focus {
      background-color: ${theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.successColorActive};
    }
  `,
  primaryButtonWarning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.status.warningColorText};
  `,
  secondaryButtonWarning: ({ theme }) => `
    border: 2px solid ${theme.status.warningColorActive};
    background: none;
    color: ${theme.status.warningColorActive};
  `,
  tertiaryButtonWarning: ({ theme }) => `
    border: none;
    background: none;
    color: ${theme.status.warningColorActive};
  `,
  primaryButtonError: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.status.errorColorText};
  `,
  secondaryButtonError: ({ theme }) => `
    border: 2px solid ${theme.status.errorColor};
    background: none;
    color: ${theme.status.errorColor};
  `,
  tertiaryButtonError: ({ theme }) => `
    border: none;
    background: none;
    color: ${theme.status.errorColor};
  `,
  primaryButtonSuccess: ({ theme }) => `
    background-color: ${theme.status.successColor};
    color: ${theme.status.successColorText};
  `,
  secondaryButtonSuccess: ({ theme }) => `
    border: 2px solid ${theme.status.successColor};
    color: ${theme.status.successColor};
  `,
  tertiaryButtonSuccess: ({ theme }) => `
    // border: none;
    background: none;
    color: ${theme.status.successColor};
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  border: none;
  /* border-box not working in secondary button */
  box-sizing: border-box;
  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover {
    border: none;
    background-color: ${(props) => props.theme.button.primaryHoverColor};
    color: ${(props) => props.theme.button.textColorOnPrimary};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-1px);
  }

  &:focus {
    border: ${(props) => props.theme.button.primaryFocusColor} solid 3px;
    background: ${(props) => props.theme.button.primaryColor};
    color: ${(props) => props.theme.button.textColorOnPrimary};
  }

  &:active {
    border: none;
    color: ${(props) => props.theme.button.textColorOnPrimary};
    background: ${(props) => props.theme.button.primaryColor};
  }
`;

const PrimaryButton = styled(Button)`
  background: ${(props) => props.theme.button.primaryColor};
  color: ${(props) => props.theme.button.textColorOnPrimary};

  &:disabled {
    border: none;
    color: ${(props) => props.theme.button.textOnDisabled};
    background: ${(props) => props.theme.button.disabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
  padding: 10px 22px;
  background: none;
  outline-offset: 2px;
  border: 2px solid ${(props) => props.theme.button.primaryColor};
  color: ${(props) => props.theme.button.primaryColor};

  &:hover {
    padding: 12px 24px;
  }

  &:disabled {
    border: ${(props) => props.theme.button.disabled} solid 5px;
    color: ${(props) => props.theme.button.disabled};
    background: ${(props) => props.theme.button.neutral100};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.button.primaryColor};

  &:disabled {
    border: none;
    color: ${(props) => props.theme.button.disabled};
    background: ${(props) => props.theme.button.neutral100};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
