import styled from "styled-components";

export const primaryFont = "Nunito, monospace";

export const typeScale = {
  header1: "1.8rem",
  header2: "1.6rem",
  header3: "1.4rem",
  header4: "1.2rem",
  header5: "1.1rem",
  paragraph: "1rem",
  helperText: "0.8rem",
  copyrightText: "0.7rem",
};

export const H1 = styled.h1`
  font-weight: bold;
  font-size: ${typeScale.header1};
  font-family: ${primaryFont};

  @media (max-width: 450px) {
    font-size: 34px;
  }
`;
export const H2 = styled.h2`
  font-weight: bold;
  font-size: ${typeScale.header1};
  font-family: ${primaryFont};

  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: ${typeScale.header1};

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
`;

export const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;
