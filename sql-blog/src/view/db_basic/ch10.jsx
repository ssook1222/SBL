import React from "react";

import Navbar from "../../components/navbar"
import data from "../../view/db_basic/ch10.json"

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
                    <div>
                        <h6>테이블과 같은 열 구조를 가지지만 데이터는 복사하고 싶지 않을 때 사용함.</h6>
                        <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code0}
                        </Highlight>
                    </div>
                    </div>
                    
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
                
                <div>
                    <hr></hr>
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
                    <div> UPDATE를 두 개 이상 동시에 적용하기 위해서는 ,(콤마)를 사용하여 조건으로 걸어주면 된다. </div>
                </div>

                <div>
                    <hr></hr>
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

            </div>    
        </>
    )

}

export default Db_post;