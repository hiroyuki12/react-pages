import React, { Component } from 'react';
import './App.css';
import './style.css';
import Timeline   from "./components/Timeline";
import TweetInput from "./components/TweetInput";

class Tweet extends Component {
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
        <a href="https://mbp.hatenablog.com/entry/2021/06/29/215302" target="_blank" rel="noreferrer">DockerコンテナでReact</a><br />
        <a href="https://sbfl.net/blog/2019/02/20/react-only-tutorial/" target="_blank" rel="noreferrer">正真正銘のReactだけの不純物なしでReact入門</a>
        <TweetInput />
        <Timeline tweets={tweets}/>
      </div>
    );
  }
}

export default Tweet;
