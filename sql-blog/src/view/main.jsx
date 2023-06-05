import React from "react";

import Navbar from "../components/navbar"
import Badge from 'react-bootstrap/Badge';

import './main.css'


function Main_view(){
    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <img style = {{width: '100%'}} src='/img/001.png'></img>
            
            <div id = 'contents' style = {{width: "60%", margin:"auto", marginBottom: "50px"}}>
                <h1 style={{fontWeight:"200", fontSize:"1rem", marginTop:"5%", marginBottom:"1%"}}>
                    <i> 추천 포스팅 </i>
                </h1>
                <hr></hr>
                <h5 style={{fontWeight:"100", fontSize:"0.8rem", marginTop:"-1%", textAlign:"right"}}>
                    SQL 관련 포스팅 중 추천하는 포스팅입니다.
                </h5>

                <a href="/cert" style={{textDecoration:"none", color:"black"}}>
                    <div class = 'container' style={{display: "flex", alignItems: "center"}}>
                        <figure id ="top1" className="figure" style={{width:"300px"}}>
                            <img style={{height: '30%', boxShadow: "5px 5px 5px 5px #E2E2E2"}} 
                                src='/img/ceft.png' 
                                className="figure-img img-fluid rounded" 
                                alt="..." />
                        </figure>
                        <div class = 'sub-container' style={{marginLeft: "30px"}}>
                            <h5 style={{marginBottom: "0"}}>SQLD, ADSP, DASP 자격증 취득 후기</h5>
                            <br></br>
                            <p>
                            오늘 딱 DASP 자격증 취득을 끝내며, <br />
                            한국데이터산업진흥원에서 주관하는 자격증들 중 빅분기(빅데이터분석기사)를 제외한 자격증 취득을 완료했다! <br />
                            <Badge className = "text-badge" bg="secondary">...</Badge>
                            </p>
                        </div>
                    </div>
                </a>

                <hr />

                <a href="/jan-third" style={{textDecoration:"none", color:"black"}}>
                    <div class = 'container' style={{display: "flex", alignItems: "center", marginBottom: '0'}}>
                        <figure id ="top2" className="figure" style={{width:"550px"}}>
                            <img style={{height: '30%', boxShadow: "5px 5px 5px 5px #E2E2E2"}} 
                                src='/img/thumb_nail.png' 
                                className="figure-img img-fluid rounded" 
                                alt="..." />
                        </figure>
                        <div class = 'sub-container' style={{marginLeft: "30px"}}>
                            <h5>상품을 구매한 회원 비율 구하기 외 2건</h5>
                            <br></br>
                            <p>
                                나는 인라인뷰 대신 WITH 절이랑 EXTRACT 써서 풀었다 <br />
                                JOIN_2021은 2021년에 가입한 사람들(분모로 쓰려고 따로 뽑음)이구
                                PURCHASE_2021은 2021년에 가입한 사람들 중 구매한 건을 뽑아서 고걸 이제 연, 월로 각각 정렬한 쿼리문이다. 
                                요건 또 분자로 사용했다 ㅎ <br />
                                <Badge className = "text-badge" bg="secondary">...</Badge>
                            </p>
                        </div>
                    </div>
                </a>
                <hr />

                <a href="/ch11" style={{textDecoration:"none", color:"black"}}>
                    <div class = 'container' style={{display: "flex", alignItems: "center"}}>
                        <figure id ="top3" className="figure" style={{width:"500px"}}>
                            <img style={{height: '30%', boxShadow: "5px 5px 5px 5px #E2E2E2"}} 
                                src='/img/database_basic.png' 
                                className="figure-img img-fluid rounded" 
                                alt="..." />
                        </figure>
                        <div class = 'sub-container' style={{marginLeft: "30px"}}>
                            <h5 style={{marginBottom: "0"}}>데이터 베이스 입문 11장</h5>
                            <br></br>
                            <p>
                            데이터베이스 입장에서는 데이터를 변경하는 DML 실행 후 <br></br>
                            COMMIT으로 데이터베이스에 반영할 지 ROLLBACK으로 실행을 취소할 지 알 수 없음.
                            그렇기에 ROLLBACK으로 명령어 수행이 취소될 경우를 대비해 변경 전 데이터를 언두 세그먼트에 따로 저장 <br />
                            <Badge className = "text-badge" bg="secondary">...</Badge>
                            </p>
                        </div>
                    </div>
                </a>

                <hr></hr>

            </div>
        </>
    )
}

export default Main_view