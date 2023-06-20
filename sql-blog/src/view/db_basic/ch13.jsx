import React from "react";

import Navbar from "../../components/navbar"
import data from "../../view/db_basic/ch13.json"

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
                    
                    <div>
                    <div>오라클 데이터베이스 테이블은 <b>사용자 테이블과 데이터 사전</b>으로 나뉨</div>
                    <div>데이터 사전은 데이터베이스를 구성하고 운영하는 데 필요한 모든 정보를 저장하는 특수한 테이블로 데이터베이스가 생성되는 시점에 자동으로 만들어짐</div>
                    <div> → 이 데이터에 문제가 발생한다면 오라클 데이터베이스 사용이 불가능해질 수 있음</div>
                    <div>따라서, 사용자가 데이터 사전 정보에 직접 접근하거나 작업하는 것을 허용하지 않음</div>
                    <div>대신 데이터 사전 뷰를 제공하여 SELECT 문으로 정보 열람을 할 수 있게 해 둠</div>
                    <br></br>
                    </div>
                    
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
                    <hr></hr>
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
        </>
    )

}

export default Db_post;