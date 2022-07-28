import { Col, Div, Row } from 'atomize';
import { React, useEffect, useState } from 'react';
import Sidebar from "../components/Navigation/Sidebar";
import LoadingPage from './LoadingPage';
import PostCard from '../components/PostCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/authContext';

export default function HomePage() {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const postsColectionRef = collection(db, "posts");
  const { user } = useAuth();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsColectionRef);
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getPosts();

    console.log(posts);
  });

  return (
    <Div>
      <LoadingPage state={loading} ></LoadingPage>
      <Sidebar setLoading={setLoading}></Sidebar>
      <Row w="100%" p={{l:"78px"}}>
        <Col size="12">
          {posts.map((post) => { 
            return <PostCard id={post.id} tags={post.tags} picture={post.picture} title={post.title} body={post.body} author={post.author.email} idView={user.uid} idauthorPost={post.author.id}/>
          })}
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
