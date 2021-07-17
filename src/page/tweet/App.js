import React, { Component } from 'react';
import './App.css';
import './style.css';
import Tweet 	  from "./components/Tweet";
import Timeline   from "./components/Timeline";
import TweetInput from "./components/TweetInput";

class App extends Component {
  render() {
  const tweets = [
    {
      id: 0,
      icon: '🌽',
      displayName: 'もろこし太郎',
      accountName: 'morokoshi',
      content: '今日も1日もろこしがうまい'
    },
    {
      id: 1,
      icon: '🦐',
      displayName: 'エビデンス',
      accountName: 'evidence',
      content: 'かにみそたべたい'
    }
  ];

    return (
      <div>
        <TweetInput />
        <Timeline tweets={tweets}/>
      </div>
    );
  }
}

export default App;
