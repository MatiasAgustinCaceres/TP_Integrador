//import { Col, Container, Image, Row, Text } from 'atomize';
import { React } from 'react';
//import { styled } from "styletron-react";
import Sidebar from "../components/Navigation/Sidebar";
//import theme from "../theme";

/*

  const Nav = styled("nav", props => ({
    padding:"0.2rem",
    background: theme.colors.brand200,
    width: "100vw",
    height: "calc(40px+0.2rem)"
  }));

    <Nav>
      <Container>
        <Row>
          <Col size="2" h="100%" d="flex" justify="space-between" align="center">
          <Image h="40px" w="auto" src="./pix/golb.png" />
            <Text
              tag="h1"
              d={{ xs: "none", lg: "block" }}
              p={{ lg: { l: "4rem" } }}
              textColor={"brand400"}
              textSize="display1"
            >golb</Text>
          </Col>
          <Col size="8"></Col>
        </Row>
      </Container>
      <Sidebar></Sidebar>
    </Nav>
*/

export default function HomePage() {
  return (
    <Sidebar></Sidebar>
  )
}
