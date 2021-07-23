import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav } from 'react-bootstrap';

class Main extends React.Component{
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/page/main.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://mbp.hatenablog.com/entry/2021/07/10/211218"
            target="_blank"
            rel="noopener noreferrer"
          >
            環境構築
          </a>
          <Link to='/react-pages/qiita'>qiita</Link>
          <Link to='/react-pages/simpletodo'>simpletodo</Link>
          <Link to='/react-pages/todolist'>todolist</Link>
          <Link to='/react-pages/counter'>counter</Link>
          <Link to='/react-pages/todomatic'>todomatic</Link>
          <Link to='/react-pages/tweet'>tweet</Link>
          <Link to='/react-pages/clock'>clock</Link>
          <Link to='/react-pages/test'>test</Link>
          <Link to='/react-pages/one'>one</Link>
        </header>
      </div>
    )
  } 
}

export default Main;
