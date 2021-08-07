import React, { useEffect, useRef, useState, useRefObject } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

class Zenn extends React.Component {

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
    const url = `https://zenn-api.netlify.app/.netlify/functions/trendTech`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ postsList: this.state.postsList.concat(res.data)});
      })
      .catch(console.error);
  }

  renderImageList(list) {
    const posts = list.map((item, index) => {
      const url = 'https://zenn.dev/' + item.user.username + '/articles/' + item.slug;
      return (
        <li className="item" key={index}>
          <img src={item.user.avatarSmallUrl} width="50" height="50" loading="lazy" />
          <a href={url} target="_blank" rel="noreferrer">{item.title}</a> {moment(item.publishedAt).fromNow()}
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
        <Footer />
      </div>
    );
  }
}

export default Zenn;
