import React from 'react'
import Api from './Api'

function YoutubeApp() {
  console.log('Hello');
  return (
    <div>
      <a href="https://mbp.hatenablog.com/entry/2021/08/12/082102" target="_blank" rel="noreferrer">Youtube APIを使って検索＋再生</a><br />
      <p>Youtube APIのテスト</p>
      <Api />
    </div>
  );
}

export default YoutubeApp;
