import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav } from 'react-bootstrap';

class Sub extends React.Component{
  render(){
    return (
      <div className="App">
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href='/react-pages/qiita'>Qiita</Nav.Link>
              <Nav.Link href='/react-pages/blog'>Blog</Nav.Link>
            </Nav>
          </Navbar >
        <header className="App-header">
          <p>
            Edit <code>src/page/Sub.js</code> and save to reload.
          </p>
          <Link to='/react-pages/main'> (- main</Link>
          <Link to='/react-pages/simpletodo'>simpletodo</Link>
          <Link to='/react-pages/todolist'>todolist</Link>
          <Link to='/react-pages/counter'>counter</Link>
          <Link to='/react-pages/todomatic'>todomatic</Link>
          <Link to='/react-pages/tweet'>tweet</Link>
          <Link to='/react-pages/clock'>clock</Link>
          <Link to='/react-pages/testnavbar'>testnavbar</Link>
          <Link to='/react-pages/one'>one</Link>
        </header>
      </div>
    )
  } 
}

export default Sub;
