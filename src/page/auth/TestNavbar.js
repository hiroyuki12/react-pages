import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class TestNavbar extends Component {
    render() {
        return (
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href='/react-pages'>Home</Nav.Link>
              <Nav.Link href='/react-pages/qiita'>Qiita</Nav.Link>
              <Nav.Link href='/react-pages/blog'>Blog</Nav.Link>
            </Nav>
          </Navbar >
        );
    }
}
export default TestNavbar;
