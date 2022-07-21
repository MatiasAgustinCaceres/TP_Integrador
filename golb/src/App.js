import { ThemeProvider } from "atomize";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import { AuthProvider } from "./context/authContext";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LoadingPage from "./pages/LoadingPage";
import PostCard from "./components/PostCard";
import CreatePost from "./pages/CreatePost";

/*TODO:
  Llevar al index.js la configuracion de la paleta de colores
*/

function App(props) {

  const theme = {
    fontFamily: {
      primary: "'Poppins' , sans-serif"
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
    transition: {
      custom: "transform 500ms cubic-bezier(1.000, 0.020, 0.000, 0.995)"
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/load" element={<LoadingPage />} />
          <Route path="/post" element={<PostCard />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/" element={
            <ProtectedRoutes>
              <HomePage/>
            </ProtectedRoutes>
          }/>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
