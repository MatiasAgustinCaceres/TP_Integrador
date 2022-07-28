import React, { useState } from "react";
import { Div, Icon, Notification } from "atomize";
import LayoutForm from "../components/LayoutForm";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

export default function Login() {
  
  const { login, user} = useAuth();
  
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const navigate = useNavigate();

  const action = async userData => {
    try {
      setLoading(true);
      await login(userData);
      navigate("/");
    } catch (err) {
      await setTimeout(()=>{
        setLoading(false);
        setError(err.message);
        setErrorAlert(true);
      }, 2000);
    }
  };

  return (
    <Div
      d="flex"
      justify="center"
      align="center"
      bg="brand200"
      // Responsive Height
      h={{ xs: "100vh", md: "100vh" }}
      // Responsive Width
      w={{ xs: "auto", md: "100vw" }}
    >
      {<LoadingPage state={loading}></LoadingPage>}
            <Notification
        bg="danger700"
        isOpen={errorAlert}
        onClick={() => setErrorAlert(false)}
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        {error}
      </Notification>
      {!loading && <LayoutForm
        actionName="Iniciar Sesión"
        action = {action}
        color="brand"
        title="Acceder"
        layoutForm="l"
        subtitle={{text: "¿Nuevo? Comenzá por acá ;)", link: "/register"}}
        inputs={[
          { icon: "UserSolid", placeholder: "Nombre de Usuario", inputName:"email", type: "email"},
          { icon: "password", placeholder: "Contraseña", inputName:"password" },
        ]}
        userData = {{
          email:"",
          password:""
        }}
        buttons="Iniciar Sesión"
        background={
          "https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
        }
      ></LayoutForm>}
    </Div>
  );
}
