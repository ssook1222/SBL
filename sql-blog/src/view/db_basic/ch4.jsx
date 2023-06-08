import React from "react";

import Navbar from "../../components/navbar"

import Highlight from 'react-highlight'

function Db_post(){

    const data = {"value1" : "desc [테이블명]"}

    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <div style={{width: "80%", marginRight:"auto", marginLeft:"auto", marginTop:"1%", marginBottom:"5%"}}>
                <div>
                    <h1>4장</h1>
                    <hr></hr>
                    <h3 style={{textAlign:"right", fontWeight:"100"}}>23-01-16</h3>
                    <h5 style={{marginBottom:"2%"}}>이론 정리</h5>
                    
                    <h6>테이블의 구조</h6>
                    <div>
                        <i><b style={{backgroundColor:"black",color: "pink"}}>DESC</b></i> 명령어를 사용하여 테이블의 구조를 확인할 수 있다.
                    </div>
                    <div>order by 정렬 시 사용되는 desc와는 다르다!</div>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginTop : "10px"
                        }}>
                        <Highlight language="SQL">
                            {data.value1}
                        </Highlight>
                    </div>
                    <div>
                        <br></br>
                        <h6>EMP</h6>
                        <div>사원 데이터를 보관 및 관리하는 테이블</div>
                        <hr></hr>

                        <h6>DEPT</h6>
                        <div>회사를 구성하는 부서 데이터를 관리하는 테이블</div>
                        <hr></hr>

                        <h6>SALGRADE</h6>
                        <div>테이블에서 관리하는 사원들의 급여와 관련된 테이블</div>
                        <hr></hr>

                        <h6>가변형 문자열 이야기 : 저장 공간 할당 방식이 어떻게 되는가?</h6>
                        <div>여러 문자가 모여 있는 문자열</div>
                        <div>출력하려는 문자열이 가변형 문자열이라면, 문자열 데이터가 원래 할당한 공간보다 작은 공간을 차지할 경우에 데이터가 차지하는 공간만큼만 저장 공간을 할당함.</div>
                        <div>가변형 문자열과 반대로 저장 공간을 무조건 할당하는 방식인 <b>고정형 저장 방식</b>도 있음.</div>
                        <hr></hr>
                    </div>
                    
                    <h6>테이블 명명 규칙</h6>
                    <div>SQL문을 작성할 때 테이블 이름과 열 이름을 대문자로 작성하는 것을 권장</div>
                    <div>SQL문은 대&소문자를 구분하지는 않지만 가독성을 높이기 위해 SQL문 전체를 대문자로 사용할 수 있음</div>
                    <hr></hr>
                    <h6>데이터를 조회하는 방법</h6>
                    <div>데이터를 조회하는 데 사용하는 SELECT 문은 출력 데이터를 선정하는 방식에 따라 크게 아래와 같이 나뉨</div>
                    <br></br>
                    <div><b>행 단위로 조회하는 셀렉션(Selection)</b></div>
                    <div>행 단위로 원하는 데이터를 조회하는 방식.</div>
                    <div><i><b style={{backgroundColor:"black",color: "pink"}}>SELECT</b></i>문을 사용하여 특정 행만 선별하여 조회하는 방식이 셀렉션</div>
                    <br></br>
                    <div><b>열 단위로 조회하는 프로젝션(Projection)</b></div>
                </div>
                <hr></hr>

            </div>    
        </>
    )

}

export default Db_post;