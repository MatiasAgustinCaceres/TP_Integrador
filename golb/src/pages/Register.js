import React from 'react'
import { Div } from "atomize";
import Form from "../components/LayoutForm";

export default function Register() {
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
      layoutForm="r"
      title="Registro"
      subtitle="Si ya tenés cuenta inicia sesión acá"
      inputs={[
        { icon: "User", placeholder: "Nombre de Usuario" },
        { icon: "Email", placeholder: "Email" },
        { icon: "UserSolid", placeholder: "Nombre Completo" },
        { icon: "password", placeholder: "Contraseña"},
        { icon: "password", placeholder: "Confirma tu Contraseña"}
      ]}
      buttons="Registrarse"
      background={
        "https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
      }
    ></Form>
  </Div>
  )
}
