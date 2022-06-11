import React from 'react'
import { Div } from "atomize";
import Form from "../components/LayoutForm";

export default function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Div
    fontFamily="primary"
    shadow="5"
    d="flex"
    justify="center"
    align="center"
    bg="secundary200"
    // Responsive Height
    h={{ xs: "100vh", md: "100vh" }}
    // Responsive Width
    w={{ xs: "auto", md: "100vw" }}
  >
    <Form
      handlesubmit={handleSubmit}
      color="secundary"
      layoutForm="r"
      title="Registro"
      subtitle={{text: "Si ya tenés cuenta venite por acá :)", link:"/login"}}
      inputs={[
        { icon: "User", placeholder: "Nombre de Usuario" },
        { icon: "Email", placeholder: "Email" },
        { icon: "UserSolid", placeholder: "Nombre Completo" },
        { icon: "password", placeholder: "Contraseña"},
        { icon: "password", placeholder: "Confirma tu Contraseña"}
      ]}
      buttons="Registrarse"
      background={
        require("./Login/register-image.png")
      }
    ></Form>
  </Div>
  )
}
