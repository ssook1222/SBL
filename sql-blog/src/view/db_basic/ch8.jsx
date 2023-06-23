import React from "react";

import Navbar from "../../components/navbar"
import data from "./ch8.json"

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
                    <div>
                        <h5>SELECT 절에서 * 사용하지 않는 이유</h5>
                        <div>SELECT 절에서 출력할 열을 *로 표시할 경우 어떤 열이 어떤 순서로 출력되는지 명확히 알 수 없을 뿐만 아니라,</div>
                        <div>특정 열이 새로 생기거나 삭제되거나 또는 어떤 이유로 수정되었을 경우에 그 변화의 감지 및 변화에 따른 프로그램 수정이 쉽지 않을 수도 있기 때문</div>
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
                    <div>JOIN을 여러 개 할 때 하나의 테이블을 기준 테이블로 잡고, 조인할 테이블을 넣어주면 됨</div>
                    <div>등가 조인 외에도 비등가 조인이 있음. ON 조건에 등가(=) 할 필요 없이 Between이나 부등호로 조인 조건을 걸 수 있음.</div>
                    <div>셀프 조인의 경우 같은 Primary Key로 하면 어차피 똑같은 결과가 나오므로, 셀프 조인을 진행할 때는 어떤 열을 조인할 지 생각해두기.</div>
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

            </div>    
        </>
    )

}

export default Db_post;