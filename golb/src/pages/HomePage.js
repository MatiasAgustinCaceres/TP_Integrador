import { Col, Div, Row, Text } from 'atomize';
import { React, useState } from 'react';
import Sidebar from "../components/Navigation/Sidebar";
import { useAuth } from '../context/authContext';
import LoadingPage from './LoadingPage';

export default function HomePage() {

  const [loading, setLoading] = useState(true);
  const { user } = useAuth();


  return (
    <>
      {<LoadingPage state={loading} ></LoadingPage>}
      <Sidebar setLoading={setLoading}></Sidebar>
      <Div
        bg="secundary500"
        minH="400px"
        m={{ l: "78px" }}
        p="1rem"
      >
        <Row>
          <Col size="12">
            <Div p="1rem">
              <Text textColor="white" textAlign="left" textSize="display1">
                Es bueno tenerte de vuelta 
                <i style={{color: "white", marginLeft: "1rem"}} class='bx bxs-heart md'></i>
              </Text>
            </Div>
          </Col>
          <Col size="7">
            <Div p="1rem" bg="warning500">
              This is 7 of 12
            </Div>
          </Col>
        </Row>
      </Div>
      {
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      }
    </>
  )
}
