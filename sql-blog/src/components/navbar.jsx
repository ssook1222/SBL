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
                    <Navbar.Brand href="#home"><h3>SQL-BLOG</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ margin:"auto" }}>
                        <Nav.Link href="#features" style={{ marginRight: '30px' }} >데이터베이스 입문</Nav.Link>
                        <Nav.Link href="#pricing" style={{ marginLeft: '30px' }}>SQL 문제풀이</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Main_view