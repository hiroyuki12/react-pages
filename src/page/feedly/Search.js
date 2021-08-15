import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <a href="https://mbp.hatenablog.com/entry/2021/08/14/111848?_ga=2.196489130.788221064.1628304800-1619804006.1627465715" target="_blank" rel="noreferrer">AWS Lambda Hello World、Feedly APIの呼び出し</a><br />
        <a href="https://glasses-dog.hateblo.jp/search?q=feedly+Cloud" target="_blank" rel="noreferrer">feedly Cloud APIでカスタムRSSリーダーを作る - Glasses Dogの雑記</a><br />
        <a href="https://mbp.hatenablog.com/entry/2021/08/14/104812" target="_blank" rel="noreferrer">Feedly APIはCORSを許可していない</a>
        <h2>Feedlyのhbfav記事を表示</h2>
        <a href="qiitaswift"></a>
        <form onSubmit={this.handleSubmit}>
          <input className="siimple-btn siimple-btn--teal" type="submit" value="Search" />
        </form>
      </div>
    );
  }

  // valueが変更された際に実行
  handleChange = (event) => {
    // 変更したvalueが返ってくる
    const title = event.target.value;
    // stateを変更
    this.setState({ title: title });
  };

  // submitされた際に実行
  handleSubmit = (event) => {
    event.preventDefault(); // ページ遷移防止
    // 受け取ったメソッドを実行し、app の state を変更している
    this.props.search(this.state.title);
    this.setState({ title: "" }); // submit後は、titleを空にする
  };
}

export default Search;
