import React from "react";

class SearchSwift extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>QiitaでSwiftタグありの記事を表示</h2>
        <a href="qiita">React</a>
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

export default SearchSwift;