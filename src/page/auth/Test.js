import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav } from 'react-bootstrap';

class Test extends Component {
    render() {
        return (
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <div>
                <Button> ボタンだよ </Button>
              </div>
            </Nav>
          </Navbar >
        );
    }
}
export default Test;
