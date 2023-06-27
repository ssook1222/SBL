import React from "react";
import Navbar from "../../components/navbar"
import {Helmet} from 'react-helmet'

import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function Certficate_post(){
    return(
        <>
            <Helmet>
                <meta   name="description" 
                        content="DASP, ADSP, SQLD 자격증 취득 후기 정리한 포스팅, 공부 기간 및 난이도 관련 내용 포함" 
                        data-react-helmet="true"
                />
            </Helmet>
            <Navbar></Navbar>
            <div style={{width: "80%", marginRight:"auto", marginLeft:"auto", marginTop:"1%", marginBottom:"5%"}}>
            <div>
                    <h1>SQLD, ADSP, DASP 자격증 취득 후기</h1>
                    <hr></hr>
                    <h3 style={{textAlign:"right", fontWeight:"100"}}>23.05.19</h3>
                    <h5 style={{marginBottom:"2%"}}>※ Velog에서 작성했던 포스팅을 해당 블로그로 이전시킨 글입니다.</h5>
                    <div style={{
                        border:"1px solid #eedfd0",
                        borderRadius:"10px",
                        boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                        padding: "10px",
                        marginBottom:"2%"
                        }}>
                        오늘 딱 DASP 자격증 취득을 끝내며, 한국데이터산업진흥원에서 주관하는 자격증들 중 빅분기(빅데이터분석기사)를 제외한 자격증 취득을 완료했다! <br></br>
                        
                            <img 
                                style={{width:"100%", display:"inline-block", margin:"auto"}}
                                src="https://velog.velcdn.com/images/ssook1222/post/7d51b886-d768-42db-a3ae-386c3c119065/image.png"></img>
                        

                        <br></br><br></br>
                        <h5>자격증, 취업할 때 도움이 되나요?</h5>
                        솔직히 취업할 때에 있어 이런 자격증이 도움이 되냐고 물으면 자격증 콜렉터인 나조차도 회의적인 시선이긴 하다. <br></br>
                        그래도 이들 자격증을 우대해 주는 곳이 있다. 이를테면 금융권 일부?
                        지금은 취업을 했지만, 한창 취준생일 때는 그래도 자격증이 있어 손해 본 적은 없었다. <br></br>
                        (물론 플젝이 어느 정도 있어서 포폴도 준비가 되어 있었다!! 플젝 VS 자격증하면 대부분의 경우 플젝을 추천한다)<br></br>

                        그렇지만 어차피 자신이 가고자 하는 직무과 연관된 전공 관련 공부를 다들 면접 준비하면서 할텐데, 공부하면서 자격증 따두는 목적이라면 그렇게 나쁘지는 않은 거 같다.<br></br>
                        근데 이제 데이터분석 쪽인데 DASP를 딴다던가, 데이터베이스 쪽으로 가고 싶은데 ADSP를 딴다던가 하는 그런...행동은 추천하지 않는다.<br></br>
                        <br></br>

                        <h5>한국데이터산업진흥원 시험들 특징</h5>
                        ● 수험표가 필요없다.<br></br>
                        ● 시험시간 절반 지나면 퇴장 가능.<br></br>
                        ● 문제지를 안 줘서 수험자끼리 복기해야 한다.<br></br>
                        ● 시험 시작 시간이 10시까지라 하면, 9시 30분까지는 오라고 하는데 10시까지 가도 무방하다.<br></br>
                        <br></br>
                        뭐 이정도...? <br></br>
                        그리고 경인중학교는 웬만하면 고사장으로 추가되는 거 같다. DASP는 그것도 모르고 다른 곳에서 봤지만^^.....<br></br>

                        사실 한국데이터산업진흥원 시험들 특징에 문제은행을 추가하고 싶었으나 DASP 때문에...<br></br>
                        DASP는 문제은행이 아니기 때문에 이론을 굉장히 많이 숙지해야 한다. <br></br>
                        <br></br>
                        <h5>체감 시험 난도 & 투자 기간</h5>
                        <div style={{backgroundColor:"rgb(253, 250, 244) ", height:"1%"}}>
                            <p><b>SQLD >>> ADSP >>>>>>>>> DASP</b></p>
                        </div>

                        <h6>SQLD</h6>
                        컴퓨터 과학 전공, 경영 비즈니스 데이터 쪽 트랙 복수전공을 해서 그런가 모든 시험에서 노베이스는 아니었다.
                        <br></br>
                        그렇지만, SQLD가 가장 자료가 많아서 그런가 가장 체감 문제 난도는 낮았다.<br></br>
                        SQLD는 한 1주 정도 투자했고, 이기적 기출문제집만 풀었다.<br></br>
                        <br></br>
                        <h6>ADSP</h6>
                        ADSP도 이제 좀 자료가 많아지긴 했는데, 내가 볼 때만 해도 SQLD에 밀렸었다ㅋㅋㅋ<br></br>
                        ADSP는 인턴이랑 병행해서 딱 1달 잡았고, 출퇴근 길 + 시험 1주 전 주말에 달려서 했다.<br></br>
                        책은 ADSP 1권으로 끝내기 이론서 1회독 + 기출문제 절반 정도 풀어서 턱걸이로 붙었다.<br></br>
                        원래 학교 수업에서 R을 다루고 있어서 그나마 선방했던 거 같다.<br></br>
                        <br></br>
                        <h6>DASP</h6>
                        진짜 미치는 줄 알았다.<br></br>
                        일단 자료가 없어서...<br></br>
                        위의 두 시험과 비교했을 때 압도적으로 자료가 없다.<br></br>
                        <br></br>
                        그래서 그냥 가이드북 진짜 두꺼운 거 2회독 하고, 기출문제집 2회독 하고 갔다.<br></br>
                        뭐 한 권으로 끝내기 책이 있는데 사 놓고 안 봤다. 너무 오타가 많고 편집 실수도 많아서 책 내용에 믿음이 안 갔다...ㅎ<br></br>
                        회사랑 병행해서 출퇴근길 + 2주 주말 내내 공부해서 약 딱 5주 투자했고 60점 턱걸이로 합격했다<br></br>
                        <hr></hr>
                        다음에는 빅분기를 목표로 하려고 하는데...<br></br>
                        시간이 나겠지...?<br></br>
                        <br></br>
                        아무튼 자기개발용으로 이런 자격증 취득하는 건 나쁘지 않다고 보는 입장이라 심심하면 한 번 따보는 것도 괜찮을 거 같다~~!<br></br>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
        
    )
}

export default Certficate_post;