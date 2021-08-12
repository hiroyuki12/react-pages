import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <a href="https://swiftintroduction.hatenablog.com/entry/2020/09/27/183044" target="_blank" rel="noreferrer">teratailのAPIでswiftの質問を表示</a><br />
        <a href="https://qiita.com/_masa_u/items/4633519d6642098cd8fe" target="_blank" rel="noreferrer">nullチェック</a>
        <h2>Teratailでreact.jsタグありの記事を表示</h2>
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
