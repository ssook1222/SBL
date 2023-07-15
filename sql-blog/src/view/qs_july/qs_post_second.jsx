import React from "react";

import Navbar from "../../components/navbar"
import data from "../qs_july/qs_post_first.json"

import Highlight from 'react-highlight'

function Db_post(){
    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <div style={{width: "80%", marginRight:"auto", marginLeft:"auto", marginTop:"1%", marginBottom:"5%"}}>
                <div>
                    <h1>{data.title}</h1>
                    <hr></hr>
                    <h4 style={{textAlign:"right", fontWeight:"100"}}>{data.date}</h4>
                    <h5 style={{marginBottom:"2%"}}>{data.subTitle1}</h5>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code1}
                        </Highlight>
                    </div>
                    <div>오라클에는 괄호 안 문자열의 각 단어를 첫 글자는 대문자로 나머지는 소문자로 변경하는 initcap 함수가 있음!</div>
                </div>
                <hr></hr>

                <div>
                    <h5 style={{marginBottom:"2%"}}>{data.subTitle2}</h5>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code2}
                        </Highlight>
                    </div>
                </div>
                <hr></hr>

                <div>
                    <h5 style={{marginBottom:"2%"}}>{data.subTitle3}</h5>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code3}
                        </Highlight>
                    </div>
                    <div>
                    먼저, CROSS JOIN Subjects SUB구문은 Students 테이블과 Subjects 테이블을 조인합니다.  <br></br>
                    CROSS JOIN은 두 테이블 간의 모든 가능한 조합을 생성하므로, Students테이블의 각 학생과 Subjects테이블의 모든 과목의 조합을 생성합니다.  <br></br>
                    이로써 모든 학생이 모든 과목을 포함한 결과 집합을 얻을 수 있습니다. <br></br>   
                    그 다음, LEFT JOIN Examinations E ON S.student_id = E.student_id AND SUB.subject_name = E.subject_name <br></br>
                    구문은 Examinations 테이블을 Students와 Subjects` 테이블과 조인합니다. <br></br>
                    </div>
                </div>
                <hr></hr>

                <div>
                    <h5 style={{marginBottom:"2%"}}>{data.subTitle4}</h5>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code4}
                        </Highlight>
                    </div>
                </div>
                <hr></hr>

                <div>
                    <h5 style={{marginBottom:"2%"}}>{data.subTitle5}</h5>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code5}
                        </Highlight>
                    </div>
                </div>
                <hr></hr>

                <div>
                    <h5 style={{marginBottom:"2%"}}>{data.subTitle6}</h5>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code6}
                        </Highlight>
                    </div>
                </div>
                <hr></hr>
            </div>    
        </>
    )

}

export default Db_post;