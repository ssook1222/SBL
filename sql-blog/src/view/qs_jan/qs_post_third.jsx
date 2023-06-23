import React from "react";

import Navbar from "../../components/navbar"
import data from "../qs_jan/qs_post_third.json"

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
                    <div>JOIN할 때 Having 절 조건 즉, 그룹화된 조건에서 데이터를 사전에 처리하고 가져와서 조인하면 사라지는 데이터가 있는 듯</div>
                    <div>따라서 먼저 그룹화할 때 처리를 하지 말고 조인 이후에 Where 절로 나중에 처리해야 정답 처리 되고 있음.</div>
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
                <div>우유도 사고 요거트도 산 케이스만 뽑아내면 됨</div>
                <div>굳이 With를 쓸 필요가 있었을까 싶긴 함...ㅋㅋㅋㅋ</div>
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
                    <div>group by와 다르게 SELECT절에 명시 안 한 칼럼이어도 <i>order by</i>에서는 사용 가능하다.</div>
                    
                </div>
                
            </div>    
        </>
    )

}

export default Db_post;