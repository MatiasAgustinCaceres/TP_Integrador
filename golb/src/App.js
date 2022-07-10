import { ThemeProvider } from "atomize";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import { AuthProvider } from "./context/authContext";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";

/*TODO:
  Llevar al index.js la configuracion de la paleta de colores
*/



function App(props) {

  const theme = {
    fontFamily: {
      primary: "Poppins , sans-serif"
    },
    colors: {
      brand100: "#111a2f",
      brand200: "#0d456b",
      brand300: "#0983b5",
      brand400: "#07c8ff",
      brand500: "#0ffff8",
      secundary100:"#2c2c2c",
      secundary200:"#474747",
      secundary300:"#ffa424",
      secundary400:"#ff9800",
      secundary500:"#ec8800",
    },
  };

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
