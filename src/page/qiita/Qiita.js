import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'
import { userIntersection } from './hooks/intersection';

class Qiita extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
      page: 1
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderImageList = this.renderImageList.bind(this);
  }

  handleClick(target) {
    const limit = 40;
    this.setState({ page: this.state.page + 1})
    const page = this.state.page;
    const url = `https://qiita.com/api/v2/tags/react/items?page=${page}&per_page=${limit}`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ postsList: this.state.postsList.concat(res.data)});
      })
      .catch(console.error);
  }

  renderImageList(list) {
    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>
          <img src={item.user.profile_image_url} width="50" height="50" loading="lazy" />
          <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> {moment(item.created_at).fromNow()}
        </li>
      );
    });
    return posts;
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <Search search={this.handleClick} />
        <ul>{this.renderImageList(this.state.postsList)}</ul>

        <button onClick={this.handleClick}>もっと見る</button>
        <Footer />
      </div>
    );
  }
}

export default Qiita;
