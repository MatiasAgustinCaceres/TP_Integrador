import React from "react";
import { Container, Div, Row, Col, Text, Image } from "atomize";

export default function Login() {
  return (
    <Div
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
        h="70%"
        d="flex"
        bg="brand100"
        p="2rem"
        flexDir="column"
        align="center"
        rounded="md"
        // Responsive Width
      >
        <Row
        w="100%">
          <Col size="7">
            <Div d="flex" justify="center" m={{b: "2rem"}}>
                <Image h="4rem" w="auto" src="./pix/golb.png" />
            </Div>
            <Div p="1rem" bg="warning500">
              This is 7 of 12
            </Div>
          </Col>
          <Col size="5" p="1rem">
            <Text textColor="brand400" tag="h1" textSize="display1" p={{ l: "4rem" }}>
                Inicia sesión en Golb
            </Text>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}
