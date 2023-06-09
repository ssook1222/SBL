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

    function janSecond(){
        navigate('/jan-second')
    }

    function janThird(){
        navigate('/jan-third')
    }

    function janFourth(){
        navigate('/jan-fourth')
    }

    function janFifth(){
        navigate('/jan-fifth')
    }
    
    function fabThird(){
        navigate('/fab-third')
    }

    function marchFirst(){
        navigate('/march-first')
    }

    function aprilFirst(){
        navigate('/april-first')
    }

    function aprilThird(){
        navigate('/april-third')
    }

    function mayFirst(){
        navigate('/may-first')
    }

    function juneFirst(){
        navigate('/june-first')
    }

    function juneSecond(){
        navigate('/june-second')
    }

    function juneThird(){
        navigate('/june-third')
    }

    function JulyFirst(){
        navigate('/july-first')
    }

    function JulySecond(){
        navigate('/july-second')
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
                                        <Button onClick = {janSecond} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🐥 1월 2주차
                                        </Button>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick = {janThird} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🎈 1월 3주차
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button onClick = {janFourth} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🤩 1월 4주차
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick = {janFifth} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🙃 1월 5주차
                                        </Button>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="two" title="2월">
                                <Button onClick = {fabThird} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                    🥰 2월 3주차
                                </Button>
                            </Tab>
                            <Tab eventKey="three" title="3월">
                                <Button onClick = {marchFirst} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                    😖 3월 4주차
                                </Button>
                            </Tab>
                            <Tab eventKey="four" title="4월">
                                <Row>
                                    <Col>
                                        <Button onClick = {aprilFirst} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🎀 4월 3주차
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button onClick = {aprilThird} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🕶️ 4월 4주차
                                        </Button>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="five" title="5월">
                                <Button onClick = {mayFirst} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                    🤓 5월 4주차
                                </Button>
                            </Tab>
                            <Tab eventKey="six" title="6월">
                                <Row>
                                    <Col>
                                    <Button onClick = {juneFirst} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                        🐈‍⬛ 6월 1주차
                                    </Button>
                                    </Col>

                                    <Col>
                                    <Button onClick = {juneSecond} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                        🎆 6월 2주차
                                    </Button>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                    <Button onClick = {juneThird} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                        🐈 6월 3주차
                                    </Button>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="seven" title="7월">
                                <Row>
                                    <Col>
                                        <Button onClick = {JulyFirst} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                            🎃 7월 1주차
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button onClick = {JulySecond} style ={{backgroundColor:"white", fontWeight:"100"}} variant="light">
                                        😻 7월 2주차
                                        </Button>
                                    </Col>
                                </Row>
                                
                                
                            </Tab>
                        </Tabs>
                </Container>
                </div> 
            </div>
            

            


        </>
    )
}

export default Query_solve;