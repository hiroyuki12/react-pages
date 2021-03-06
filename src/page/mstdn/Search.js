import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <a href="https://mbp.hatenablog.com/entry/2021/07/30/225748" target="_blank" rel="noreferrer">mstdn.guruのトゥートを表示</a><br />
        <h2>mstdn.guruでdrikinのトゥートを表示</h2>
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
