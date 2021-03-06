import React, { Component } from 'react';
//import './style.css';
import Timeline   from "./components/Timeline";
import TweetInput from "./components/TweetInput";

class Tweet extends Component {
  render() {
  const tweets = [
    {
      id: 0,
      icon: 'ð½',
      displayName: 'ããããå¤ªé',
      accountName: 'morokoshi',
      content: 'ä»æ¥ã1æ¥ããããããã¾ã'
    },
    {
      id: 1,
      icon: 'ð¦',
      displayName: 'ã¨ããã³ã¹',
      accountName: 'evidence',
      content: 'ãã«ã¿ããã¹ãã'
    }
  ];

    return (
      <div>
        <a href="https://mbp.hatenablog.com/entry/2021/06/29/215302" target="_blank" rel="noreferrer">Dockerã³ã³ããã§React</a><br />
        <a href="https://sbfl.net/blog/2019/02/20/react-only-tutorial/" target="_blank" rel="noreferrer">æ­£çæ­£éã®Reactã ãã®ä¸ç´ç©ãªãã§Reactå¥é</a>
        <TweetInput />
        <Timeline tweets={tweets}/>
      </div>
    );
  }
}

export default Tweet;
