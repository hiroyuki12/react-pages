import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';

class Main extends React.Component{
  render(){
    return (
      <div className="App">
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/react-pages/">Home</Nav.Link>
              <Nav.Link href='/react-pages/qiita'>Qiita</Nav.Link>
              <Nav.Link href='/react-pages/blog'>Blog</Nav.Link>
            </Nav>
          </Navbar >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/page/Main.js</code> and save to reload.
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
          <Link to='/react-pages/qiita'>Qiita(API)</Link>
          <Link to='/react-pages/mstdn'>Mstdn(API)</Link>
          <Link to='/react-pages/teratail'>WIP Teratail(API)</Link>
          <Link to='/react-pages/stackoverflow'>WIP StackOverFlow(API)</Link>
          <a
            href='https://qiita.com/tags/react'
            target="_blank"
            rel="noopener noreferrer"
          >
            Qiita(React) 外部サイト
          </a>
          <a
            href='https://zenn.dev/topics/react?order=latest' 
            target="_blank"
            rel="noopener noreferrer"
          >
            Zenn(React) 外部サイト
          </a>
          <Link to='/react-pages/login'>Firebase(login)</Link>
          <Link to='/react-pages/signup'>Firebase(signup)</Link>
          <Link to='/react-pages/home'>Firebase home(private)</Link>
          <Link to='/react-pages/add'>FireStore Add(private)</Link>
          <Link to='/react-pages/index'>FireStore Get Index(private)</Link>
          <Link to='/react-pages/sub'>sub -)</Link>
        </header>
      </div>
    )
  } 
}

export default Main;
