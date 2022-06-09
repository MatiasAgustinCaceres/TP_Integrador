import React from "react";
import { Container, Div, Row, Col, Text} from "atomize";
import Form from "./Form";

/*
TODO
Ver si es posible definir de forma dinamica un json
*/

export default function LayoutForm({ layoutForm ,title, subtitle, inputs, background, buttons, userData }) {

  let left;
  let right;
  let rounded;

  if(layoutForm === "l"){
    rounded = { tr: { lg: "circle" }, br: { lg: "circle" } };
  }else{
    rounded = { tl: { lg: "circle" }, bl: { lg: "circle" } };
  }

  const form = (
  <Col size={{ xs: "12", md: "12", lg: "6" }}>
    <Form title={title} subtitle={subtitle} inputs={inputs} buttons={buttons} userData={userData} ></Form>
  </Col>
  );

  const card = (
    <Col
          size={{ xs: "12", md: "12", lg: "6" }}
          d={{ xs: "none", md: "none", lg: "flex" }}
          justify="center"
          align="center"
          p="1rem"
          h="100%"
          bgImg={background}
          bgSize="cover"
          bgPos="center"
          rounded={rounded}
        >
          <Div
            h="100%"
            w="100%"
            d="flex"
            justify="center"
            align="center"
            rounded={rounded}
          >
            <Text
              tag="h1"
              d={{ xs: "none", lg: "block" }}
              p={{ lg: { l: "4rem" } }}
              textColor="brand400"
              textSize="display1"
              bg="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"
            ></Text>
          </Div>
        </Col>
  );



  if(layoutForm === "l"){
    left = form;
    right = card;
  }else{
    right = form;
    left = card;
  }

  return (
    <Container
      w={{ xs: "100%", lg: "80%", md: "60%" }}
      minW="3rem"
      maxW="950px"
      h={{ xs: "100%", md: "60%" }}
      d="flex"
      flexDir="column"
      align="center"
      justify={{ md: "center", xs: "center" }}
      bg="brand100"
      p={{ lg: { l: "2rem" } }}
      rounded={rounded}
    >
      <Row
        w="100%"
        h={{ md: "100%", xs: "" }}
        d="flex"
        align="center"
        justify="space-between"
      >
        {left}
        {right}
      </Row>
    </Container>
  );
}
