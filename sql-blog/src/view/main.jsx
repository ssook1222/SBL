import React from "react";

import Navbar from "../components/navbar"

function Main_view(){
    return(
        <>
            <div style = {{backgroundColor: 'black', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <img style = {{width: '100%'}} src='/img/sql_blog_main.png'></img>
            
            <div style = {{width: "60%", margin:"auto"}}>
                <h1 style={{fontWeight:"200", fontSize:"1rem", marginTop:"5%", marginBottom:"1%"}}>
                    <i> 추천 포스팅 </i>
                </h1>
                <hr></hr>
                <h5 style={{fontWeight:"100", fontSize:"0.8rem", marginTop:"-1%", textAlign:"right"}}>
                    SQL 관련 포스팅 중 추천하는 포스팅입니다.
                </h5>

                <div style={{display: "flex", alignItems: "center", marginBottom: '0'}}>
                    <figure className="figure" style={{width:"50rem"}}>
                        <img style={{height: '30%', boxShadow: "5px 5px 5px 5px #E2E2E2"}} 
                            src='/img/thumb_nail.png' 
                            className="figure-img img-fluid rounded" 
                            alt="..." />
                    </figure>
                    <div style={{marginLeft: "30px"}}>
                        <h5>상품을 구매한 회원 비율 구하기 외 3건</h5>
                        <br></br>
                        <p>
                            나는 인라인뷰 대신 WITH 절이랑 EXTRACT 써서 풀었다 <br />
                            JOIN_2021은 2021년에 가입한 사람들(분모로 쓰려고 따로 뽑음)이구
                            PURCHASE_2021은 2021년에 가입한 사람들 중 구매한 건을 뽑아서 고걸 이제 연, 월로 각각 정렬한 쿼리문이다. 
                            요건 또 분자로 사용했다 ㅎ <br />
                            ...
                        </p>
                    </div>
                </div>

                <hr></hr>

                <div style={{display: "flex", alignItems: "center"}}>
                    <figure className="figure" style={{width:"50rem"}}>
                        <img style={{height: '30%', boxShadow: "5px 5px 5px 5px #E2E2E2"}} 
                            src='/img/database_basic.png' 
                            className="figure-img img-fluid rounded" 
                            alt="..." />
                    </figure>
                    <div style={{marginLeft: "30px"}}>
                        <h5 style={{marginBottom: "0"}}>데이터 베이스 입문 11장</h5>
                        <br></br>
                        <p>
                        데이터베이스 입장에서는 데이터를 변경하는 DML 실행 후 <br></br>
                        COMMIT으로 데이터베이스에 반영할 지 ROLLBACK으로 실행을 취소할 지 알 수 없음.
                        그렇기에 ROLLBACK으로 명령어 수행이 취소될 경우를 대비해 변경 전 데이터를 언두 세그먼트에 따로 저장 <br />
                            ...
                        </p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Main_view