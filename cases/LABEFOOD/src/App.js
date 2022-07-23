import React from "react";
import Router from "./Router/Router";
import theme from "./Constants/theme";
import { ThemeProvider } from "@mui/material";
import { GlobalStyled } from "./GlobalStyled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Router />
    </ThemeProvider>
  );
}

export default App;
