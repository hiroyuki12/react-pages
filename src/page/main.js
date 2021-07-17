import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

class Main extends React.Component{
  render(){
    return (
      <div className="App">
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
          <Link to='/react-pages/qiita'>qiita</Link>
          <Link to='/react-pages/simpletodo'>simpletodo</Link>
          <Link to='/react-pages/todolist'>todolist</Link>
          <Link to='/react-pages/counter'>counter</Link>
          <Link to='/react-pages/todomatic'>todomatic</Link>
          <Link to='/react-pages/tweet'>tweet</Link>
          <Link to='/react-pages/one'>one</Link>
        </header>
      </div>
    )
  } 
}

export default Main;
