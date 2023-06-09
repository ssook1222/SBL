import React from "react";

import Navbar from "../../components/navbar"
import data from "../qs_jan/qs_post_fifth.json"

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
                    </div>
                    <div>END_DATE - START_DATE + 1. 1을 더해줘야 기간이 제대로 나온다.</div>
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
                    <div>WITH 구문 써서 풀었음</div>
                    <div>개인적으로는 INNER JOIN 사용해갖구 명시한 다음 푸는 게 더 깔끔했을 듯</div>

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

                </div>
            </div>            
        </>
    )
}

export default Db_post;