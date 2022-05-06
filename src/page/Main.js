import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';

function Main() {
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
        <Link to='/react-pages/qiita'>Qiita(API) Function</Link>
        <br />
        <Link to='/react-pages/gurayoutube'>Youtube ホロライブenで英語の勉強 Gawr Gura</Link>
        <br />
        <Link to='/react-pages/caliyoutube'>Youtube ホロライブen Calliope</Link>
        <br />
        <Link to='/react-pages/feedly'>Feedly(API)</Link>
        <br />
        <a
          href='https://zenn.dev/topics/react?order=latest' 
          target="_blank"
          rel="noopener noreferrer"
        >
          Zenn(React) 外部サイト
        </a>
        <br />
        <Link to='/react-pages/zenn'>Zenn(非公式API)</Link>
        <br />
        <Link to='/react-pages/mstdn'>Mstdn(API)</Link>
        <br />
        <Link to='/react-pages/stackoverflow'>StackOverFlow(API)</Link>
        <br />
        <Link to='/react-pages/teratail'>Teratail(API)</Link>
        <br />
        <a
          href='https://qiita.com/tags/react'
          target="_blank"
          rel="noopener noreferrer"
        >
          Qiita(React) 外部サイト
        </a>
        <br />
        <a
          href='https://d.hatena.ne.jp/keyword/react'
          target="_blank"
          rel="noopener noreferrer"
        >
          はてなブログタグ(React) 外部サイト
        </a>
        <br />
        <Link to='/react-pages/sub'>sub -)</Link>
      </header>
    </div>
  )
}

export default Main;
