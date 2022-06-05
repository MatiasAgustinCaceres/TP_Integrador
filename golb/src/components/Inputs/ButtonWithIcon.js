import React from 'react';
import { Button, Icon } from 'atomize';


export default function ButtonWithIcon() {
  return (
    <Button
    m={{t: "0.8rem"}}
    suffix={
      <Icon
        name="Next"
        size="1.5rem"
        color="white"
        m={{ l: "1rem" }}
      />
    }
    shadow="3"
    hoverShadow="4"
    bg="brand300"
    textWeight="500"
  >
    Iniciar Sesion
  </Button>

  )
}
