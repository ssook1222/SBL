import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

import './navbar.css'

function Main_view(){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" variant="white">
                <Container>
                    <Navbar.Brand href="/" id="sql_title_div"><h3 id="sql_title" 
                    style={{color: "rgb(58, 44, 26)", fontFamily:"Georgia"}}>SQL-BLOG</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="sql_button" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ margin:"auto" }} id="sql_index">
                        <Nav.Link id="sql1" href="db-basic" style={{ marginRight: '30px' }} >데이터베이스 입문</Nav.Link>
                        <Nav.Link id="sql2" href="sql-query" style={{ marginLeft: '30px' }}>SQL 문제풀이</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Main_view