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
                    </div>

                    <hr></hr>

                    <div>
                    <h5>제약 조건 이름 직접 지정</h5>
                    <div>제약 조건에 따로 이름을 지정해주지 않을 경우 오라클에서 자동으로 이름이 지정됨.</div>
                    <div>제약 조건에 이름을 직접 지정하려면 CONTSTRAINT 키워드를 사용하여 설정</div>
                    <div>실무에서는 이름 붙이는 규칙을 정하여 제약 조건 이름을 직접 지정하는 경우가 많음</div>
                    </div>

                    <hr></hr>
                    <div>
                    <h5>제약 조건을 지정하는 다른 방식</h5>
                    <b>- 인라인, 열 레벨 제약 조건 정의</b>
                    <div>열 바로 옆에 제약 조건을 지정하는 형식</div>
                    <b>- 아웃오브라인, 테이블 레벨 제약 조건 정의</b>
                    <div>NOT NULL 제약 조건을 제외한 제약 조건 지정이 가능</div>
                    </div>
                    
                    <hr></hr>
                    <div>
                    <h5>Foreign key 지정하기</h5>
                    <b>참고 대상을 지정하는 문법</b>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginTop:"2%",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code0}
                        </Highlight>
                    </div>
                    <div>제약 조건 이름을 지정하지 않고 외래 키를 지정할 수 있음.</div>
                    </div>

                    <hr></hr>
                    <div>
                    <h5>제약조건 비활성화, 활성화</h5>
                    <div>제약 조건은 데이터 무결성을 보장하는 데 중요한 역할을 수행하지만, </div>
                    <div>신규 기능 개발 또는 테스트 같은 특정 업무를 수행해야 할 때 제약 조건이 걸림돌이 되기도 함.</div>
                    
                    <div>Disable의 경우</div>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginTop:"2%",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code0_1}
                        </Highlight>
                    </div>

                    <div>Enable의 경우</div>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginTop:"2%",
                        marginBottom:"2%"
                        }}>
                        <Highlight language="SQL">
                            {data.code0_2}
                        </Highlight>
                    </div>

                    <div>비활성화에는 DISABLE 절을, 활성화에는 ENABLE 절을 사용함</div>
                    <div>→ 제약 조건의 제한을 위 두 방법처럼 일시적으로 풀어주는 방법이 존재함.</div>
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