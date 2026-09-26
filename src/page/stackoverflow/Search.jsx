import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <a href="https://swiftintroduction.hatenablog.com/entry/2020/10/12/223935" target="_blank" rel="noreferrer">Stack OverflowのAPIでswiftの質問を表示</a><br />
        <a href="https://qiita.com/kei_1011/items/cdc12086347025719152" target="_blank" rel="noreferrer">link</a>
        <h2>StackOverFlowでreactタグありの記事を表示</h2>
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
