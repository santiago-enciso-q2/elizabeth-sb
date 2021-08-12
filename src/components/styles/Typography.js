import styled from "styled-components"

export const primaryFont = "Indie Flower";
export const secondaryFont = "'Nunito', sans-serif";

export const typeScale = {
    H1: "3rem",
    H2: "2.4rem",
    H3: "1.9rem",
    H4: "1.5rem",
    H5: "1.25rem",
    paragraph: "1rem",
    helperText: "0.8rem",
    copyrightText: "0.6rem",
};

export const H1 = styled.h1`
  font-size: ${typeScale.H1};
  font-family: ${primaryFont};

  @media (max-width: 450px) {
    font-size: 34px;
  }
`;
export const H2 = styled.h2`
  font-size: ${typeScale.H2};
  font-family: ${primaryFont};

  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
  font-size: ${typeScale.H3};
  font-family: ${primaryFont};

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
  font-family: ${secondaryFont};
`;

export const HelperText = styled.p`
  font-size: ${typeScale.helperText};
  font-family: ${secondaryFont};

`;

export const CopyrightText = styled.p`
  font-size: ${typeScale.copyrightText};
  font-family: ${secondaryFont};

`;
