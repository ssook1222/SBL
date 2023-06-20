import React from "react";

import Navbar from "../../components/navbar"

import Highlight from 'react-highlight'

function Db_post(){

    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <div style={{width: "80%", marginRight:"auto", marginLeft:"auto", marginTop:"1%", marginBottom:"5%"}}>
                <div>
                    <h1>11장</h1>
                    <hr></hr>
                    <h3 style={{textAlign:"right", fontWeight:"100"}}>23-01-18</h3>
                    <h5 style={{marginBottom:"2%"}}>이론 정리</h5>
                    데이터베이스 입장에서는 데이터를 변경하는 DML 실행 후 COMMIT으로 데이터베이스에 반영할 지 ROLLBACK으로 실행을 취소할 지 알 수 없음. <br></br>
                    그렇기에 ROLLBACK으로 명령어 수행이 취소될 경우를 대비해 변경 전 데이터를 언두 세그먼트에 따로 저장해 둠 <br></br>
                    <hr></hr>
                    - LOCK은 하나의 데이터를 여러 곳에서 동시에 조작하려 할 때, 발생할 수 있는 혼란을 최소화하기 위한 중요한 요소 <br></br>
                    SQL문으로 조작하는 대상 데이터가 특정 행 데이터일 경우에 해당 행만 LOCK이 발생한다는 의미로 <b>행 레벨 록</b>이라고 함. <br></br>

                    - 데이터 조작 명령어를 사용하여 데이터가 변경 중인 테이블은 테이블 단위 잠금이라는 의미로 <b>테이블 레벨 록</b>이 걸리게 됨.<br></br>
                    데이터를 변경 중인 세션 외 데이터 정의어를 통한 테이블의 구조를 변경할 수는 없음<br></br>




                    - 특정 세션에서 데이터 조작이 완료될 때까지 다른 세션에서 데이터 조작을 기다리는 현상을 이라고 부름 <br></br>
                </div>
                <hr></hr>

            </div>    
        </>
    )

}

export default Db_post;