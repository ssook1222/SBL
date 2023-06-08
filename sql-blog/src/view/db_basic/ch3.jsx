import React from "react";

import Navbar from "../../components/navbar"

import Highlight from 'react-highlight'

function Db_post(){

    const data = {"value1" : "CONN scott/tiger; //scott이라는 계정명에 tiger라는 비밀번호\nEXIT; //접속 해제",
    "value2" : "CREATE USER scott IDENTIFIED BY tiger;",
    "value3" : "GRANT RESOURCE, CONNECT TO scott;"
    }

    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <div style={{width: "80%", marginRight:"auto", marginLeft:"auto", marginTop:"1%", marginBottom:"5%"}}>
                <div>
                    <h1>3장</h1>
                    <hr></hr>
                    <h3 style={{textAlign:"right", fontWeight:"100"}}>23-01-29</h3>
                    <h5 style={{marginBottom:"2%"}}>이론 정리</h5>
                    <h6>계정 접속 및 해제</h6>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.value1}
                        </Highlight>
                    </div>

                    <hr></hr>
                    <h6>SCOTT 계정 생성 및 권한 부여</h6>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        }}>
                        <Highlight language="SQL">
                            {data.value2}
                        </Highlight>
                    </div>
                    <p>scott이라는 계정명과 tiger라는 비밀번호를 가진 유저를 생성</p>

                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        }}>
                        <Highlight language="SQL">
                            {data.value3}
                        </Highlight>
                    </div>
                    <p>오라클에서 새로운 유저를 만들면, 그 유저에게 기본적인 롤 2가지를 부여한다.</p>
                    <div style={{marginBottom:"-1px"}}>● connect</div>
                    create session 권한 : 이 권한이 없으면 해당 유저로 접속할 수 없음
                    <div style={{marginBottom:"10px"}}></div>
                    <div style={{marginBottom:"-1px"}}>● resource</div>
                    create 트리거, 시퀀스, 타입, 프로시저, 테이블 등 8가지 권한이 부여됨.
                </div>
                <hr></hr>

            </div>    
        </>
    )

}

export default Db_post;