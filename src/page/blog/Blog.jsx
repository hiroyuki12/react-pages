import React from 'react';
import '../../App.css';
import { Navbar, Nav } from 'react-bootstrap';

class Blog extends React.Component{
  render(){
    return (
      <div className="App">
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href='/react-pages'>Home</Nav.Link>
              <Nav.Link href='/react-pages/qiita'>Qiita</Nav.Link>
              <Nav.Link href='/react-pages/blog'>Blog</Nav.Link>
            </Nav>
          </Navbar >
        <header className="App-header">
          <h1>環境構築</h1>
          <p>
            Edit <code>src/page/blog/index.js</code> and save to reload.
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
        </header>
      </div>
    )
  } 
}

export default Blog;
