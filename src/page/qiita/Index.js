import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import Search from "./Search";
import { Link } from 'react-router-dom';

class Qiita extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderImageList = this.renderImageList.bind(this);
  }

  handleClick(target) {
    const search = target;
    const limit = 20;
    const url = `https://qiita.com/api/v2/items?page=1&per_page=${limit}&query=${search}`;
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer 0a499cd45f8b05c01ec95e4b852f6e91d0dfff44"
        }
      })
      .then((res) => {
        this.setState({ postsList: res.data });
      })
      .catch(console.error);
  }

  renderImageList(list) {
    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>
          <span>{index}: </span>
          <a href={item.url}>{item.title}</a>
        </li>
      );
    });
    return posts;
  }

  render() {
    return (
      <div>
        <Search search={this.handleClick} />
        <ul>{this.renderImageList(this.state.postsList)}</ul>
      </div>
    );
  }
}

export default Qiita;
