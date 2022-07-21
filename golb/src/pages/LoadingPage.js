import { Div, Icon } from 'atomize'
import React from 'react'

export default function LoadingPage({state}) {

  return (
    <Div
    bg="white"
    pos="absolute"
    h="100vh"
    w="100vw"
    d="flex"
    justify="center"
    align="center"
    transition="custom"
    style={{
        top: "0",
        left:"-105vw",
        transform: state
          ? "translateX(100vw)"
          : "translateX(0)"
        ,
        overflow: "hidden"
        ,
        zIndex:"100"
    }}
    >
        <Icon name="Loading" color="#07c8ff" size="100px" style={{transform: "translateX(5vw)"}}/>
    </Div>
    )
}
