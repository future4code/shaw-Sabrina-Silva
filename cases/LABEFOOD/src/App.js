import React from "react";
import Router from "./Router/Router";
import theme from "./Constants/theme";
import { ThemeProvider } from "@mui/material";
import { GlobalStyled } from "./GlobalStyled";
import GlobalState from "./Context/Global/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
