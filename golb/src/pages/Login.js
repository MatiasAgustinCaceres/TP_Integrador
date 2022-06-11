import React from "react";
import { Div } from "atomize";
import Form from "../components/LayoutForm";

export default function Login() {

  const handleSubmit = () => {

  };

  return (
    <Div
      fontFamily="primary"
      d="flex"
      justify="center"
      align="center"
      bg="brand200"
      // Responsive Height
      h={{ xs: "100vh", md: "100vh" }}
      // Responsive Width
      w={{ xs: "auto", md: "100vw" }}
    >
      <Form
        color="brand"
        title="Acceder"
        handlesubmit={handleSubmit}
        layoutForm="l"
        subtitle={{text: "¿Nuevo? Comenzá por acá ;)", link: "/register"}}
        inputs={[
          { icon: "UserSolid", placeholder: "Nombre de Usuario", inputName:"userName" },
          { icon: "password", placeholder: "Contraseña", inputName:"password" },
        ]}
        userData = {{
          userName:"",
          password:""
        }}
        buttons="Iniciar Sesión"
        background={
          "https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
        }
      ></Form>
    </Div>
  );
}
