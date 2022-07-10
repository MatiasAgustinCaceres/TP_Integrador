import React from "react";
import { Div } from "atomize";
import LayoutForm from "../components/LayoutForm";

export default function Login() {
  const action = userData => {
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
      <LayoutForm
        actionName="Iniciar Sesión"
        action = {action}
        color="brand"
        title="Acceder"
        layoutForm="l"
        subtitle={{text: "¿Nuevo? Comenzá por acá ;)", link: "/register"}}
        inputs={[
          { icon: "UserSolid", placeholder: "Nombre de Usuario", inputName:"email" },
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
      ></LayoutForm>
    </Div>
  );
}
