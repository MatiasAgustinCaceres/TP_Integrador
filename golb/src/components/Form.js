import React, { useState } from 'react';
import { Div, Row, Col, Text, Image, Anchor } from "atomize";
import InputWithRightButton from "./Inputs/InputWithRightButton";
import InputPassword from "./Inputs/InputPassword";
import ButtonWithIcon from "./Inputs/ButtonWithIcon";

export default function Form({ title, subtitle, inputs, userData}) {

  const [user,setUser] = useState(userData);

  const changeHandler = (({target: {name, value}}) => {
    setUser({...user, [name] : value});
    console.log(user);
  })

  return (
    <Row d="flex" align="center" justify="center" h="100%" w="100%">
            <Col size="12" d="flex" justify="center" m={{ b: "2rem" }}>
              <Image h="4rem" w="auto" src="./pix/golb.png" />
            </Col>
            <Col size="12" d="flex" justify="center">
              <Text
                textColor="brand400"
                tag="h1"
                textSize="display1"
                d={{ xs: "block", lg: "none" }}
              >
                {title}
              </Text>
            </Col>
            <Col size="12" h="100%">
              <Div m={{ xs: "", md: { t: "3rem" } }} p="1rem">
                {inputs.map((obj, i) => {
                  if (obj.icon === "password") return <InputPassword placeholder={obj.placeholder} inputName={obj.inputName} key={i} func={changeHandler}/>;
                  return (
                    <InputWithRightButton
                      placeholder={obj.placeholder}
                      icon={obj.icon}
                      key={i}
                      func={changeHandler}
                      inputName={obj.inputName}
                    ></InputWithRightButton>
                  );
                })}

                <Div d="flex" justify="center">
                  <ButtonWithIcon text="Registrarse"></ButtonWithIcon>
                </Div>
                <Anchor
                  d="flex"
                  justify="center"
                  href="https://www.google.com"
                  target="_blank"
                  textColor="white"
                  m={{ t: "1rem" }}
                >
                  {subtitle}
                </Anchor>
              </Div>
            </Col>
          </Row>
  )
}
