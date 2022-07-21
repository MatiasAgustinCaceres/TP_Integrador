import { Button, Col, Div, Icon, Input, Row, Tag, Textarea } from 'atomize'
import React, { useState } from 'react'
import Sidebar from '../components/Navigation/Sidebar';
import PostCard from '../components/PostCard'
import { useAuth } from '../context/authContext';

export default function CreatePost() {

    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState({ title: '', body: '', tags: ["Tag 1"] });
    const [tag, setTag] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        setPost({ ...post, [name]: value })
        console.log(post);
    };

    const handleTagSearch = ({ target: { name, value } }) => {
        setTag(value)
    };

    return (
        <>
        <Sidebar></Sidebar>
        <Row d="flex" align="center" justify="center" w="100%" p={{l:"98px", r:"20px"}}>
            <Col size="4">
                <Row>
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
                                    <Button
                                        pos="absolute"
                                        onClick={() => {
                                            post.tags.push(tag);
                                            setTag('');
                                        }}
                                        bg="transparent"
                                        w="3rem"
                                        top="0"
                                        right="0"
                                        rounded={{ r: "md" }}
                                        name="tags">
                                        <Icon
                                            name={isLoading ? "Loading" : "Search"}
                                            color={isLoading ? "gray900" : "black"}
                                            size="16px"
                                        />
                                    </Button>
                                }
                            />
                            {post.tags.map((obj, i) => {
                                return (
                                    <Tag
                                        onClick={
                                            (obj) => setPost(
                                                    {'tags': post.tags.filter((item) => item !== obj.target.innerText)}
                                                )
                                        }
                                        m={{ r: "1rem", t: "1rem" }}
                                        cursor="pointer"
                                        key={i}
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
            </Col>
            <Col size="7">
                <PostCard tags={post.tags} title={post.title} body={post.body} author={"email@example.com"} size="9"></PostCard>
            </Col>
        </Row>
        </>
    )
}
