import React from "react";
import { useState } from 'react';

import Navbar from "../components/navbar"

import Highlight from 'react-highlight'


function Db_post(){

    const [title, setTitle] = useState('제목');
    const [date, setDate] = useState('날짜');
    const [subTitle1, setSubTitle1] = useState('소제목');
    const [code1, setCode1] = useState(
        'SELECT * FROM LOVE'
    );

    const [subTitle2, setSubTitle2] = useState('소제목');
    const [code2, setCode2] = useState(
        'SELECT * FROM LOVE'
    );

    const [subTitle3, setSubTitle3] = useState('소제목');
    const [code3, setCode3] = useState(
        'SELECT * FROM LOVE'
    );

    return(
        <>
            <div style = {{backgroundColor: 'rgb(58, 44, 26)', width:'100%', height: '3px'}} ></div>
            <Navbar></Navbar>
            <div style={{width: "80%", marginRight:"auto", marginLeft:"auto", marginTop:"1%", marginBottom:"5%"}}>
                <h1>{title}</h1>
                <hr></hr>
                <h3 style={{textAlign:"right", fontWeight:"100"}}>{date}</h3>
                <h5 style={{marginBottom:"2%"}}>{subTitle1}</h5>
                <div style={{
                    border:"1px solid #eedfd0",
                    borderRadius:"10px",
                    boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                    padding: "10px",
                    marginBottom:"2%"
                    }}>
                    <Highlight language="SQL">
                        {code1}
                    </Highlight>
                </div>

                <hr></hr>
                <h5 style={{marginBottom:"2%"}}>{subTitle2}</h5>
                <div style={{
                    border:"1px solid #eedfd0",
                    borderRadius:"10px",
                    boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                    padding: "10px",
                    marginBottom:"2%"
                    }}>
                    <Highlight language="SQL">
                        {code2}
                    </Highlight>
                </div>

                <hr></hr>
                <h5 style={{marginBottom:"2%"}}>{subTitle2}</h5>
                <div style={{
                    border:"1px solid #eedfd0",
                    borderRadius:"10px",
                    boxShadow: "0.1px 0.1px 5px #d8c6b5, -0.1px -0.1px 5px #d8c6b5",
                    padding: "10px",
                    marginBottom:"2%"
                    }}>
                    <Highlight language="SQL">
                        {code2}
                    </Highlight>
                </div>
                
            </div>    
        </>
    )

}

export default Db_post;