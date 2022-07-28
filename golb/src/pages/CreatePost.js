import { Button, Col, Div, Icon, Input, Notification, Row, Tag, Textarea } from 'atomize'
import React, { useState } from 'react'
import Sidebar from '../components/Navigation/Sidebar';
import PostCard from '../components/PostCard'
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from '../context/authContext';

export default function CreatePost() {

    const { user } = useAuth();
    const [isLoading] = useState(false);
    const [post, setPost] = useState({ title: '', body: '', tags: ["Tag 1"], picture: '', author: { email: user.email, id: user.uid } });
    const [tag, setTag] = useState('');
    const [uploadValue, setUploadValue] = useState(false);
    const [picture, setPicture] = useState(null);
    const [file, setFile] = useState(null);

    const postsColectionRef = collection(db, "posts")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const storageRef = ref(storage, '/' + file.name + user.email);

        await uploadBytes(storageRef, file);
        
        getDownloadURL(ref(storage, '/' + file.name + user.email)).then((url) => {
            console.log(url);
            const aux = url
            setPost({ title: post.title, body: post.body, tags: post.tags, picture: aux, author: { email: user.email, id: user.uid } });
            console.log(post);
            addDoc(postsColectionRef, post);
            setUploadValue(true);
        }).catch((error) => console.error(error))
    };

    const handlePush = () => {
        post.tags.push(tag);
        setTag('');
    };

    const handleUpload = async (event) => {
        const file = event.target.files[0];
        setPicture(URL.createObjectURL(file));
        setFile(file);
    };

    const handleChange = ({ target: { name, value } }) => {
        setPost({ ...post, [name]: value })
    };

    const handleTagSearch = ({ target: { name, value } }) => {
        setTag(value)
    };

    return (
        <>
            <Sidebar></Sidebar>
            <Notification
                bg="success700"
                isOpen={uploadValue}
                onClick={() => setUploadValue(false)}
                prefix={
                    <Icon
                        name="CloseSolid"
                        color="white"
                        size="18px"
                        m={{ r: "0.5rem" }}
                    />
                }
            >
                Imagen Subida
            </Notification>
            <Row d="flex" align="center" justify="center" w="100%" p={{ l: "98px", r: "20px" }}>
                <Col size="4">
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col size="12">
                                <Div m={{ b: "2rem", t: "2rem" }} w="100%" d="flex" justify="center">
                                    <input placeholder="Portada del Post" name="picture" type="file" onChange={handleUpload} style={{
                                        display: "block"
                                    }} />
                                </Div>
                            </Col>
                            <Col size="12">
                                <Input placeholder="Titulo del Post" name="title" onChange={handleChange} />
                            </Col>
                            <Col size="12">
                                <Div m={{ t: "2rem" }}>
                                    <Textarea placeholder="Cuerpo del post" name="body" onChange={handleChange} />
                                </Div>
                            </Col>
                            <Col size="12">
                                <Div m={{ t: "2rem" }}>
                                    <Input
                                        placeholder="Buscar tags"
                                        value={tag}
                                        onChange={handleTagSearch}
                                        suffix={
                                            <Div 
                                                pos="absolute"
                                                right="15px"
                                                bg="transparent"
                                                d="flex"
                                                justify="center"
                                                align="center"
                                                h="100%"
                                                rounded={{ r: "md" }}
                                                name="tags">
                                                <Icon
                                                    onClick={() => {
                                                        handlePush();
                                                    }}
                                                    name={isLoading ? "Loading" : "Search"}
                                                    color={isLoading ? "gray900" : "black"}
                                                    size="16px"
                                                />
                                            </Div>
                                        }
                                    />
                                    {post.tags.map((obj, i) => {
                                        return (
                                            <Tag
                                            m={{ r: "1rem", t: "1rem" }}
                                            type="button"
                                            cursor="pointer"
                                            key={i}
                                            onClick={
                                                (obj) => setPost(
                                                    { ...post, tags: post.tags.filter((item) => item !== obj.target.innerText) }
                                                )
                                            }
                                                suffix={
                                                    <Icon
                                                        name="Cross"
                                                        size="12px"
                                                        m={{ l: "1rem" }}
                                                    />
                                                }
                                            >
                                                {obj}
                                            </Tag>
                                        )
                                    })}
                                </Div>
                            </Col>
                        </Row>
                        <Button
                            type="submit"
                            w="4rem"
                            m={{ t: "2rem" }}
                            top="0"
                            right="0"
                            name="tags">
                            Subir
                        </Button>
                    </form>
                </Col>
                <Col size="7">
                    <PostCard tags={post.tags} picture={picture} title={post.title} body={post.body} author={"email@example.com"} size="9"></PostCard>
                </Col>
            </Row>
        </>
    )
}
