import React from "react";
import { GlobalStyle } from "../styles";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
}

export default Layout;
