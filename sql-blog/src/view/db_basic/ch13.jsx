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
                    </div>
                    <hr></hr>

                    <div>
                    <div> - USER 접두어로 시작하는 데이터 사전의 경우 현재 오라클에 접속해 있는 사용자가 소유한 객체 정보가 포함되어 있음</div>
                    <div> - ALL 접두어로 시작하는 데이터 사전의 경우 오라클 데이터베이스에 접속해 있는 사용자가 소유한 객체 및 다른 사용자가 소유한 객체 중 사용이 허락되어 있는 객체 정보를 가지고 있음</div>
                    <div> - DBA 접두어로 시작하는 데이터 사전의 경우 데이터베이스 관리 권한을 가진 사용자만 조회할 수 있는 테이블로서 SCOTT 계정으로는 조회가 불가능함. </div>
                    <div> → 데이터베이스 자체를 관리하는 목적 외에 오라클 데이터베이스를 사용하여 데이터를 보관하고 관리하는 업무를 진행할 때에는 그리 자주 사용하지 않음 </div>
                    <div> 인덱스는 사용자가 직접 특정 테이블의 열에 지정할 수도 있지만, 열이 기본 키 또는 고유 키일 때 자동으로 생성됨 </div>
                    </div>
                    
                    <hr></hr>

                    <div>
                        <h6>인덱스 생성</h6>
                        <div>사용자가 직접 인덱스를 만들 때는 CREATE문을 사용</div>
                        <div>CREATE문에서는 인덱스를 생성할 테이블 및 열을 지정하며 열은 하나 또는 여러 개 지정 가능함.</div>
                    </div>
                    <hr></hr>
                    <div>
                        <h6>뷰</h6>
                        <div>흔히 가상 테이블로 부르는 뷰는 하나 이상의 테이블을 조회하는 SELECT문을 저장한 객체</div>
                        <div>→ SELECT문을 저장하기 때문에 물리적 데이터를 따로 저장하진 않음</div>
                        <div>편리성</div>
                        <div>SELECT문의 복잡도를 완화하기 위해</div>
                        <div>보안성</div>
                        <div>테이블의 특정 열을 노출하고 싶지 않을 경우</div>
                    </div>
                    <hr></hr>

                    <div>
                        <h6>RowNum</h6>
                        <div>의사 열이라고 하는 특수열</div>
                        <div>데이터가 저장되는 실제 테이블에 존재하지는 않지만, 특정 목적을 위해 테이블에 저장되어 있는 열처럼 사용 가능한 열을 의미</div>
                        <div>ROWNUM 열 데이터 번호는 테이블에 저장된 행이 조회된 순서대로 매겨진 일련 번호</div>
                        <div>ROWNUM은 데이터를 하나씩 추가할 때 매겨지는 번호이므로 ORDER BY 절로 정렬해도 유지되는 특성이 있음</div>
                    </div>
                    <hr></hr>

                    <div>
                        <h6>시퀀스</h6>
                        <div>오라클 데이터베이스에서 특정 규칙에 맞는 연속 숫자를 생성하는 객체</div>
                    </div>
                    <hr></hr>

                    <div>
                        <h6>동의어</h6>
                        <div>테이블, 뷰, 시퀀스 등 객체 이름 대신 사용할 수 있는 다른 이름을 부여하는 객체</div>
                        <div>테이블 이름이 너무 길어 사용이 불편할 때 좀 더 간단하고 짧은 이름을 하나 더 만들어주기 위해 사용</div>
                        <div>동의어를 만들기 위해서는 CREATE문을 사용하여 작성</div>
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