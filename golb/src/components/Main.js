import React from 'react';
import { ThemeProvider, StyleReset } from 'atomize';
import App from '../App';



export default function Main() {
  const theme = {
    fontFamily: {
      primary: 'OpenSans', 
    },
    colors: {
      brand100: "#111a2f",
      brand200: "#0d456b",
      brand300: "#0983b5",
      brand400: "#07c8ff",
      brand500: "#0ffff8"
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  );
}