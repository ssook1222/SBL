import React from "react";
import { useNavigate } from 'react-router-dom';

import Navbar from "../components/navbar"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function DB_basic(){

    const navigate = useNavigate();

    function ch3(){
        navigate('/ch3')
    }

    function ch4(){
        navigate('/ch4')
    }

    function ch6(){
        navigate('/ch6')
    }

    function ch7(){
        navigate('/ch7')
    }

    function ch8(){
        navigate('/ch8')
    }

    function ch10(){
        navigate('/ch10')
    }

    function ch11(){
        navigate('/ch11')
    }

    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            
            <img style = {{width: '100%'}} src='/img/002.png'></img>
            
            <div id = 'contents' style = {{width: "80%", margin:"auto", marginBottom: "50px", marginTop:"3%"}}>
                {
                    ['light'].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            해당 문제 풀이와 이론 내용 정리에 사용한 책은   <b>Do it! 오라클로 배우는 데이터베이스 입문</b>   입니다.
                        </Alert>
                    ))
                }   
                <br />
                   
                <Container>
                    <h4 style={{display: "inline-block"}}>문제풀이</h4>
                    <hr></hr>
                        <Row>
                            <Col>
                                <Button onClick = {ch3} variant="outline-secondary">😌 3장</Button>
                            </Col>
                            <Col>
                                <Button onClick = {ch4} variant="outline-secondary">😊 4장</Button>
                            </Col>
                            <Col>
                                <Button onClick = {ch11} variant="outline-secondary">😉 11장</Button>
                            </Col>
                        </Row>
                </Container>
                    
                <Container style={{marginTop:"30px"}}>
                    <h4 style={{display: "inline-block"}}>문제풀이 및 일부 내용 첨언</h4>
                    <hr></hr>
                        <Row>
                                <Col>
                                    <Button onClick = {ch6}  variant="outline-secondary">🫠 6장</Button>
                                </Col>
                                <Col>
                                    <Button onClick = {ch7} variant="outline-secondary">😎 7장</Button>
                                </Col>
                                <Col>
                                    <Button onClick = {ch8} variant="outline-secondary">🤫 8장</Button>
                                </Col>
                        </Row>

                        <Row style={{marginTop:"20px"}}>
                                <Col>
                                    <Button variant="outline-secondary">🫥 9장</Button>
                                </Col>
                                <Col>
                                    <Button onClick = {ch10} variant="outline-secondary">😔 10장</Button>
                                </Col>
                                <Col>
                                    <Button variant="outline-secondary">🤭 12장</Button>
                                </Col>
                        </Row>

                        <Row style={{marginTop:"20px"}}>
                                <Col>
                                    <Button variant="outline-secondary">🤔 13장</Button>
                                </Col>
                                <Col>
                                    <Button variant="outline-secondary">😂 14장</Button>
                                </Col>
                                <Col>
                                    <Button variant="outline-secondary">😇 15장</Button>
                                </Col>
                        </Row>
                </Container>
                    <hr></hr>
            </div>
                
                
            

            
            

        </>
    )
}

export default DB_basic;