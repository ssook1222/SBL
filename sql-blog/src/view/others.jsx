import React from "react";
import { useNavigate } from 'react-router-dom';

import Navbar from "../components/navbar"
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Others(){

    const navigate = useNavigate();

    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>

            <img style = {{width: '100%'}} src='/img/005.png'></img>

            <div id = 'contents' style = {{width: "80%", margin:"auto", marginBottom: "100px", marginTop:"3%"}}>
                {
                    ['light'].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            학습 내용 외의 <b>SQL 및 데이터 분석 관련 자격증, 프로그램, 공모전 후기들을 남기는 곳</b>입니다.
                        </Alert>
                    ))
                } 

        <Row style={{display:"block", marginTop: "1%"}}>
            <Col>
                <Card style={{ width: '18rem', margin:"auto" }}>
                    <Card.Img variant="top" src="/img/ceft.png" />
                    <Card.Body>
                        <Card.Title>SQLD, ADSP, DASP 자격증 취득 후기</Card.Title>
                        <Card.Text>
                            오늘 딱 DASP 자격증 취득을 끝내며, <br></br>
                            한국데이터산업진흥원에서 주관하는 자격증들 중 빅분기(빅데이터분석기사)를 제외한 자격증 취득을 완료했다!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="/cert">포스팅으로 이동</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        

            </div>

        </>
    )

}

export default Others;