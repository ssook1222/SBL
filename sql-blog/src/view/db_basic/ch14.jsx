import React from "react";

import Navbar from "../../components/navbar"
import data from "../../view/db_basic/ch14.json"

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
                        
                    <h5>제약조건</h5>
                    <div>테이블의 특정 열에 지정하며, 지정한 열에 제약 조건에 부합하지 않는 데이터를 저장할 수 없음</div>
                    <div>제약 조건 지정 방식에 따라 기존 데이터의 수정이나 삭제 가능 여부도 영향을 받음</div>
                    <div>제약 조건을 지정한 열은 항상 제약 조건을 만족해야 하므로 신규 데이터의 삽입 뿐만 아니라 기존 데이터의 수정 및 삭제에도 영향을 줌</div>
                    <br></br>
                    </div>

                    <hr></hr>

                    <div>
                    <h5>제약 조건 이름 직접 지정</h5>
                    <div>제약 조건에 따로 이름을 지정해주지 않을 경우 오라클에서 자동으로 이름이 지정됨.</div>
                    <div>제약 조건에 이름을 직접 지정하려면 CONTSTRAINT 키워드를 사용하여 설정</div>
                    <div>실무에서는 이름 붙이는 규칙을 정하여 제약 조건 이름을 직접 지정하는 경우가 많음</div>
                    <br></br>
                    </div>
                    
                    <hr></hr>

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