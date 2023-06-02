import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from "../components/navbar"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './query_solve.css'

function Query_solve(){

    const [key, setKey] = useState('one');
    const navigate = useNavigate();

    function janFirst(){
        navigate('/jan-first')
    }

    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>

            <img style = {{width: '100%'}} src='/img/003.png'></img>

            <div id = 'contents' style = {{width: "80%", margin:"auto", marginBottom: "100px", marginTop:"3%"}}>
                {
                    ['light'].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            해당 문제의 출처 플랫폼은 <b>프로그래머스, LeetCode, Hacker Rank</b> 입니다
                        </Alert>
                    ))
                } 
                <br /> 
                <div>
                <Container>
                <h4 style={{display: "inline-block", textAlign:"right", width:"100%", marginBottom:"10px"}}>문제풀이</h4>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab eventKey="one" title="1월">
                                <Row>
                                    <Col>
                                        <Button onClick = {janFirst} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🌸 1월 1주차
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🐥 1월 2주차
                                        </Button>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    <Col>
                                        <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🎈 1월 3주차
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🤩 1월 4주차
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🙃 1월 5주차
                                        </Button>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="two" title="2월">
                                <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                    🥰 2월 3주차
                                </Button>
                            </Tab>
                            <Tab eventKey="three" title="3월">
                                <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                    😖 3월 4주차
                                </Button>
                            </Tab>
                            <Tab eventKey="four" title="4월">
                                <Row>
                                    <Col>
                                        <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🎀 4월 3주차
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🕶️ 4월 4주차
                                        </Button>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="five" title="5월">
                                <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                    🤓 5월 4주차
                                </Button>
                            </Tab>
                            <Tab eventKey="six" title="6월">
                                <Button style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                    🐈‍⬛ 6월 1주차
                                </Button>
                            </Tab>
                        </Tabs>
                </Container>
                </div> 
            </div>
            

            


        </>
    )
}

export default Query_solve;