import React from "react";
import { Container, Div, Row, Col, Text, Image,Anchor } from "atomize";
import InputWithRightButton from "./Inputs/InputWithRightButton";
import InputPassword from "./Inputs/InputPassword";
import ButtonWithIcon from "./Inputs/ButtonWithIcon";

export default function Login() {
  return (
    <Div
      fontFamily="primary"
      d="flex"
      justify="center"
      align="center"
      bg="brand200"
      // Responsive Height
      h={{ xs: "auto", md: "100vh" }}
      // Responsive Width
      w={{ xs: "auto", md: "100vw" }}
    >
      <Container
        m={{ r: "1rem" }}
        w="40%"
        d="flex"
        bg="brand100"
        p="2rem"
        flexDir="column"
        align="center"
        rounded="md"
        // Responsive Width
      >
        <Row w="100%">
          <Col size="6">
            <Row>
              <Col size="12" d="flex" justify="center" m={{ b: "2rem" }}>
                <Image h="4rem" w="auto" src="./pix/golb.png" />
              </Col>
              <Col size="12" >
                <Div m={{t:"3rem"}} p="1rem">
                  <InputWithRightButton icon="UserSolid"></InputWithRightButton>
                  <InputPassword></InputPassword>
                  <Div d="flex" justify="center">
                  <ButtonWithIcon></ButtonWithIcon>
                  </Div>
                  <Anchor
                      d="flex"
                      justify="center"
                      href="https://www.google.com"
                      target="_blank"
                      textColor="white"
                      m={{ t: "1rem" }}
                  >
                         ¿Primera vez? Registrate acá  ;)
                  </Anchor>
                </Div>
              </Col>
            </Row>
          </Col>
          <Col size="5" p="1rem">
            <Text
              textColor="brand400"
              tag="h1"
              textSize="display1"
              p={{ l: "4rem" }}
            >
              Inicia sesión en Golb
            </Text>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}
