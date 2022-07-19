import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Router from "./Router/Router";
import theme from "./Constants/theme";


function App() {
  return (
    <ThemeProvider theme={theme} >
     <Router/>
    </ThemeProvider>
  );
}

export default App;
