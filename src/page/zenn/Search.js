import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <a href="https://mbp.hatenablog.com/entry/2021/08/09/152334" target="_blank" rel="noreferrer">Netlify FunctionsでZenn Trend APIを作成</a><br />
        <a href="https://mbp.hatenablog.com/entry/2021/08/07/144120" target="_blank" rel="noreferrer">非公式ZennトレンドAPIを使って表示</a>
        <h2>ZennのTechトレンドの記事を表示</h2>
        <a href="zennbookstrend">Booksトレンド</a>
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
