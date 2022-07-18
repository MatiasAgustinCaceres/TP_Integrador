import { Div, Icon } from 'atomize'
import React from 'react'

export default function LoadingPage({state}) {

  return (
    <Div
    bg="white"
    pos="absolute"
    left="-100vw"
    h="100vh"
    w="100vw"
    d="flex"
    justify="center"
    align="center"
    transition="custom"
    style={{
        transform: state
          ? "translateX(100vw)"
          : "translateX(0)"
      ,
      zIndex:"100"
    }}
    >
        <Icon name="Loading" color="#07c8ff" size="100px" />
    </Div>
    )
}
