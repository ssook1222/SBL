import React from "react";

import Navbar from "../../components/navbar"
import data from "../qs_fab/qs_post_third.json"

import Highlight from 'react-highlight'

function Db_post(){
    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <div style={{width: "80%", marginRight:"auto", marginLeft:"auto", marginTop:"1%", marginBottom:"5%"}}>
            <div>
                    <div>
                        <h1>{data.title}</h1>
                        <hr></hr>
                        <h3 style={{textAlign:"right", fontWeight:"100"}}>{data.date}</h3>
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
                        <div>
                            <i>LIKE</i>를 써서 풀었지만, <i>CONTAINS</i>도 사용가능함.
                        </div>
                        <div>아래는 CONTAINS 관련 오라클 공식 문서 링크임.</div>
                        <a 
                            style = {{textDecoration:"none"}}
                            href="https://docs.oracle.com/database/121/CCAPP/GUID-5BE34ED3-4B35-412A-BD53-E3F663B9EB8C.htm">공식 문서 확인하러 이동</a>
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
                    <div>3중으로 중첩해서 쿼리를 썼기 때문에 성능 면에서 좋은지는 잘 모르겠음.</div>
                    <div><i>WITH</i>문 안에서 <i>WITH</i>문 또 선언하면 에러가 남</div>
                </div>

            </div>
        </>
    )
}

export default Db_post;