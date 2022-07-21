import { Button, Col, Div, Icon, Row, Tag, Text } from 'atomize'
import React from 'react'

export default function PostCard({title, body, picture, tags,size, author}) {

    if(!size) size = "7"
    if(!body) body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non faucibus nulla. Mauris vehicula felis condimentum eros fermentum, vitae maximus mauris placerat. Vivamus tristique, erat in blandit fringilla, massa leo viverra magna, sit amet lacinia lorem dolor sit amet dolor. Suspendisse blandit tristique consectetur. Aliquam pretium lacus eget metus venenatis, in lacinia diam consequat. In laoreet mauris ac efficitur iaculis. Ut ultrices dolor ipsum, eget facilisis orci porttitor vel. Vivamus venenatis eget lectus eu dignissim."
    if(!title) title = "Titulo del Post"

    return (
        <Row
            m={{ t: "2rem" }}
            d="flex"
            align="center"
            justify="center"
        >
            <Col
                size={size}
            >
                <Div
                    rounded={{ tl: "md", tr: "md" }}
                    bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    bgSize="cover"
                    bgPos="center"
                    h="10rem"

                    d="flex"
                    justify="center"
                    align="center"
                >
                    <Div rounded={{ tl: "md", tr: "md" }}
                        pos="relative" d="flex" align="flex-end" p={{ b: '1rem' }} justify="center" h="100%" w="100%" bg="rgba(0,0,0,0.5)" textColor="white" textSize="display3" textAlign="center">
                        <Button
                            pos="absolute"
                            h="2.5rem"
                            w="2.5rem"
                            bg="danger700"
                            hoverBg="danger600"
                            rounded="circle"
                            m={{ r: "1rem" }}
                            shadow="2"
                            hoverShadow="4"
                            top="1rem"
                            left="2rem"
                        >
                            <Icon name="DeleteSolid" size="20px" color="white" />
                        </Button>
                        <Div pos="absolute" right="2rem" top="-1rem">
                            {tags.map((obj, i)=>{
                                return(
                                    <Tag key={i} m={{ r: "1rem" }}>{obj}</Tag>
                                )
                            })}
                        </Div>
                        {title}
                    </Div>
                </Div>
                <Div m={{ t: "1rem" }} p={{ l: '1rem' }}>

                    <Text tag="p" textSize="paragraph">
                        {body}
                    </Text>
                </Div>
                <Div m={{ t: "1rem" }} p={{ l: '1rem' }} d="flex" align="center" justify="space-between"
                    rounded={{ bl: "md", br: "md" }}
                    bg="gray200"
                    minH="70px"
                >
                    <Text tag="p" textSize="caption" w="50%" >
                        Escrito por : {author}
                    </Text>
                    <Button
                        h="2.5rem"
                        w="2.5rem"
                        bg="warning700"
                        hoverBg="warning600"
                        rounded="circle"
                        m={{ r: "1rem" }}
                        shadow="2"
                        hoverShadow="4"
                    >
                        <Icon name="Email" size="20px" color="white" />
                    </Button>
                </Div>
            </Col>
        </Row>
    )
}
