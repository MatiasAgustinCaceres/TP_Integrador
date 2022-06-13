import "./App.css";
import { ThemeProvider } from "atomize";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import { AuthProvider } from "./context/authContext";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import theme from "./theme"

/*TODO:
  Llevar al index.js la configuracion de la paleta de colores
*/

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
