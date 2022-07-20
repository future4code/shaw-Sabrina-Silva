import React from "react";
import Router from "./Router/Router";
import theme from "./Constants/theme";
import { ThemeProvider } from "@mui/material";


function App() {
  return (
    <ThemeProvider theme = {theme}>
     <Router/>
    </ThemeProvider>
  );
}

export default App;
