import { Col, Div, Row } from 'atomize';
import { React, useState } from 'react';
import Sidebar from "../components/Navigation/Sidebar";
import { useAuth } from '../context/authContext';
import LoadingPage from './LoadingPage';
import PostCard from '../components/PostCard';

export default function HomePage() {

  const [loading, setLoading] = useState(true);
  const { user } = useAuth();


  return (
    <Div>
      <LoadingPage state={loading} ></LoadingPage>
      <Sidebar setLoading={setLoading}></Sidebar>
      <Row w="100%" p={{l:"78px"}}>
        <Col size="12">
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </Col>
      </Row>
      {
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      }
    </Div>
  )
}
