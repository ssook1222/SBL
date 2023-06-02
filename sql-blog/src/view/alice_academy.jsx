import React from "react";
import { useState } from 'react';

import Navbar from "../components/navbar"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main_view(){

    const [key, setKey] = useState('first');

    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <img style = {{width: '100%'}} src='/img/004.png'></img>

            <div id = 'contents' style = {{width: "80%", margin:"auto", marginBottom: "100px", marginTop:"3%"}}>
                {
                    ['light'].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            해당 문제의 출처 플랫폼은 <b>Alice Academy</b> 입니다
                        </Alert>
                    ))
                } 
                <br /> 
                <div>
                <Container>
                <h4 style={{display: "inline-block", textAlign:"right", width:"100%", marginBottom:"10px"}}>문제풀이</h4>
                <hr></hr>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ch1</Card.Title>
                                <Card.Text>
                                    DDL, 기초 쿼리 문제 
                                </Card.Text>
                                <Button style={{fontWeight:"100", color:"black", marginTop:"10px"}} variant="outline-light"> 
                                    확인하러 가기
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ch2</Card.Title>
                                <Card.Text>
                                    DDL, 집계함수 문제 
                                </Card.Text>
                                <Button style={{fontWeight:"100", color:"black", marginTop:"10px"}} variant="outline-light"> 
                                    확인하러 가기
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ch3</Card.Title>
                                <Card.Text>
                                    조금 심화된 DDL, 조회 문제 
                                </Card.Text>
                                <Button style={{fontWeight:"100", color:"black", marginTop:"10px"}} variant="outline-light"> 
                                    확인하러 가기
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ch4</Card.Title>
                                <Card.Text>
                                    조금 더 심화된 쿼리 문제 
                                </Card.Text>
                                <Button style={{fontWeight:"100", color:"black", marginTop:"10px"}} variant="outline-light"> 
                                    확인하러 가기
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                
                        
                </Container>
                </div> 
            </div>

        </>
    )
}

export default Main_view