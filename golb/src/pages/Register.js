import React, { useState } from 'react'
import { Div, Icon, Notification } from "atomize";
import LayoutForm from "../components/LayoutForm";
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const { signup, user } = useAuth();

  const [error, setError] = useState();
  const [errorAlert, setErrorAlert] = useState(false);

  const navigate = useNavigate();

  const action = async userData => {
    try {
      await signup(userData);
      navigate("/");
    } catch (err) {
      setError(err.message);
      setErrorAlert(true);
    }
  };

  if (user) navigate("/");

  return (
    <Div
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
      <LayoutForm
        actionName="Registrarse"
        action={action}
        color="secundary"
        layoutForm="r"
        title="Registro"
        subtitle={{ text: "Si ya tenés cuenta venite por acá :)", link: "/login" }}
        inputs={[
          { icon: "Email", placeholder: "Email", inputName: "email", type: "email" },
          { icon: "Email", placeholder: "Confirma tu Email", inputName: "emailConfirm", type: "email" },
          { icon: "password", placeholder: "Contraseña", inputName: "password" },
          { icon: "password", placeholder: "Confirma tu Contraseña", inputName: "passwordConfirm" }
        ]}
        buttons="Registrarse"
        background={
          require("./Login/register-image.png")
        }
        userData={{
          email: "",
          password: ""
        }}
      ></LayoutForm>
    </Div>
  )
}
