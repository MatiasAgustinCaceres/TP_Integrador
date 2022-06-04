import "./App.css";
import { ThemeProvider } from "atomize";
import Login from "./components/Login";

const theme = {
  colors: {
    brand100: "#111a2f",
    brand200: "#0d456b",
    brand300: "#0983b5",
    brand400: "#07c8ff",
    brand500: "#0ffff8"
  }
};

function App(props) {
  return (
    <ThemeProvider theme={theme}>
        <Login></Login>
    </ThemeProvider>
  );
}

export default App;
