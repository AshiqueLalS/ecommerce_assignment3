import React from 'react'
import { Button, Container, Nav, Navbar,Form } from 'react-bootstrap'


function Header() {

    function getinputval(event){
        console.log(event.target.value)
     }

  return (
    <div>
        <Navbar bg="primary" expand="lg" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link href="/Contact-us">Contact us</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange= {getinputval}
            />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  </div>
  )
}

export default Header