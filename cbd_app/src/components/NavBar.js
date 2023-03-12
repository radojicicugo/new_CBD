import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'


function NavBar(props) {



     return (
          <div className="all-box">
               <Navbar bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand href="#home" style={{color:'green'}}>CBD ujey</Navbar.Brand>
                         <Nav className="me-auto">
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/products">Products</Nav.Link>
                              <Nav.Link href="/pricing">Pricing</Nav.Link>
                              <Nav.Link className='contact' href="/contact">Contact</Nav.Link>
                         </Nav>
                    </Container>
               </Navbar>
               <br />
          </div>
     );
}

export default NavBar;